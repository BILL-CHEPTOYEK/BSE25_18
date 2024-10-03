const db = require('../models');
const Booking = db.Booking;

// Book a Ticket
exports.bookTicket = async (req, res) => {
    try {
        const { userId, scheduleId, seatNumber } = req.body;
        const booking = await Booking.create({ userId, scheduleId, seatNumber });
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ message: "Error booking ticket" });
    }
};

// Cancel Booking
exports.cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.body;
        await Booking.destroy({ where: { id: bookingId } });
        res.status(200).json({ message: "Booking cancelled" });
    } catch (err) {
        res.status(500).json({ message: "Error cancelling booking" });
    }
};
