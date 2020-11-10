import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import User from './models/User.js'
import Dish from './models/Dish.js'
import Order from './models/Order.js'
import connectDB from './config/db.js'
import users from './data/users.js'
import dishes from './data/dishes.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Dish.deleteMany()
    await Order.deleteMany()

    const createdUsers = await User.insertMany(users)

    const sampleDishes = dishes.map((dish) => {
      return { ...dish, user: createdUsers }
    })

    await Dish.insertMany(sampleDishes)

    console.log(`Data imported!`.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Dish.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
