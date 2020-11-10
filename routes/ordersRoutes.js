import express from 'express'
import { addOrderItems, getOrder } from '../controllers/orderControllers.js'

const router = express.Router()

router.route('/').post(addOrderItems)
router.route('/:id').get(getOrder)

export default router
