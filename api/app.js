const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const ticketRoutes = require('./routes/ticket.routes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tickets', ticketRoutes);

// Export the app for testing
module.exports = app;

// Sync the database and start the server
const startServer = async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Database synced!");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

if (require.main === module) {
  startServer();
}
