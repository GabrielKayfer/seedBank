import { Router } from "express";
import { createChatkitSession } from "../../controllers/chatkit.controller.js";
import { validateCreateChatkitSessionRequest } from "../../middlewares/validateCreateChatkitSessionRequest.js";

const chatkitRoutes = Router();

chatkitRoutes.post("/sessions", validateCreateChatkitSessionRequest, createChatkitSession);

export default chatkitRoutes;
