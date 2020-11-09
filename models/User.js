import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
})

const User = mongoose.model('User', userSchema)

export default User
