// here we have to first import the express library and we will use the key word require
// instead of import

const express = require('express')
// next we need to import the path library and it helps us to figure out where the pieces are in our pc
const path = require('path')

const bodyParser = require('body-parser')
// we also need to import the index.js
const indexRouter = require('./routes/index')

// now create the web application server
const app = express() // this will create the web application server

// enable parsing of post request body
app.use(bodyParser.urlencoded({ extended: false }))

const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))


// now we need to configure our web app and start running
app.set('views', path.join(__dirname, 'views')) // this will tell the app where the HTML file or templates are
app.set('view engine', 'hbs') // use handle bars to generate views

app.use('/', indexRouter) // this means that all the requests to the app will pass through indexRouter

// now we need to start the server

const server = app.listen(process.env.PORT || 3000, function(){
    console.log('Server is running on port ', server.address().port) // this will tell where our server is running
})




