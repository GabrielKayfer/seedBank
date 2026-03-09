import { Router } from "express";
import authRoutes from "./auth.routes.js";
import chatkitRoutes from "./chatkit.routes.js";

const v1Routes = Router();

v1Routes.use("/auth", authRoutes);
v1Routes.use("/chatkit", chatkitRoutes);

export default v1Routes;
