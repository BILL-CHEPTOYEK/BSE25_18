exports.manageSchedules = (req, res) => {
    const { action, scheduleData } = req.body; // example of adding/editing schedules
    if (action === 'add') {
        // Add schedule logic
    } else if (action === 'edit') {
        // Edit schedule logic
    }
    res.status(200).send("Schedule managed successfully.");
};
