require('dotenv').config()

const handleSignIn = async (req, res, bcrypt, Registers, jwt) => {
    const {email, password} = req.body;

    const secretKey = process.env.ACCESS_TOKEN_SECRET

    Registers.findOne({
        email: email
    })
    .exec()
    .then(user => {
        if(user !== null){
            const passwordMatch = bcrypt.compareSync(password, user.password)
            if(user && passwordMatch){
                const token = jwt.sign({id: user._id}, secretKey, {expiresIn : 30*60});
                res.status(200).json(token)
            }
        }else{
            res.status(400).json('Invalid credentials')
        }
        
    })
    .catch(e => console.log(e, '\nUnable to search'))
    

}

module.exports = {
    handleSignIn: handleSignIn
}