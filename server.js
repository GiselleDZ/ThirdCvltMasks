const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
const helmet = require('helmet')
const session = require('express-session')


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname))

// send the user to index html page inspite of the url
app.use(express.static(__dirname + 'index.html'))

app.use(helmet())

app.set('trust proxy', 1)

app.use(session({
    secret: process.env.COOKIE,
    cookie: { 
        SameSite: "none",
        secure: true,
        httpOnly: true,
     }
}))

    
app.listen(port)