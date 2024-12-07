import mongoose from "mongoose";

// const WorkoutSchema = new mongoose.Schema(
//   {
//     // user: {
//     //   type: mongoose.Schema.Types.ObjectId,
//     //   ref: "User",
//     //   required: true,
//     // },
//     category: {
//       type: String,
//       required: true,
//     },
//     workoutName: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     sets: {
//       type: Number,
//     },
//     reps: {
//       type: Number,
//     },
//     weight: {
//       type: Number,
//     },
//     duration: {
//       type: Number,
//     },
//     caloriesBurned: {
//       type: Number,
//     },
//     imageUrl: {
//       type: String
//     },
//     videoUrl: {
//       type: String
//     },
//     info: {
//       type: String
//     },
//     date: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   { timestamps: true }
// );

const WorkoutSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  workoutName: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    default: 0, // Optional, for bodyweight exercises
  },
  duration: {
    type: Number, // Duration in minutes
    required: true,
  },
  caloriesBurned: {
    type: Number,
    required: true,
  },
  workoutType: {
    type: String, // E.g., "Strength", "Cardio"
    required: true,
  },
  imageUrl: {
    type: String, // URL of an image related to the workout
    default: null,
  },
  videoUrl: {
    type: String, // URL of a video tutorial for the workout
    default: null,
  },
  info: {
    type: String, // Description or additional information
    default: "",
  },
});

export default mongoose.model("Workout", WorkoutSchema);
// This file defines a Mongoose model for the "Workout" collection in a MongoDB database.
// The Workout schema includes fields for category, workoutName, sets, reps, weight, duration, caloriesBurned, imageUrl, videoUrl, and info.
// The model is used in the Workout controller, in the server/controllers/Workout.js file, to interact with the Workout collection in the MongoDB database.
// The Workout model is also referenced in the User model, in the server/models/User.js file, as a subdocument.
// The error when trying to add the workout "Core Side Plank 3x45sec Bodyweight 5" using addWorkout could be due to several reasons:
// 1. Incorrect format: The workout string may not match the expected format used by the parseWorkoutLine function.
// 2. Missing fields: Ensure all required fields (category, workoutName, sets, reps, weight, duration) are present and correctly parsed.
// 3. Invalid parsing logic: The parseWorkoutLine function might not handle this specific input correctly, leading to null workoutDetails.
// 4. Backend validation errors: Check if any backend validation (e.g., unique workoutName) fails, causing the request to be rejected.
// 5. Server-side issue: The server might not be handling the request properly, leading to a "failed to load data" error.
// You can check console logs and network requests in the browser's developer tools to troubleshoot the issue further.



// Open the browser's developer tools (F12 or Ctrl+Shift+I), switch to the "Console" tab, and check for any error messages.
// Switch to the "Network" tab and inspect the request to the "/api/workout/add" endpoint.
// Check the request headers, request body, and the response body for any errors or issues.
// Example of workout string format:
// #Legs
// -Squats
// -3
// -12 1
// -80kg
// -10min
// The error "Preflight" and the 204 and 404 status codes in the network request log indicate a CORS issue.
// The browser is sending a preflight OPTIONS request to the server to check if the POST request is allowed. The server is not responding with the correct CORS headers.
// To resolve this, add the following line to the main server file (server/index.js):
// import cors from "cors";
// app.use(cors());
// This will enable CORS for all routes on the server.




// server/models/Workout.js
// const mongoose = require("mongoose");

// const workoutSchema = new mongoose.Schema({
//   category: {
//     type: String,
//     required: true,
//   },
//   workoutName: {
//     type: String,
//     required: true,
//   },
//   sets: {
//     type: Number,
//     required: true,
//   },
//   reps: {
//     type: Number,
//     required: true,
//   },
//   weight: {
//     type: Number,
//     default: 0, // Optional, for bodyweight exercises
//   },
//   duration: {
//     type: Number, // Duration in minutes
//     required: true,
//   },
//   caloriesBurned: {
//     type: Number,
//     required: true,
//   },
//   workoutType: {
//     type: String, // E.g., "Strength", "Cardio"
//     required: true,
//   },
//   imageUrl: {
//     type: String, // URL of an image related to the workout
//     default: null,
//   },
//   videoUrl: {
//     type: String, // URL of a video tutorial for the workout
//     default: null,
//   },
//   info: {
//     type: String, // Description or additional information
//     default: "",
//   },
// });







