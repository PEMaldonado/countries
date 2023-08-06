import app from "./src/app.js";
import { sequelize } from "./src/db.js";

const startServer = async () => {
  sequelize.sync({ force: true }).then(() => {
    app.listen(3001, () => {
      console.log("Running on port 3001");
    });
  });
};

startServer();
