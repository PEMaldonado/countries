import {
  getAllActivities,
  createActivity,
} from "../services/activitiesService.js";

const getActivities = (req, res) => {
  try {
    const activities = getAllActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postActivity = (req, res) => {
  try {
    createActivity(req.body);
    res.status(200).json({ message: "Activity created succesfully " });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getActivities, postActivity };
