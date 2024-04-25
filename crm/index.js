import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

require('dotenv').config()

const port = process.env.PORT;
const path = process.env.MONGO_URI;

// Create express app
const app = express();

// Mongoose connection
mongoose.connect(path, {}).then(result => {
    console.log("database connected");

    app.listen(port, () => {
        console.log('listening on port ' + port);
    });
}).catch(err => console.log(err));

// Body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
routes(app);

// Root route
app.get('/', (req, res) => {
    res.send(`Node and express server is running on port ${port}`);
});


// import express from 'express';
// import routes from './src/routes/crmRoutes';

// const app = express();
// const PORT = 3000;

// routes(app);

// app.get('/', (req, res) => 
//     res.send(`Node and express server is running on port ${PORT}`)
// );

// app.listen(PORT, () => 
//     console.log(`Your server is running on port ${PORT}`)
// );



// import express from 'express';
// import routes from './src/routes/crmRoutes';

// const app = express();
// const PORT = 3000;

// routes(app);

// app.get('/', (req, res) => 
//     res.send(`Node and express server is running on port ${PORT}`)
// );

// app.listen(PORT, () => 
//     console.log(`Your server is running on port ${PORT}`)
// );


// //database
// const {MongoClient} = require("mongodb");
// const uri = "mongodb://localhost:27017"
// const client = new MongoClient(uri);


// async function insertData1(){
//     try{
//         const database = client.db("mydatabase");
//         const collection =database.collection("products");

//         const doc ={
//             name:"abc",
//             price:"80",
//             brand: "a"
//         }

//         const result = await collection.Man(doc);
        
        

//         console.log(result);
//     } finally{
//         await client.close();
//     }
// }

// insertData1().catch(console.dir);

// // Import required modules
// import express from 'express';
// import routes from './src/routes/crmRoutes';
// import { MongoClient } from 'mongodb';

// // Create Express app
// const app = express();
// const PORT = 3000;

// // MongoDB connection URI
// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri);

// // Function to insert data into MongoDB
// async function insertData() {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");

//         const database = client.db("mydatabase");
//         const collection = database.collection("products");

//         const doc = [
//             {
//                 name: "abc",
//                 price: "80",
//                 brand: "a"
//             },
//             {
//                 name: "abcf",
//                 price: "80",
//                 brand: "a",
//             }
//         ];

//         const result = await collection.insertMany(doc);
// console.log(`Documents were inserted with the following IDs: ${result.insertedIds}`);

//     } catch (error) {
//         console.error("An error occurred while inserting data:", error);
//     } finally {
//         await client.close();
//     }
// }

// // Function to start the Express server
// async function startServer() {
//     try {
//         // Connect to MongoDB before starting the server
//         await client.connect();
//         console.log("Connected to MongoDB");

//         // Define routes
//         routes(app);

//         // Root endpoint
//         app.get('/', (req, res) => {
//             res.send(`Node and express server is running on port ${PORT}`);
//         });

//         // Start the server
//         app.listen(PORT, () => {
//             console.log(`Your server is running on port ${PORT}`);
//         });

//         // Insert data into MongoDB
//         await insertData();
//     } catch (error) {
//         console.error("Failed to connect to MongoDB:", error);
//     } finally {
//         await client.close();
//     }
// }

// // Start the server
// startServer().catch(console.error);


