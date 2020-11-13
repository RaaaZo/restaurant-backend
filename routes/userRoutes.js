import express from 'express'
import {
  getUserProfile,
  registerUser,
  updateUser,
  authUser,
} from '../controllers/userControllers.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .post(registerUser)
  .get(protect, getUserProfile)
  .put(protect, updateUser)
router.route('/login').post(authUser)

export default router
