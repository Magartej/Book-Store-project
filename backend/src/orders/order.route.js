const express = require('express');
const { createAOrder, getOrderByEmail, getAllOrders, updateOrderStatus } = require('./order.controller');
const { verifyToken, verifyAdmin } = require('../middleware/auth');

const router =  express.Router();

// Public endpoints
// create order endpoint
router.post("/", createAOrder);

// get orders by user email 
router.get("/email/:email", getOrderByEmail);

// Admin endpoints - protected with authentication middleware
router.get("/admin/all", verifyToken, verifyAdmin, getAllOrders);
router.patch("/admin/:id/status", verifyToken, verifyAdmin, updateOrderStatus);

module.exports = router;