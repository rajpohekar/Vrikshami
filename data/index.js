const mongoose = require('mongoose');
const Ngo = require("../models/ngoschema.js");
const ngoData = require("./ngo-data.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/vrikshami';

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB Connected");

        await initDB(); // Run after connection is established

        mongoose.connection.close(); // Close connection after operation
    } catch (error) {
        console.log("Connection Error:", error);
    }
}

async function initDB() {
    try {
        // Clear existing data
        await Ngo.deleteMany({});
        console.log("Existing data cleared");

        // Insert new data
        await Ngo.insertMany(ngoData);
        console.log("NGO data inserted successfully");
    } catch (error) {
        console.log("Error initializing database:", error);
    }
}

main();
