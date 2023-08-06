import {
  getAllActivities,
  createActivity,
} from "../services/activitiesService.js";

const getActivities = async (req, res) => {
  try {
    const activities = await getAllActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postActivity = async (req, res) => {
  try {
    await createActivity(req.body);
    res.status(200).json({ message: "Activity created succesfully " });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getActivities, postActivity };

// TERMINAR ACTIVITIES Y RELACIONES ENTRE TABLAS...
