const db = require('../models');
const Ticket = db.Ticket;

// Create Ticket
exports.createTicket = async (req, res) => {
    try {
        const { passengerName, travelDate, seatNumber, price } = req.body;
        const ticket = await Ticket.create({ passengerName, travelDate, seatNumber, price });
        res.status(201).json(ticket);
    } catch (err) {
        res.status(500).json({ message: "Error creating ticket" });
    }
};

// ticket.controller.js
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll(); // Fetch all tickets
        res.status(200).json(tickets);
    } catch (err) {
        console.error('Error fetching tickets:', err); // Log the error
        res.status(500).json({ message: "Error fetching tickets" });
    }
};

