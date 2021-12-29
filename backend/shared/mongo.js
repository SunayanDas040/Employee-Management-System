const { MongoClient } = require("mongodb");

const config = {
    url: "mongodb://localhost:27071/emp-management-system",
    dbName: "emp-management-system"
};

async function createConnection() {
    const connection = await MongoClient.connect(config.url, {
        useNewUrlParser: true
    });

    const db = connection.db(config.dbName);

    return {
        db,
        connection
    };
};

module.exports = createConnection;