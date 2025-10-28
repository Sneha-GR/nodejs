
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

// Step 1: Insert the leads
MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myobj = [
      { name: 'John', place: 'Trivandrum' },
      { name: 'Rahul', place: 'Calicut' },
      { name: 'Dean', place: 'Trivandrum' },
      { name: 'Deepak', place: 'Kollam' },
      { name: 'Ashwin', place: 'Calicut' },
      { name: 'Rolly', place: 'Alleppey' },
      { name: 'Nikhil', place: 'Kottayam' },
      { name: 'Raymond', place: 'Trivandrum' },
    
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
      { place: "Calicut" },                  // Filter condition
      { projection: { _id: 0, name: 1 } } // Show only name
    )
    .then(result => {
      console.log("Leads from Calicut:", result);
      client.close();
    });
  })
  .catch(err => {
    console.error(err);
  });