const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { query } = require("express");

//middleware
app.use(express.json());
require("dotenv").config();
// const jwt = require('jsonwebtoken');

app.get("/", async (req, res) => {
  res.send("react state redux server is running");
});

// DB setup
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster3.s7xdhh0.mongodb.net/test`;
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
    const db = client.db("learn-redux"); // learn-redux .products
    const productCollection = db.collection("products");

    // ROUTES-->
    app.get("/products", async (req, res) => {
      const query = {};
      const products = await productCollection.find(query).toArray();
      res.send({ status: true, data: products });
    });

    app.post("/product", async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;
      const result = await productCollection.deleteOne({ _id: ObjectId(id) });
      res.send(result);
    });

    // app.get("/product", async(req, res)=>{
    //   const query = req.query.search;
    //   console.log(query);
    // })

    // get single product 
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const product = await productCollection.findOne({ _id: ObjectId(id) });
      res.send({ status: true, data: product });
    });

    // update a product
    app.put("/updated-product/:id", async (req, res) => {
      const product = req.body;
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          model: product.model,
          brand: product.brand,
          image: product.image,
          keyFeature: product.keyFeature,
          price: product.price,
          rating: product.rating,
          spec: product.spec,
          status: product.status,
        },
      };
      const result = await productCollection.updateOne(filter, updateDoc, options);
      res.send(result);
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
