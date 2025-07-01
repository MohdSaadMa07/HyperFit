// models/Workout.js
import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  workoutName: {
    type: String,
    required: true,
  },
  sets: Number,
  reps: Number,
  weight: Number,
  duration: Number,
  date: {
    type: String, // 💥 very important: store date as "YYYY-MM-DD"
    required: true,
  },
});

export default mongoose.model("Workout", WorkoutSchema);
