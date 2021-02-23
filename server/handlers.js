"use strict";
require("dotenv").config();
const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const callDB = async () => {
    try {
      const client = new MongoClient(MONGO_URI, options);
      await client.connect();
      const db = client.db("haznavDB");
      console.log("connected to haznavDB");
      //const collecxion = db.collection('accidents_velos_montreal');
  
      const accidents = await db.collection('accidents_velos_montreal').find().toArray();
      
      client.close();
      console.log("disconnected!");
    } catch (e) {
      client.close();
      console.error(e.message);
    }
  };






const getAccidents = (req, res) => {
    // return relevant subset of accidents 
    //make call to db
    //send results if good 
    //else send error 

    const found = true //remove
    if (found){

    res.status(200).json({
      status: 200,
      message: "OK"
    })
  } else {
    res.status(404).json({
      status: 404,
      message: "db error, nothing found"

    })
  }
}  


module.exports = {getAccidents};