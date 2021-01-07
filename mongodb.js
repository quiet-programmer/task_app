// CRUD operations

const { MongoClient, ObjectID } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

var log = console.log;

const userCollection = "users";
const taskCollection = "tasks";

MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {

    if (error) {
      return log("Unable to connect to the database!");
    }

    const db = client.db(databaseName);

    // deleting many values from the database
    // db.collection(taskCollection).deleteMany({
    //     completed: true,
    // }).then((result) => {
    //     log(result)
    // }).catch((error) => {
    //     console.error(error)
    // })

    // deleting a single data from database
    // db.collection(userCollection).deleteOne({
    //     name: "Goodness",
    // }).then((result) => {
    //     log(result)
    // }).catch((error) => {
    //     console.error(error)
    // })

    // updating many values in the database
    // db.collection(taskCollection).updateMany(
    //   {
    //     completed: false,
    //   },
    //   {
    //       $set: {
    //           completed: true,
    //       }
    //   }
    // ).then((result) => {
    //     log(result)
    // }).catch((error) => {
    //     console.error(error)
    // })

    // updating only one value in the database
    // db.collection(userCollection).updateOne({
    //     _id: new ObjectID("5ff5eadc49b6301617c234e3")
    // }, {
    //     $set: {
    //         name: "Goodness",
    //     },
    // }).then((val) => {
    //     log(val)
    // }).catch((error) => {
    //     console.error(error)
    // })

    // example to find one doc
    // db.collection(userCollection).findOne({name: "Great"}, (error, user) => {
    //     if(error) {
    //         return log("Error could't find user")
    //     }
    //     log(user)
    // })

    // example to find docs
    // db.collection(userCollection).find({age: 21}).toArray((error, results) => {
    //     if(error) {
    //         return log("Error could't find user")
    //     }
    //     results.forEach((val) => {
    //         log(val['name'])
    //     })
    // })

    /// example for inserting data to database
    // db.collection('tasks').insertMany([
    //     {
    //         description: "learn Flutter",
    //         completed: true,
    //     },
    //     {
    //         description: "learn Firebase",
    //         completed: true,
    //     },
    //     {
    //         description: "learn Node",
    //         completed: false,
    //     },

    // ], (error, result) => {
    //     if(error) {
    //         log('couldn\'t add values to database')
    //     }
    //     log(result.ops)
    // })
  }
);
