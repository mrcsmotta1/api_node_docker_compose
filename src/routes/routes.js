import express from "express";
const router = express.Router();
import UserController from "./../app/controllers/UserController";

router.get("/registers", UserController.list);

export default router;
