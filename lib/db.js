'use strict'
const {MongoClient} = require('mongodb')
const {
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env

// const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
const mongoUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

let connection;
const connectDB = async () =>{
    if (connection) return connection;
    let client;
    try{
        client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        connection = client.db(DB_NAME)
    }catch(e){
        console.error(`No se pudo conectar a la bd`, mongoUrl, e);
        process.exit(1)
    }
    return connection;
}

module.exports = connectDB;