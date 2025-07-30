module.exports = (sequelize, DataTypes) => {"Profile", 
    {
        aboutDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        aboutName: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }

}