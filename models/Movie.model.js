const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports=Cinema;
