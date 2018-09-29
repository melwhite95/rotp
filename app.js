const express = require('express')
const app = express()

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


// OUR MOCK ARRAY OF PROJECTS
//let reviews = [
//  { title: "Great Review" },
  //{ title: "Next Review" },
//  {title:  "Complete Trash"}
//]

//stuff for mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotp', { useMongoClient: true });

const Review = mongoose.model('Review', {
  title: String
});
// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');







app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
