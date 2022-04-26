import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const connection = {};
async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
  console.log("mongoDB connection successful !!!");
}
export default dbConnect;
