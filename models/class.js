module.exports = (sequelize, DataTypes) => {
    var Class = sequelize.define('class', {
        name: { type: DataTypes.STRING, allowNull: false },
        cost: { type: DataTypes.FLOAT(2), allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false }
    });

    Class.associate = function (models) {
        Class.hasMany(models.offering, {
          foreignKey: 'class_id'
        });

        Class.hasMany(models.giveaccess, {
            foreignKey: 'class_id'
        });
    }

    return Class;
};