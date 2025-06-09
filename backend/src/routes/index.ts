import { Router } from "express";

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import settingRoutes from "./settingRoutes";
import contactRoutes from "./contactRoutes";
import ticketRoutes from "./ticketRoutes";
import whatsappRoutes from "./whatsappRoutes";
import messageRoutes from "./messageRoutes";
import whatsappSessionRoutes from "./whatsappSessionRoutes";
import queueRoutes from "./queueRoutes";
import quickAnswerRoutes from "./quickAnswerRoutes";
import apiRoutes from "./apiRoutes";

const routes = Router();

routes.use("/api", userRoutes);
routes.use("/api/auth", authRoutes);
routes.use("/api", settingRoutes);
routes.use("/api", contactRoutes);
routes.use("/api", ticketRoutes);
routes.use("/api", whatsappRoutes);
routes.use("/api", messageRoutes);
routes.use("/api", whatsappSessionRoutes);
routes.use("/api", queueRoutes);
routes.use("/api", quickAnswerRoutes);
routes.use("/api/external", apiRoutes);

export default routes;
