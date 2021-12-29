

 const createMongoClient = require('../shared/mongo');

 module.exports = async function (context, req) {
   const emp= req.body || {}
 
   if (emp) {
     context.res = {
       status: 400,
       body: 'task data is required! '
     }
   }
 
   const { db, connection } = await createMongoClient()
 
   const Dishes = db.collection('EmployeeTask')
 
   try {
     const dishes = await Dishes.insertOne(emp)
     connection.close()
     console.log(1);
 
     context.res = {
       status: 201,
       body: dishes.insertedId
     }
   } catch (error) {
     context.res = {
       status: 500,
       body: 'Error creating a new Task: '+ error
     }
   }
 }
 
 