module.exports = (sequelize, DataTypes) => {
    var Exerciseset= sequelize.define('exercisesets', {
       name: { type: DataTypes.STRING, allowNull: false },
       weight: { type: DataTypes.INTEGER, allowNull: false },
       reps: { type: DataTypes.INTEGER, allowNull: false},
       date: { type: DataTypes.DATEONLY, allowNull: false }
    });
    
    return Exerciseset;
};