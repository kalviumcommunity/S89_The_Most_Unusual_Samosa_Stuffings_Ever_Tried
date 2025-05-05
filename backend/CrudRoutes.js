const express = require('express');
const router = express.Router();
const Item = require("./schema");

router.post(
  '/items',
  async (req, res) => {
    const { name, price, description } = req.body;

    // Manual validation
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

router.put(
  '/items/:id',
  async (req, res) => {
    const { name, price, description } = req.body;

    // Manual validation
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

module.exports = router;
