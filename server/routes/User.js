import express from "express";
import {
  UserRegister,
  UserLogin,
  getUserDashboard,
  addWorkout,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";
import Workout from "../models/Workout.js"; // ⬅️ You forgot to import this

const router = express.Router();

// Auth Routes
router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

// Dashboard Route
router.get("/dashboard", verifyToken, getUserDashboard);

// ✅ GET workouts for a specific date
router.get("/workouts", verifyToken, async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const workouts = await Workout.find({
      user: req.user.id,
      date: date, // exact match
    });

    res.status(200).json({ todaysWorkouts: workouts });
  } catch (err) {
    console.error("Error fetching workouts:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ POST to add a workout
router.post("/workout", verifyToken, addWorkout);

export default router;
