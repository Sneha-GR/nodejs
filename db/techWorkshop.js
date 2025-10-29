const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017/";

//1. Data into the collection.

MongoClient.connect(url)
.then(client => {
    const db = client.db("workshopdb");
    const data =  [
        { name: 'John', city: 'Trivandrum' },
        { name: 'Deepak', city: 'Kollam' },
        { name: 'Dean', city: 'Trivandrum' },
        { name: 'Rahul', city: 'Calicut' },
        { name: 'Ashwin', city: 'Calicut' },
        { name: 'Rolly', city: 'Alleppy' },
        { name: 'Nikhil', city: 'Kottayam' },
        { name: 'Raymond', city: 'Trivandrum' },
        { name: 'Dean', city: 'Calicut' },
    ];

    return db.collection("tech").insertMany(data)
    .then(result => {
        console.log("Successfully inserted");
        client.close();
    })
})
.catch(error => {
    console.error(error);
})

//2.Update the participant named "John" by Change the name to "Johnny" and Change the city to "Chennai"

MongoClient.connect(url)
  .then(client => {
    const db = client.db("workshopdb");
    const myquery = { name: "John" };
    const newvalues = { $set: { name: "Johnny", city: "Chennai" } };
    
    return db.collection("tech").updateOne(myquery, newvalues)
      .then(res => {
        console.log("1 document updated");
        client.close();
    });
  })
  .catch(err => {
    console.error(err);
  });

//3.A participant named "Deepak" has cancelled their registration — delete that record.

MongoClient.connect(url)
  .then(client => {
    const db = client.db("workshopdb");

    return db.collection("tech").deleteOne({ name: 'Deepak' })
      .then(res => {
        console.log("1 document deleted");
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });

//4. Remove all participants whose names start with the letter "D"

MongoClient.connect(url)
  .then((client) => {
    const db = client.db("workshopdb");
    const myquery = { name: /^D/ };

    return db.collection('tech').deleteMany(myquery)
      .then(result => {
        console.log("Number of documents deleted: " + result.deletedCount);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });