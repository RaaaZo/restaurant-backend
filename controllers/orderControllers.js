import asyncHandler from 'express-async-handler'
import Order from '../models/Order.js'
import User from '../models/User.js'

//@desc    Create new order
//@route   POST /api/orders
//@access  Private
export const addOrderItems = asyncHandler(async (req, res, next) => {
  const { orderItems, shippingAddress, paymentMethod, userId } = req.body

  const userExists = await User.findById(userId)

  if (!userExists) {
    res.status(404)
    throw new Error('Nie znaleziono takiego użytkownika')
  }

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('Brak dań w zamówieniu')
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      user: userId,
    })

    const createdOrder = await order.save()

    res.status(201).json({ success: true, data: createdOrder })
  }
})

//@desc    Get order by Id
//@route   GET /api/orders/:id
//@access  Private
export const getOrder = asyncHandler(async (req, res, next) => {
  const { id } = req.params

  //   Nested populate
  const order = await Order.findById(id)
    .populate('user', 'username email')
    .populate({
      path: 'orderItems',
      populate: {
        path: 'dish',
        model: 'Dish',
      },
    })

  if (order) {
    res.status(200).json({ success: true, data: order })
  } else {
    res.status(404)
    throw new Error('Nie znaleziono takiego zamówienia')
  }
})
