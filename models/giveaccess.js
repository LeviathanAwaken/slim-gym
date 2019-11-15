module.exports = (sequelize, DataTypes) => {
    var Giveaccess = sequelize.define('giveaccess', {
        class_id: { type: DataTypes.INTEGER, allowNull: false },
        member_id: { type: DataTypes.INTEGER, allowNull: false },
        limit: { type: DataTypes.INTEGER, allowNull: false }
    });
        return Giveaccess;
};