module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define("member", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    birthday: { type: DataTypes.DATEONLY, allowNull: false },
    sex: { type: DataTypes.STRING(1), allowNull: false },
    state: { type: DataTypes.STRING(2), allowNull: false },
    zip: { type: DataTypes.STRING(5), allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    street: { type: DataTypes.STRING, allowNull: false },
    tier: { type: DataTypes.STRING, allowNull: false }
  });

  Member.associate = function(models) {
    Member.hasMany(models.payment, {
      foreignKey: "member_id"
    });

    Member.hasMany(models.giveaccess, {
      foreignKey: "member_id"
    });

    Member.hasMany(models.paydate, {
      foreignKey: "member_id"
    })
  };

  return Member;
};
