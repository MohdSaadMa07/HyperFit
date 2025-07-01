import React from "react";
import styled from "styled-components";
import { Button, MenuItem, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
`;

const AddWorkout = ({
  workoutForm = {
    category: "",
    workoutName: "",
    sets: "",
    reps: "",
    weight: "",
    duration: "",
  },
  setWorkoutForm = () => {},
  addWorkout = () => {},
  buttonLoading = false,
  categories = [],
  exercises = [],
  selectedDate,
  setSelectedDate = () => {},
}) => {

  const handleChange = (e) => {
    setWorkoutForm({
      ...workoutForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <TextField
        select
        label="Category"
        name="category"
        value={workoutForm.category}
        onChange={handleChange}
        fullWidth
        size="small"
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Exercise"
        name="workoutName"
        value={workoutForm.workoutName}
        onChange={handleChange}
        fullWidth
        size="small"
      >
        {exercises.map((ex) => (
          <MenuItem key={ex} value={ex}>
            {ex}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Sets"
        name="sets"
        type="number"
        value={workoutForm.sets}
        onChange={handleChange}
        fullWidth
        size="small"
      />
      <TextField
        label="Reps"
        name="reps"
        type="number"
        value={workoutForm.reps}
        onChange={handleChange}
        fullWidth
        size="small"
      />
      <TextField
        label="Weight (kg)"
        name="weight"
        type="number"
        value={workoutForm.weight}
        onChange={handleChange}
        fullWidth
        size="small"
      />
      <TextField
        label="Duration (min)"
        name="duration"
        type="number"
        value={workoutForm.duration}
        onChange={handleChange}
        fullWidth
        size="small"
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Workout Date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          slotProps={{
            textField: {
              fullWidth: true,
              size: "small",
            },
          }}
        />
      </LocalizationProvider>

      <Button
        variant="contained"
        color="primary"
        onClick={addWorkout}
        disabled={buttonLoading}
      >
        {buttonLoading ? "Adding..." : "Add Workout"}
      </Button>
    </Form>
  );
};

export default AddWorkout;
