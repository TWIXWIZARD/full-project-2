import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";
import ContactRoutes from "./routes/contact.js"

// app.use(cors());//my added

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // for form data

app.use("/api/user/", UserRoutes);
app.use("/api/contact/", ContactRoutes)
// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello developers from GFG",
  });
});



app.post("/test", (req, res) => {
  res.send("POST request successful!");
});

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to Mongo DB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};






startServer();
// import express from "express";
// import mongoose from "mongoose";
// // import dotenv from "dotenv";
// import userRoutes from "./routes/User.js";
// import workoutRoutes from "./routes/Workout.js";
// // import express from "express";
// import * as dotenv from "dotenv";
// // import cors from "cors";
// // import mongoose from "mongoose";
// // import UserRoutes from "./routes/User.js";
// dotenv.config(); // Load environment variables

// const app = express();

// // Middleware
// app.use(express.json()); // Parse incoming JSON requests

// // Routes
// app.use("/api/users", userRoutes); // Routes for user-related operations
// app.use("/api/workouts", workoutRoutes); // Routes for workout-related operations

// // Connection to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

// // Default Route
// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
