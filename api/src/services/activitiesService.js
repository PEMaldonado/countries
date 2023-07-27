import { Activity } from "../db.js";

const getAllActivities = async () => {
  const activities = await Activity.findAll();
  return activities;
};

const createActivity = async ({ name, difficulty, duration, season }) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  return newActivity;
};

export { getAllActivities, createActivity };
