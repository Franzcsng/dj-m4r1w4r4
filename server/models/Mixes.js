module.exports = (sequelize, DataTypes) =>{

    const Mixes = sequelize.define("Mixes",
        {
            mixId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            mixTitle: {
                type: DataTypes.STRING,
                allowNull: false
            },
            mixSrc: {
                type: DataTypes.STRING,
                allowNull: false
            },
            mixEvent: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }   

    )


    return Mixes
}