import mongoose from "mongoose";
// import { env } from 'process';
const uri = "mongodb+srv://GreatEki:devpassword123@meshopcluster.dctqz.mongodb.net/api_refresh"
const connectDB =  () => {
  try {
    const conn =  mongoose.connect(uri, {
      retryWrites: true,
      w: "majority",
      
    });

    console.log("Database connected successfully");
  } catch (err) {
    // if (err instanceof Error)
    console.log(err.message);
    process.exit();
  }
};

export default connectDB;
