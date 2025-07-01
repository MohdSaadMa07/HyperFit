export const counts = [
  { id: 1, title: "Calories Burnt", value: 2450, unit: "kcal" },
  { id: 2, title: "Workouts Completed", value: 18, unit: "sessions" },
  { id: 3, title: "Total Hours", value: 12.5, unit: "hrs" },
  { id: 4, title: "Steps Walked", value: 43000, unit: "steps" },
];

export const weeklyStatsData = {
  totalWeeksCaloriesBurnt: {
    weeks: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    caloriesBurned: [450, 520, 610, 400, 700, 800, 650],
  },
};

export const activityPieData = [
  { name: "Cardio", value: 40 },
  { name: "Strength", value: 25 },
  { name: "Yoga", value: 15 },
  { name: "HIIT", value: 10 },
  { name: "Stretching", value: 10 },
];

export const heartRateData = {
  time: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
  heartRate: [72, 88, 95, 78, 85, 70],
};
