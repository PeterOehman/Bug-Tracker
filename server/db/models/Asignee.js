const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios');

const Ticket = db.define('user', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  priority: {
    type: Sequelize.ENUM(['low', 'medium', 'high']),
    defaultValue: 'low'
  }
})

module.exports = Ticket
