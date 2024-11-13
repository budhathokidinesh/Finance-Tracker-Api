import express from "express";
import { insertStudent } from "../models/students/StudentsModel.js";
const router = express.Router();

// Student Signup
router.post("/", async (req, res, next) => {
  try {
    //get the student object
    // encrypt the password
    // insert the students
    const user = await insertStudent(req.body);
    user?._id
      ? res.json({
          status: "success",
          message: "Your account has been created, you may login now",
        })
      : res.json({
          status: "error",
          message: "Error creating students. Please try again later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// Student Login

// Student Profile

export default router;
