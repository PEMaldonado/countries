import { Router } from "express";
import { activitiesRouter } from "./activitiesRouter.js";
import { countriesRouter } from "./countriesRouter.js";

const mainRouter = Router();

mainRouter.use("/activities", activitiesRouter);

mainRouter.use("/countries", countriesRouter);

export { mainRouter };
