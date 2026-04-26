//2. Models and Schemas

import mongoose from 'mongoose';


const professorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    facultyId: {
      type: String,
      required: true,
      unique: true, // For IDs
    },
    department: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Off Campus',
    },
  },
  { timestamps: true } 
);


const Professor = mongoose.model('Professor', professorSchema);

export default Professor;