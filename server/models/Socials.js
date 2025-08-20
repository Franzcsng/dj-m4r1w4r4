module.exports = (sequelize, DataTypes) => {
    const Socials = sequelize.define("Socials", 
        {
            socialId:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            socialName:{
                type: DataTypes.STRING,
                allowNull: false
            },
            platorm:{
                type: DataTypes.STRING,
                allowNull: false
            },
            link:{
                type: DataTypes.STRING,
                allowNull: false
            }
        })
    return Socials
}