// import express from "express";
// import {
//   UserLogin,
//   UserRegister,
//   addWorkout,
//   getAllWorkouts,
//   getUserDashboard,
//   getWorkoutsByDate,
//   getWorkoutById,
// } from "../controllers/User.js";
// import { verifyToken } from "../middleware/verifyToken.js";

// const router = express.Router();

// router.post("/signup", UserRegister);
// router.post("/signin", UserLogin);

// router.get("/dashboard", verifyToken, getUserDashboard);
// router.get("/get-all-workouts", verifyToken, getAllWorkouts)
// router.get("/workout", verifyToken, getWorkoutsByDate);
// router.post("/workout", verifyToken, addWorkout);
// router.get("/workout/:id", verifyToken, getWorkoutById);

// export default router;



// The node_modules folder is where all the dependencies required by the project are stored.
// These dependencies are downloaded from npm registry when you run npm install or yarn install.
// The dependencies are stored in a tree-like structure, with the dependency name as the folder name,
// and the version of the dependency as a subfolder.
// Each dependency has its own package.json file which contains the metadata about the package.
// The dependencies are linked to the project by the package.json file in the root of the project.
// This file contains the list of dependencies required by the project, and the version of each dependency.
// When you run npm install or yarn install, the dependencies are downloaded from the npm registry and stored in the node_modules folder.
// The dependencies are then linked to the project, and can be imported in the project files.
// The node_modules folder is not committed to the version control system, as it is not necessary to store the dependencies in the version control system.
// The dependencies can be downloaded from the npm registry whenever they are needed.



// This file is a route for user and workout related operations.
// the user can register, login, add workout, get all workouts, get workouts by date, and get dashboard data.
// The user must be logged in to access this routes.
// The verifyToken middleware is used to verify the token sent in the Authorization header.
// The token is verified by checking it against the secret key, and if it is valid, the user is logged in.
// The user can then access the routes that require authentication.
import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getAllWorkouts,
  getUserDashboard,
  getWorkoutsByDate,
  getWorkoutById, // Ensure this is imported
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);
router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/get-all-workouts", verifyToken, getAllWorkouts);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);
router.get("/workout/:id", verifyToken, getWorkoutById); // Reference to function

export default router;
