module.exports = (sequelize, DataTypes) => {
    var Classes = sequelize.define('classes', {
        name: { type: DataTypes.STRING, allowNull: false },
        cost: { type: DataTypes.FLOAT(2), allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false }
    });

    Classes.associate = function (models) {
        Classes.hasMany(models.offering, {
          foreignKey: 'class_id'
        });

        Classes.hasMany(models.giveaccess, {
            foreignKey: 'class_id'
        });
    }

    return Classes;
};