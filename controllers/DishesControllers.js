import asyncHandler from 'express-async-handler'
import Dish from '../models/Dish.js'

//@desc    Fetch all dishes
//@route   GET /api/dishes
//@access  Public
export const getAllDishes = asyncHandler(async (req, res, next) => {
  const dishes = await Dish.find()

  res.json({ success: true, data: dishes })
})

//@desc    Fetch dishes by type
//@route   GET /api/dishes
//@access  Public
export const getDishesByType = asyncHandler(async (req, res, next) => {
  const dishes = await Dish.find(req.query)

  res.json({ success: true, data: dishes })
})

//@desc    Fetch one dish
//@route   GET /api/dishes/:id
//@access  Public
export const getOneDish = asyncHandler(async (req, res, next) => {
  const dish = await Dish.findById(req.params.id)

  if (dish) {
    res.json({ success: true, data: dish })
  } else {
    res.status(404)
    throw new Error('Nie znaleziono takiego dania')
  }
})

//@desc    Add new dish
//@route   POST /api/dishes
//@access  Private
export const postNewDish = asyncHandler(async (req, res, next) => {
  const { name, description, ingredients, price, type, image } = req.body

  const dishExists = await Dish.findOne({ name })

  if (dishExists) {
    res.status(400)
    throw new Error('Takie danie już istnieje')
  }

  const newDish = await Dish.create({
    name,
    description,
    ingredients,
    price,
    type,
    image,
  })

  if (newDish) {
    res.status(201).json({
      success: true,
      data: newDish,
    })
  } else {
    res.status(400)
    throw new Error('Nieprawidłowe dane dania')
  }
})

//@desc    Update dish
//@route   PUT /api/dishes/:id
//@access  Private
export const updateDish = asyncHandler(async (req, res, next) => {
  const dish = await Dish.findById(req.params.id)

  if (dish) {
    dish.name = req.body.name || dish.name
    dish.description = req.body.description || dish.description
    dish.ingredients = req.body.ingredients || dish.ingredients
    dish.price = req.body.price || dish.price

    const updateDish = await dish.save()

    res.json({
      success: true,
      _id: updateDish._id,
      name: updateDish.name,
      description: updateDish.description,
      ingredients: updateDish.ingredients,
      price: updateDish.price,
    })
  } else {
    res.status(404)
    throw new Error(`Nie znaleziono takiego dania`)
  }
})

//@desc    Delete dish
//@route   DELETE /api/dishes/:id
//@access  Private
export const deleteDish = asyncHandler(async (req, res, next) => {
  const dish = await Dish.findById(req.params.id)

  if (!dish) {
    res.status(404)
    throw new Error(`Nie znaleziono takiego dania`)
  }

  await dish.remove()

  res.status(200).json({ success: true, data: {} })
})
