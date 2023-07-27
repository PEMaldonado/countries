import app from "./src/app.js";
import { sequelize } from "./src/db.js";
import axios from "axios";
import { Country } from "./src/db.js";
import { countryFormatter } from "./src/services/countryFormatter.js";

const startServer = async () => {
  sequelize.sync({ force: true }).then(() => {
    app.listen(3001, () => {
      console.log("Running on port 3001");
    });
  });

  try {
    const count = await Country.count();
    if (count === 0) {
      const response = await axios("https://restcountries.com/v3.1/all");
      const countries = countryFormatter(response);
      await Country.bulkCreate(countries);
    }
  } catch (error) {
    console.error("Error while fetching data:", error);
  }
};

startServer();
