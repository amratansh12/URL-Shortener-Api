require('dotenv').config()

const handleRegister = async (req, res, bcrypt, Registers, jwt) => {
    const {name, email, password} = req.body; 

    const secretKey = process.env.ACCESS_TOKEN_SECRET

    const handleErrors = (e) => {
        const errors={
            name: '',
            email: '',
            password: ''
        }

        if(e.code === 11000){
            return errors.email = 'This email is already linked'
        }
        if(e.message.includes('Registers validation failed')){
            Object.values(e.errors).forEach(error => {
                errors[error.properties.path] = error.properties.message
            })
        }
        return errors;
    }

    const hash = bcrypt.hashSync(password, 10)

    try{
        const newRegister = await Registers.create({name: name, email: email, password: hash})
        const payload = {
            id: newRegister._id
        }
        const token = jwt.sign(payload, secretKey, {expiresIn : 30*60} )
        res.status(200).json(token)
    }catch(e){
        const errors = handleErrors(e);
        res.status(400).json({errors})
    }
}

module.exports = {
    handleRegister: handleRegister
}