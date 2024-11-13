import StudentSchema from "./StudentsSchema.js";
//C
export const insertStudent = (userObj) => {
  return StudentSchema(userObj).save();
};

//R

//U

//D
