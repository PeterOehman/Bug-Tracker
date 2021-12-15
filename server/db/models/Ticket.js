const Sequelize = require('sequelize')
const db = require('../db')

const Ticket = db.define('ticket', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  priority: {
    type: Sequelize.ENUM(['low', 'medium', 'high']),
    defaultValue: 'low'
  },
  asignee: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Ticket
