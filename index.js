const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const ProductRoute = require('./routes/product.route.js')

const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', ProductRoute);

app.get('/', (req, res) => {
    res.send('Hello from API Node Server!')
  })

mongoose
  .connect("mongodb+srv://rafidahmed4400:MzJVHcq6d8FXm1N5@backenddb.z1ew9nz.mongodb.net/?appName=BackEndDB")
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
    console.log("server is running on port 3000");
})
  })
  .catch((err) => {
    console.log("Connection failed");
  });

