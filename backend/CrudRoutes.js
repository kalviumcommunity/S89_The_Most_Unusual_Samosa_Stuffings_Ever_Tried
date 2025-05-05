const express = require('express');
const router = express.Router();
const Item = require("./schema");

// POST /items
router.post(
  '/items',
  async (req, res) => {
    const { name, price, description } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ errors: [{ msg: 'Name is required and must be a non-empty string' }] });
    }
    if (price === undefined || typeof price !== 'number') {
      return res.status(400).json({ errors: [{ msg: 'Price must be a number' }] });
    }
    if (description !== undefined && typeof description !== 'string') {
      return res.status(400).json({ errors: [{ msg: 'Description must be a string' }] });
    }

    try {
      const item = new Item(req.body);
      const savedItem = await item.save();
      res.status(201).json(savedItem);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
);

// PUT /items/:id
router.put(
  '/items/:id',
  async (req, res) => {
    const { name, price, description } = req.body;

    if (name !== undefined && (typeof name !== 'string' || name.trim() === '')) {
      return res.status(400).json({ errors: [{ msg: 'Name cannot be empty and must be a string' }] });
    }
    if (price !== undefined && typeof price !== 'number') {
      return res.status(400).json({ errors: [{ msg: 'Price must be a number' }] });
    }
    if (description !== undefined && typeof description !== 'string') {
      return res.status(400).json({ errors: [{ msg: 'Description must be a string' }] });
    }

    try {
      const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: "Item not found" });
      res.json(updatedItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// GET /items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /items/:id
router.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE /items/:id
router.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
