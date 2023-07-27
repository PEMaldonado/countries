import { Router } from "express";
import {
  getCountries,
  getCountry,
} from "../controllers/countriesController.js";

export const countriesRouter = Router();

countriesRouter.get("/", getCountries);
countriesRouter.get("/:idCountry", getCountry);
