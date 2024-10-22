import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js"
const app = express();
app.use ("/", router);
app.listen(2000, () => {
    console.log("Server started on port 3000");
db.connection.once("open", () => {
    console.log("connected to database");
})
    
});