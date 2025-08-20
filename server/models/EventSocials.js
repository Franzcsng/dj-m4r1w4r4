module.exports = (sequelize, DataTypes) => {
    const EventSocials = sequelize.define("EventSocials",
        {
            socialId:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            eventId:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            socialName:{
                type: DataTypes.STRING,
                allowNull: false
            },
            platform:{
                type: DataTypes.STRING,
                allowNull: false
            },
            link:{
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    )
    return EventSocials
}