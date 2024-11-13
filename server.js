import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

// connect Db
import { conMongoDb } from "./config/mongodbConfig.js";
conMongoDb();
//Middlewares
app.use(express.json());

//Api endpoints
import studentRouter from "./routers/studentRouter.js";

app.use("/api/v1/students", studentRouter);
app.get("/", (req, res) => {
  res.json({
    message: "It's Live",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost:${PORT}`);
});
