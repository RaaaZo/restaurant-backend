import asyncHandler from 'express-async-handler'
import User from '../models/User.js'
import generateToken from '../utils/generateToken.js'

//@desc    Auth user & get token
//@route   GET /api/users/login
//@access  Public
export const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Błędne dane logowania')
  }
})

//@desc    Get user profile
//@route   GET /api/users
//@access  Private
export const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id).populate(
    'orders',
    'orderItems'
  )

  if (user) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      orders: user.orders,
    })
  } else {
    res.status(401)
    throw new Error('Nie znaleziono takiego użytkownika')
  }
})

//@desc    Register new user
//@route   POST /api/users
//@access  Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body

  if (password !== confirmPassword) {
    res.status(400)
    throw new Error(`Hasła nie pasują`)
  }

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error(`E-mail jest już zajęty`)
  }

  const user = await User.create({
    username,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error(`Podano błędne dane`)
  }
})

//@desc    Update user data
//@route   PUT /api/users/:id
//@access  Private
export const updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id)

  if (user && (await user.matchPassword(req.body.password))) {
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('Wprowadź poprawne dane aby zaktualizować profil')
  }
})
