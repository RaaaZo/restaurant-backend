import mongoose from 'mongoose'

const dishSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 30,
    maxlength: 200,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
    maxlength: 150,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['appetizer', 'dessert', 'mainCourse', 'salad', 'soup'],
    required: true,
  },
})

const Dish = mongoose.model('Dish', dishSchema)

export default Dish
