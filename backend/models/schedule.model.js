module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define('Schedule', {
        route: {
            type: DataTypes.STRING,
            allowNull: false
        },
        departureTime: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Schedule;
};
