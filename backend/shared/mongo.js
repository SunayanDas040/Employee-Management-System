/**
 * Arquivo: mongo.js
 * Data: 01/25/2021
 * Descrição: file responsible for handling the database connection locally
 * Author: Glaucia Lemos – (Twitter: @glaucia_lemos86)
 */

 const { MongoClient } = require("mongodb");
 const config = {
    url: "mongodb://localhost:27017/emp-management-system",
    dbName: "emp-management-system"
  };

  async function createConnection() {
    const connection = await MongoClient.connect(config.url, {
      useNewUrlParser: true
    });
    const db = connection.db(config.dbName);
    return {
      connection,
      db
    };
  }
  
  module.exports = createConnection;