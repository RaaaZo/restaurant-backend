import express from 'express'
import {
  getUserProfile,
  registerUser,
  updateUser,
  authUser,
} from '../controllers/userControllers.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, getUserProfile)
router.route('/login').post(authUser)
router.route('/:id').put(updateUser)

export default router
