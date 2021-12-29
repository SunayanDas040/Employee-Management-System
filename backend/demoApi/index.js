const createMongoClient = require('../shared/mongo');

 module.exports = async function (context, req) {




    const { db, connection } = await createMongoClient()
 
    const EmpId = db.collection('Employee')
 }