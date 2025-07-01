import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import WorkoutCard from "../components/card/WorkoutCard";
import AddWorkout from "../components/AddWorkout";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { getWorkouts, addWorkout as addWorkoutAPI } from "../api";
import { CircularProgress } from "@mui/material";
import dayjs from "dayjs";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1600px;
  display: flex;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 0.2;
  height: fit-content;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + "20"};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + "15"};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Right = styled.div`
  flex: 0.8;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const SecTitle = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Workouts = () => {
  // Initialize workoutForm with default values to avoid undefined errors
  const [workoutForm, setWorkoutForm] = useState({
    category: "",
    workoutName: "",
    sets: "",
    reps: "",
    weight: "",
    duration: "",
  });

  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Use null for date state for better compatibility with DatePicker
  const [date, setDate] = useState(null);

  const categories = [
    "Chest",
    "Back",
    "Legs",
    "Arms",
    "Shoulders",
    "Cardio",
    "Core",
    "Full Body",
  ];

  const exercises = [
    "Push Ups",
    "Pull Ups",
    "Squats",
    "Deadlifts",
    "Bench Press",
    "Bicep Curl",
    "Running",
    "Plank",
    "Overhead Press",
  ];

  const getTodaysWorkout = useCallback(async () => {
    if (!date) return; // Don't fetch if date not selected

    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");

    try {
      // Format date as YYYY-MM-DD string
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const query = `?date=${encodeURIComponent(formattedDate)}`;

      const res = await getWorkouts(token, query);
      setTodaysWorkouts(res?.data?.todaysWorkouts || []);
    } catch (err) {
      console.error("Failed to fetch workouts:", err);
      setTodaysWorkouts([]);
    }
    setLoading(false);
  }, [date]);

  useEffect(() => {
    getTodaysWorkout();
  }, [getTodaysWorkout]);

  const handleAddWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("fittrack-app-token");

    try {
      const workoutToAdd = {
        ...workoutForm,
        date: dayjs(date).format("YYYY-MM-DD"),
      };

      await addWorkoutAPI(token, workoutToAdd);

      // Reset form after successful add
      setWorkoutForm({
        category: "",
        workoutName: "",
        sets: "",
        reps: "",
        weight: "",
        duration: "",
      });

      // Refresh workouts list
      await getTodaysWorkout();
    } catch (err) {
      const errorMsg = err?.response?.data?.message || "Failed to add workout";
      alert(errorMsg);
      console.error(errorMsg);
    }
    setButtonLoading(false);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Select Date</Title>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(e) => {
                if (!e) return;
                setDate(e);
              }}
              value={date}
            />
          </LocalizationProvider>
        </Left>

        <Right>
          <Section>
            <SecTitle>Add Workout</SecTitle>
            <AddWorkout
              workoutForm={workoutForm}
              setWorkoutForm={setWorkoutForm}
              addWorkout={handleAddWorkout}
              buttonLoading={buttonLoading}
              categories={categories}
              exercises={exercises}
              selectedDate={date}
              setSelectedDate={setDate}
            />
          </Section>

          <Section>
            <SecTitle>Today's Workouts</SecTitle>
            {loading ? (
              <CircularProgress />
            ) : (
              <CardWrapper>
                {todaysWorkouts.length ? (
                  todaysWorkouts.map((workout, idx) => (
                    <WorkoutCard key={idx} workout={workout} />
                  ))
                ) : (
                  <div>No workouts for selected date</div>
                )}
              </CardWrapper>
            )}
          </Section>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Workouts;
