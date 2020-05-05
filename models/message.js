module.exports = (sequelize, DataTypes) => {

    let Message = sequelize.define('Message', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, email: {
            type: DataTypes.STRING,
            allowNull: false
        }, message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Message.syng({force: false}).then( () =>{
        console.log('synced message table')
    })

    return Message
}