require('dotenv').config()

const shortenUrl = (req, res, Registers) => {
    const {url, userId} = req.body;
    
    //API
    //d0jNOGqg825mVy5a12nCUzjfvcxUsbrY
    var myHeaders = new Headers();
    myHeaders.append("apikey", process.env.API_KEY);

    var raw = url;

    var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders,
    body: raw
    };

    fetch("https://api.apilayer.com/short_url/hash", requestOptions)
    .then(response => response.text())
    .then(result => {
        Registers.updateOne({_id: userId}, {$push:{urls: {url: url, shortUrl: JSON.parse(result).short_url}}}).exec()
        res.json(JSON.parse(result));
    })
    .catch(error => console.log('error', error));
}

module.exports = {
    shortenUrl: shortenUrl
}