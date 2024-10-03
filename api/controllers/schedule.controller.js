const db = require('../models');
const Schedule = db.Schedule;

// Create Schedule
exports.createSchedule = async (req, res) => {
    try {
        const { route, departureTime } = req.body;
        const schedule = await Schedule.create({ route, departureTime });
        res.status(201).json(schedule);
    } catch (err) {
        res.status(500).json({ message: "Error creating schedule" });
    }
};
