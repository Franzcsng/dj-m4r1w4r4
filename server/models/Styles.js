module.exports = (sequelize, DataTypes) => {

    const Styles = sequelize.define("Styles", 

        {
            styleId:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            style:{
                type: DataTypes.STRING,
                allowNull: false
            }
        
        }

    )

    return Styles;
}