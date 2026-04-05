import { Router } from "express";
import { getMe, login, logout } from "../../controllers/auth.controller.js";
import { requireFakeAuth } from "../../middlewares/requireFakeAuth.js";

const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.get("/me", requireFakeAuth, getMe);
authRoutes.post("/logout", requireFakeAuth, logout);

export default authRoutes;
