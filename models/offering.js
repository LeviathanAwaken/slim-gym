module.exports = (sequelize, DataTypes) => {
    var Offering = sequelize.define('offering', {
       class_id: { type: DataTypes.INTEGER, allowNull: false },
       capacity: { type: DataTypes.INTEGER, allowNull: false },
       employee_id: { type: DataTypes.INTEGER, allowNull: false },
       roomname: { type: DataTypes.STRING, allowNull: false },
       date: { type: DataTypes.DATEONLY, allowNull: false},
       time: { type: DataTypes.STRING, allowNull: false } 
    });

        return Offering;
};