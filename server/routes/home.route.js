const express = require('express')
const Homeroute = express.Router()

Homeroute.get('/', (req, res) => res.status(200).json({
  message: 'Welcome to Tourism!!',
}));

module.exports = Homeroute;