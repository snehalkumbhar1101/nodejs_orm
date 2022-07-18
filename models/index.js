const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(

    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,
    }
)


sequelize.authenticate()
.then(() => {
    console.log('Connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize,DataTypes)
db.reviews = require('./reviewModel.js')(sequelize,DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log("yes re-sync done!")
})

module.exports = db 