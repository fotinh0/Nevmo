const express = require('express');
const Account = require('../models/Account');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const accounts = await Account.findById(req.params.id);
  if (!accounts) return res.status(404).json({ msg: 'Accounts not found' });
  res.json(accounts);
});

router.post('/transfer', async (req, res) => {
  //TODO: handle transfer logic
});

module.exports = router;
