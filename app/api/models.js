import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],  
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

export const Class = mongoose.models.Class || mongoose.model("Class", classSchema);

const studentSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String, 
  age: Number,
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

export const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);

const attendanceSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  date: Date,
  status: { type: String, enum: ['P', 'A', 'OD'], required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

export const Attendance = mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);
