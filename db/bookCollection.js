const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017/";

//1. Data into the collection.

MongoClient.connect(url)
.then(client => {
    const db = client.db("librarydb");
    const data =  [
  { title: "Java Basics", author: "John", location: "Shelf A" },
  { title: "Node.js Guide", author: "Dean", location: "Shelf B" },
  { title: "Python 101", author: "Deepak", location: "Shelf D" },
  { title: "C++ Mastery", author: "Dean", location: "Shelf C" },
  { title: "Data Structures", author: "Ravi", location: "Shelf B" },
  { title: "React Handbook", author: "Derek", location: "Shelf D" }
];

    return db.collection("books").insertMany(data)
    .then(result => {
        console.log("Successfully inserted");
        client.close();
    })
})
.catch(error => {
    console.error(error);
})

//2.Update the location of the book titled "Java Basics" to "Shelf Z"

MongoClient.connect(url)
  .then(client => {
    const db = client.db("librarydb");
    const myquery = { title: "Java Basics" };
    const newvalues = { $set: { location: "Shelf Z" } };

    return db.collection("books").updateOne(myquery, newvalues)
      .then(res => {
        console.log("1 document updated");
        client.close();
    });
  })
  .catch(err => {
    console.error(err);
  });

  //3.Update the location of all books written by "Dean" to "Shelf E".

MongoClient.connect(url)
  .then(client => {
    const db = client.db("librarydb");
    const myquery = { author: "Dean" };
    const newvalues = { $set: { location: "Shelf E" } };

    return db.collection("books").updateMany(myquery, newvalues)
      .then(res => {
        console.log("Documents updated: " + res.modifiedCount);
        client.close();
    });
  })
  .catch(err => {
    console.error(err);
  });

//4.Delete the book titled "Python 101"

MongoClient.connect(url)
  .then(client => {
    const db = client.db("librarydb");

    return db.collection("books").deleteOne({ title: 'Python 101' })
      .then(res => {
        console.log("1 document deleted");
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });

//5.Delete all books whose titles start with the letter "D".

MongoClient.connect(url)
  .then((client) => {
    const db = client.db("librarydb");
    const myquery = { title: /^D/ };

    return db.collection('books').deleteMany(myquery)
      .then(result => {
        console.log("Number of documents deleted: " + result.deletedCount);
        client.close();
      }); 
  })
  .catch(err => {
    console.error(err);
  });