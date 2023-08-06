import express from "express";
import morgan from "morgan";
import cors from "cors";
import { mainRouter } from "./routes/index.js";
import countriesMiddleware from "./CountriesMiddleware.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(""));
app.use(countriesMiddleware);

app.use("/", mainRouter);

export default app;
