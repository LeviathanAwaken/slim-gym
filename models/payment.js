module.exports = (sequelize, DataTypes) => {
    var Payment = sequelize.define('payment', {
      member_id: {
        type: DataTypes.INTEGER,
        allowNull: false

      },
      payoccur: {
        type: DataTypes.STRING,
        allowNull: false
      },
      datepaid: {
        type: DataTypes.DATEONLY,
        allowNull:false
      },      
    });
  
    return Payment;
  };