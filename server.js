import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'

import { notFound, errorHandler } from './middlewares/errorHandler.js'
import connectDB from './config/db.js'
import dishesRoutes from './routes/dishesRoutes.js'
import userRoutes from './routes/userRoutes.js'
import ordersRoutes from './routes/ordersRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/dishes', dishesRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', ordersRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `App is in ${process.env.NODE_ENV} mode and is listening on port ${PORT}!`
      .cyan.bold
  )
})
