import express from "express";
import { getUser } from "../controllers/ecommerce.controller";

const router = express.Router();

router.get("/user/:id", getUser);

export default router;
