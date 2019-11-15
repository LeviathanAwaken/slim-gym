module.exports = (sequelize, DataTypes) => {
    var Employee = sequelize.define('employee', {
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: false },
        ssn: { type: DataTypes.STRING, allowNull: false },
        city: {type: DataTypes.STRING, allowNull: false },
        state: { type: DataTypes.STRING(2), allowNull: false },
        zip: { type: DataTypes.STRING(5), allowNull: false },
        street: { type: DataTypes.STRING, allowNull: false },
        phone_number: { type: DataTypes.STRING, allowNull: false },
        sex: { type: DataTypes.STRING(1), allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.STRING}
    });
    Employee.associate = function (models) {
        Employee.hasMany(models.offering, {
          foreignKey: 'employee_id'
        });

        Employee.hasMany(models.payroll, {
            foreignKey: 'employee_id'
        });
        }
    return Employee;
}

