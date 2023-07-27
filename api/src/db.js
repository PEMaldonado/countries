import { Sequelize } from "sequelize";
import ActivityDefiner from "./models/Activity.js";
import CountryDefiner from "./models/Country.js";
import dotenv from "dotenv";

dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/countries`,
  { logging: false, native: false }
);

ActivityDefiner(sequelize);
CountryDefiner(sequelize);

export const { Activity, Country } = sequelize.models;

Activity.belongsToMany(Country, { through: "ActivityCountries" });
Country.belongsToMany(Activity, { through: "ActivityCountries" });
