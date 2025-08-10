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
        eventDetails: {
            type: DataTypes.STRING,
            allowNull: true
        },
        eventDetailsShort: {
            type: DataTypes.STRING,
            allowNull: true
        },  
        eventLink: {
            type: DataTypes.STRING,
            allowNull: true
        }


        }
    )

    return Events
}