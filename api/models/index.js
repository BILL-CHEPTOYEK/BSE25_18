const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('bus_ticketing_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, DataTypes);
db.Booking = require('./booking.model')(sequelize, DataTypes);
db.Ticket = require('./ticket.model')(sequelize, DataTypes);
db.Schedule = require('./schedule.model')(sequelize, DataTypes);

module.exports = db;