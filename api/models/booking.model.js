module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        scheduleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seatNumber: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Booking;
};
