module.exports = (sequelize, DataTypes) => {

    const Events = sequelize.define("Events", 
        {
        eventId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        eventName: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        eventAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        eventTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventDescription: {
            type: DataTypes.STRING,
            allowNull: true
        },
        featuredEvent: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
        }
    )

    return Events
}