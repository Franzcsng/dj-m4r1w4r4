module.exports = (sequelize, DataTypes) => {

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
            playedAt: {
                type: DataTypes.STRING,
                allowNull: true
            },
            featuredMix: {
                type: DataTypes.BOOLEAN,
                defautlValue: false,
                allowNull: false
            }
        }   

    )
    return Mixes
}