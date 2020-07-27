const express = require('express');
const router = express.Router();
const Cinema = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movie/:id', async (req, res, next) => {
  
  try {
    let movie = await Cinema.findById({'_id': req.params.id})
    res.render('movie', {movie});
  } catch (error) {
    console.log(error)
  }
})


router.get('/movies',async (req, res, next) => {
  try {
    let movies = Cinema.find();
    await movies.map(movie => {
      console.log(movie)
      res.render('movies', {movie});
    });
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
