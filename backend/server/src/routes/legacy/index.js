import { Router } from "express";
import { createChatkitSession } from "../../controllers/chatkit.controller.js";
import { validateCreateChatkitSessionRequest } from "../../middlewares/validateCreateChatkitSessionRequest.js";

const legacyRoutes = Router();

legacyRoutes.post("/chatkit/session", validateCreateChatkitSessionRequest, createChatkitSession);

export default legacyRoutes;
