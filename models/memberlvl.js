module.exports = (sequelize, DataTypes) => {
    var Memberlvl = sequelize.define('memberlvl', {
        tier: { type: DataTypes.INTEGER, allowNull: false },
        numclasses: { type: DataTypes.INTEGER, allowNull: false }
    });
        return Memberlvl;

};