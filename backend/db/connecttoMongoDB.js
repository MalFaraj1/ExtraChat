import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error connecting to mongoDB", error.message);
    }
};

export default connectToMongoDB;