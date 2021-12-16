

 const createMongoClient = require('../shared/mongo');

 module.exports = async function (context, req) {
   const emp= req.body || {}
 
   if (emp) {
     context.res = {
       status: 400,
       body: 'Dish data is required! '
     }
   }
 
   const { db, connection } = await createMongoClient()
 
   const Dishes = db.collection('Employee')
 
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
       body: 'Error creating a new Dish: '+ error
     }
   }
 }
 