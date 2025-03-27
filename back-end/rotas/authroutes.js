import express from "express";
import { criarConta } from "../controllers/authController.js";

const router = express.Router();

router.post("/criar-conta", criarConta);

export default router;
