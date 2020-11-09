import asyncHandler from 'express-async-handler'
import User from '../models/User.js'

//@desc    Fetch user by id
//@route   GET /api/users
//@access  Public
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (user) {
    res.status(200).json({ success: true, data: user })
  } else {
    res.status(404)
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

  const userExists = await User.findOne({ username })

  if (userExists) {
    res.status(400)
    throw new Error(`Użytkownik o takiej nazwie istnieje`)
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
  const { username, email, password, confirmPassword } = req.body
  const user = await User.findById(req.params.id)

  if (password !== confirmPassword) {
    res.status(400)
    throw new Error(`Podane hasła są różne`)
  }

  if (!user) {
    res.status(404)
    throw new Error(`Użytkownik o takiej nazwie nie istnieje`)
  }

  if (user) {
    user.username = username || user.username
    user.email = email || user.email
    user.password = password || user.password

    const updatedUser = await user.save()

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error(`Podano błędne dane`)
  }
})
