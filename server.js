import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middlewares/errorHandler.js'
import connectDB from './config/db.js'
import dishesRoutes from './routes/dishesRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/dishes', dishesRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `App is in ${process.env.NODE_ENV} mode and is listening on port ${PORT}!`
      .cyan.bold
  )
})
