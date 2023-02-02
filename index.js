const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion } = require("mongodb");
const { query } = require("express");

//middleware
app.use(express.json());
require("dotenv").config();
// const jwt = require('jsonwebtoken');

app.get("/", async (req, res) => {
  res.send("react state redux server is running");
});


// DB setup
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tr6mdf5.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

/* 
client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();

    if(err){
        console.log(err);
    }
    else{
        // DB COLLECTIONS

        // ROUTES
        app.get('/', async (req, res) => {
            res.send(' test server is running')
        })
    }
});

 */

const run = async () => {
  try {
    // db collections->
    const db = client.db("react-state-redux-2");
    const productCollection = db.collection("products");

    // ROUTES-->
    app.get("/products", async (req, res) => {
      const query = {};
      const products = await productCollection.find(query).toArray();
      res.send({ status: true, data: products });
    });

  } finally {
  }
};
run().catch((err) => console.log(err));

app.listen(port, () => {
  console.log("react state redux server running on port", port);
});

/* 
app.listen(process.env.PORT || 5000, () => {
    client.connect(err => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Connected to Mongodb')
        }
        // perform actions on the collection object
        // client.close();
    });

    console.log('Server is running')
})

 */
