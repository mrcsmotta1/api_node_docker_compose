import express from "express";
import routes from "./routes/routes";

const app = express();

app.use("/api/v1", routes);

export default app;
