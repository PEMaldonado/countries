import axios from "axios";
import { Country } from "./db.js";
import { countryFormatter } from "./services/countryFormatter.js";

const countriesMiddleware = async (req, res, next) => {
  try {
    const count = await Country.count();
    if (count === 0) {
      const response = await axios("https://restcountries.com/v3.1/all");
      const countries = countryFormatter(response);
      await Country.bulkCreate(countries);
      console.log("Países cargados");
    }
    next();
  } catch (error) {
    console.error("Error while fetching data:", error);
    res.status(500).send("Internal server error");
  }
};

export default countriesMiddleware;
