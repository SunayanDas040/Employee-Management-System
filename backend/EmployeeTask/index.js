

 const createMongoClient = require('../shared/mongo');

 module.exports = async function (context, req) {
   const emp= req.body || {}
 
   if (emp) {
     context.res = {
       status: 400,
       body: 'Dish data is required! '
     }
   }
//    else{
//     const res = await Dishes.find({})
//     const body = await res.toArray()
  
//     connection.close()
  
//     context.res = {
//       status: 200,
//       body
//     }
//   }
 
 
 
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
 
 