import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import WomenApp from "./routes/TrendVibeClotheRoutes.js";

const app = express();
dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Welcome To TrendVibe")
})

app.use("/clothes", WomenApp) // All Products
app.use("/clothes/:id", WomenApp) // Search By Id
app.use("/clothes/category/:category", WomenApp) // Search By Category
app.use("/clothes/fabrics/:fabrics", WomenApp) // Search By Fabrics

app.get("*", (req, res) => {
    res.status(400).send("Something Went Wrong")
})

let Port = process.env.PORT || 10010
app.listen(Port, (req, res) => {
    console.log(`Server is Working On Port: ${Port}`);
})