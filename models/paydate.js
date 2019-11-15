module.exports = (sequelize, DataTypes) => {
    var Paydate = sequelize.define('paydate', {
        datepaid: { type: DataTypes.DATEONLY, allowNull: false },
        member_id: { type: DataTypes.INTEGER, allowNull: false },
        datedue: { type: DataTypes.DATEONLY, allowNull: false }
    });
        return Paydate;
};