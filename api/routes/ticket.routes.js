const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const ticketController = require('../controllers/ticket.controller');
const bookingController = require('../controllers/booking.controller');

// User Routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Ticket Routes
router.post('/', ticketController.createTicket);

// Booking Routes
router.post('/book', bookingController.bookTicket);
router.post('/cancel', bookingController.cancelBooking);

module.exports = router;
