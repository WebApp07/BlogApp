import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo Db is connected ALLEZ");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
