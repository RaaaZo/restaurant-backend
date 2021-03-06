import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(
      `MongoDB connected: ${connection.connection.host}`.yellow.underline
    )
  } catch (err) {
    console.log(`Error: ${err.message}`.red)
    process.exit(1)
  }
}
export default connectDB
