module.exports = (sequelize, DataTypes) => {
    var Equipment = sequelize.define('equipment', {
        name: { type: DataTypes.STRING, allowNull: false },
        cost: { type: DataTypes.INTEGER, allowNull: false },
        datepurchased: { type: DataTypes.DATEONLY, allowNull: false },
        mancontact: { type: DataTypes.STRING, allowNull: false }
    });

    return Equipment;
};