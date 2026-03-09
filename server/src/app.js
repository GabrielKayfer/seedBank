import express from "express";
import cors from "cors";
import { corsOptions } from "./config/cors.js";
import { apiRateLimiter } from "./middlewares/apiRateLimiter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import apiRoutes from "./routes/index.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", apiRateLimiter, apiRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
