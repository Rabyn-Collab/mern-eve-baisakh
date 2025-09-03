import mongoose from "mongoose";


const employeeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  position: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });



export default mongoose.models.Employee || mongoose.model('Employee', employeeSchema);