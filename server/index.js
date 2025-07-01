import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/User.js';

dotenv.config(); // Load .env variables at the very top

const app = express();
app.use(cors()); 
// Middleware to parse JSON bodies from incoming requests (essential for POST/PUT requests)
app.use(express.json());



const PORT = process.env.PORT || 3001;



// Simple test route (optional, can be removed later)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// --- ALL YOUR API ROUTES GO HERE ---
// This is critical: ALL your 'app.use("/api/...", ...Routes);' lines MUST come before any static file serving.
app.use("/api/user", userRoutes);
// If you have other API routes, add them here, e.g.:
// app.use("/api/workouts", workoutRoutes);


// --- IF YOU ARE SERVING A FRONTEND (e.g., React build), ADD THE FOLLOWING LINES HERE ---
// If your Node.js server also serves your React frontend's build files (e.g., from 'client/build'),
// these lines MUST be placed *after* all your API routes.
/*
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Catch-all route for frontend: sends index.html for any unmatched route.
// This ensures client-side routing works but ONLY if no API route matches first.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
*/
// --- END OF FRONTEND SERVING CODE ---


// Global Error Handling Middleware (Highly Recommended, place at the very end of index.js)
// If you have a custom error handling middleware, add it here:
// import { createError } from './error.js'; // Assuming you have this
// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const message = err.message || "Something went wrong!";
//   return res.status(status).json({
//     success: false,
//     status,
//     message,
//   });
// });


// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });