// import some libraries
const express = require('express')
const router = express.Router() // this will figure out what code to run to response to the request
//  it is based on the type of URL, or method
router.get('/', function(req, res, next){// req is request, res is response
    res.render('index', {title: 'Feedback application',
        author:'Ephrem',
        timePageLoadedAt: new Date()}) // this line of code will organize the
    // response html and render
}) // it is a get request to the home page

// here we are getting the new page
router.get('/feedback-form', function(req, res, next){
    res.render('student_feedback_form')
})

// this one will handle the new submission form
router.post('/submit-feedback', function(req, res, next){
    // access the form data here
    //const formData = req.query // for a get request we get a data by reading the url but in the post request, we get from the body
    const formData = req.body;
    console.log(formData)
    // todo save to database
    // automatically send an email to somebody
    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student'],
    })
})

module.exports = router // this will response to the part that need this response