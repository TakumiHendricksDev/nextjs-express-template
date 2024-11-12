import express, { response } from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, MongoDatabase } from "mongodb";
import 'dotenv/config';

const uri = `mongodb+srv://takumihendricksdev:${process.env.DB_PASSWORD}@testcluster.nqhyz.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}
});

async function run() {
try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}
}
run().catch(console.dir);

const app = express();

app.use(cors());

app.get("/api/v1/users", (req, res) => {
    const database = mongoClient.getDatabase("sample_mflix");
    const coll = database.getCollection("users");
    const users = [
        {id: 1, name: "John Doe"},
        {id: 2, name: "Jane Doe"},
    ]

    return res.status(200).json({users})
})

app.listen(8000, () => {
    console.log("App listening on port 8000!");
})