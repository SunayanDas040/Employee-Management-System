const MongoClient = require("../shared/mongo");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = async function (context, req) {
  const { db, connection } = await MongoClient();
  const users = db.collection("Employee");
  let email = req.body.email;
  let password = req.body.password;
  let hashpassword;
  let emp = {
    email: email,
    password: hashpassword,
  };
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) {
      return err;
    }
    hashpassword = hash;
    console.log(hashpassword);

    emp.password = hashpassword;
    try {
      const Emp = await users.insertOne(emp);

      context.res = {
        status: 201,
        body: Emp,
      };
    } catch (error) {
      context.res = {
        status: 500,
        body: "Error creating a new Dish: " + error,
      };
    }
  });
};
