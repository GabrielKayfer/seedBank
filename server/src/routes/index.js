import { Router } from "express";
import legacyRoutes from "./legacy/index.js";
import v1Routes from "./v1/index.js";

const apiRoutes = Router();

apiRoutes.use("/v1", v1Routes);
apiRoutes.use("/", legacyRoutes);

export default apiRoutes;
