module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    passengerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    travelDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    seatNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
  return Ticket;
};
