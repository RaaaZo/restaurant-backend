import express from 'express'
import {
  deleteDish,
  getAllDishes,
  getDishesByType,
  getOneDish,
  postNewDish,
  updateDish,
} from '../controllers/dishesControllers.js'

const router = express.Router()

router.route('/').get(getAllDishes).post(postNewDish)
router.route('/byType').get(getDishesByType)
router.route('/:id').get(getOneDish).put(updateDish).delete(deleteDish)

export default router
