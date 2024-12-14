import express from "express";
import { ClotheController } from "../controllers/TrendVibeController.js";

const WomenApp = express.Router()

WomenApp.get("/", ClotheController.allProduct)
WomenApp.get("/:id", ClotheController.byId)
WomenApp.get("/category/:category", ClotheController.byCategory)
WomenApp.get("/fabrics/:fabrics", ClotheController.byFabrics)

export default WomenApp

