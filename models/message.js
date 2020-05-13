module.exports = (sequelize, DataTypes) => {

    let Message = sequelize.define('Message', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, email: {
            type: DataTypes.STRING,
            allowNull: false
        }, note: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Message.sync({force: false}).then( () =>{
        console.log('synced message table')
    })

    return Message
}