const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;

    if (!dbURI) {
      throw new Error("MongoDB URI is not defined");
    }

    const conn = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("Failed to connect to MpngoDB", err);
  }
};

module.exports = connectDB;
