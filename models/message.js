module.exports = (sequelize, DataTypes) => {

    let Message = sequelize.define('Message', {
        name: {
            type: DataTypes.STRING,
        }, email: {
            type: DataTypes.STRING,
        }, message: {
            type: DataTypes.STRING,
        }
    })

    Message.syng({force: true}).then( () =>{
        console.log('synced message table')
    })

    return Message
}