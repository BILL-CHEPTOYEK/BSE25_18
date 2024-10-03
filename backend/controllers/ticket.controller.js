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
