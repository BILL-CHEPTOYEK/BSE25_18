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

// Sync the database and start the server
db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synced!");
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
