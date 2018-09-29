const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



// INDEX
app.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(err => {
      console.log(err);
    })
})

// NEW
app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
})


// CREATE
app.post('/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    console.log(review)
    res.redirect(`/reviews/${review._id}`) // Redirect to reviews/:id
  }).catch((err) => {
    console.log(err.message)
  })
})
// SHOW
app.get('/reviews/:id', (req, res) => {
  Review.findById(req.params.id).then((review) => {
    res.render('reviews-show', { review: review })
  }).catch((err) => {
    console.log(err.message);
  })
})
// OUR MOCK ARRAY OF PROJECTS
//let reviews = [
//  { title: "Great Review" },
  //{ title: "Next Review" },
//  {title:  "Complete Trash"}
//]

//stuff for mongoose
const mongoose = require('mongoose');

const Review = mongoose.model('Review', {
  title: String,
  description: String,
  movieTitle: String
});
// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');







app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
