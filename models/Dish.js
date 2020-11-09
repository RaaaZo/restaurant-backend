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
  ingredients: {
    type: String,
    required: true,
    maxlength: 150,
  },
  price: {
    type: Number,
    required: true,
  },
})

const Dish = mongoose.model('Dish', dishSchema)

export default Dish
