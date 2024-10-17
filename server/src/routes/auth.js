const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '2h' });
    res.json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    // Note: password would be encrypted
    const isMatch = password === user.password;
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '2h' });
    res.json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
