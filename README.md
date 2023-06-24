
# URL Shortener Api

This serves as the backend server for the URL Shortener app. This server is setup with the help of Express JS. 


## Documentation

You can learn more about ExpressJS [here](https://expressjs.com/en/starter/installing.html)

Some of the libraries used in the project are :

Bcrypt : [here](https://www.npmjs.com/package/bcrypt)

Cookie-parser : [here](https://www.npmjs.com/package/cookie-parser) 

Cors : [here](https://www.npmjs.com/package/cors)

dotenv : [here](https://www.npmjs.com/package/dotenv)
 
jsonwebtoken : [here](https://www.npmjs.com/package/jsonwebtoken)

mongoose : [here](https://mongoosejs.com/docs/guide.html)


## Run Locally

Clone the project

```bash
  git clone https://github.com/amratansh12/URL-Shortener-Api.git
```

Go to the project directory

```bash
  cd URL-Shortener-Api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Make a dotenv file and enter your credentials below. ACCESS_TOKEN_SECRET will be used as a secret key for generating jsonwebtoken and API_KEY will be used for shortening url api (More about api [here](https://apilayer.com/marketplace/short_url-api))

```bash
    ACCESS_TOKEN_SECRET = <your secret token>
    API_KEY = <your api key>

    //for mongodb Atlas connection
    USERNAME = <your username>
    PASSWORD = <your password>
    CLUSTERNAME = <your cluster name>
```
Connect your mongodb database.

```bash
    require('dotenv').config()
    const mongoose = require('mongoose');

    const username = process.env.USERNAME
    const password = process.env.PASSWORD
    const clusterName = process.env.CLUSTERNAME
    const mongodb = `mongodb+srv://${username}:${password}@${clusterName}.64waou1.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(mongodb)
    .then(console.log('database connected'))
    .catch(error=> console.log(error))
```

## Appendix

This API has various api endpoints. Login and register authentication is done using Mongoose. We had built Schemas and then implemented these Schemas to build a model. Mongoose registers the users as document in these collection and login route checks for the user in this collection.

URL Shortening is done with the help of the rest api which returns short url of any url entered. This url is also stored inside the urls array property of the authenticated user.

Search filters the url array according to the input provided.


## Features

- URL Shortening api
- Login and registration
- JSON Web Token generation
- URL storage for each user


## Support

For support, email ashri1205@gmail.com

