import { Router } from "express";
import {
  getActivities,
  postActivity,
} from "../controllers/activitiesController.js";

export const activitiesRouter = Router();

activitiesRouter.post("/", postActivity);

activitiesRouter.get("/", getActivities);
