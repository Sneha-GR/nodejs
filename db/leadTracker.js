
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

// Step 1: Insert the leads
MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myobj = [
      { name: 'Arjun', place: 'Kannur' },
      { name: 'Meera', place: 'Kochi' },
      { name: 'Lakshmi', place: 'Calicut' },
    ];

    return db.collection("leads").insertMany(myobj)
      .then(res => {
        console.log("Number of documents inserted: " + res.insertedCount);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });

// Step 2: Find the first lead from Kochi (only name and place)
MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    return db.collection("leads").findOne(
      { place: "Kochi" },                  // Filter condition
      { projection: { _id: 0, name: 1, place: 1 } } // Show only name & place
    )
    .then(result => {
      console.log("First lead from Kochi:", result);
      client.close();
    });
  })
  .catch(err => {
    console.error(err);
  });