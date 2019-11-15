module.exports = (sequelize, DataTypes) => {
    var Exerciseset= sequelize.define('Exerciseset', {
       exercisename: { type: DataTypes.STRING, allowNull: false },
       weight: { type: DataTypes.INTEGER, allowNull: false },
       reps: { type: DataTypes.INTEGER, allowNull: false},
       date: { type: DataTypes.INTEGER, allowNull: false }
    });
    
    return Exerciseset;
};