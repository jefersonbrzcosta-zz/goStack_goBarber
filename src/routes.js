import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import FileController from "./app/controllers/FileController";
import UserController from "./app/controllers/userController";
import SessionController from "./app/controllers/sessionController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.put("/users", UserController.update);

routes.post("/files", upload.single("file"), FileController.store);

export default routes;
