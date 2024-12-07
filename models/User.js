import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
// This file defines a Mongoose model for the "User" collection in a MongoDB database.
// The User schema includes fields for name, email, img (image URL), password, and age.
// The name, email, and password fields are required, while the email field is also unique.
// The schema automatically includes timestamps for each document, recording creation and update times.
// This model is used in the User controller, in the server/controllers/User.js file, to interact with the User collection in the MongoDB database.
