import express from 'express'
import {
  getUser,
  registerUser,
  updateUser,
} from '../controllers/userControllers.js'

const router = express.Router()

router.route('/').post(registerUser)
router.route('/:id').get(getUser).put(updateUser)

export default router
