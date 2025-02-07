const  mongoose = require("mongoose")

const mongoDbConnection = async () => {
  try {
    const databaseUrl = "mongodb://localhost:27017/query";
    await mongoose.connect(databaseUrl);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

mongoDbConnection()