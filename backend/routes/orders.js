const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { items, total, delivery } = req.body;

    if (!items || !total || typeof delivery !== 'boolean') {
      return res.status(400).json({ error: 'Missing required fields: items, total, delivery' });
    }

    const order = await prisma.order.create({
      data: {
        items: JSON.stringify(items),
        total,
        delivery,
      },
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

module.exports = router;