import express from 'express'
import {
  deleteDish,
  getAllDishes,
  getOneDish,
  postNewDish,
  updateDish,
} from '../controllers/DishesControllers.js'

const router = express.Router()

router.route('/').get(getAllDishes).post(postNewDish)
router.route('/:id').get(getOneDish).put(updateDish).delete(deleteDish)

export default router
