const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO-URI, () => console.log
        ("Mongo connecté))
    }
    catch {

    }
}
