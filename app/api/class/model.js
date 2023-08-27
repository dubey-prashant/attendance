import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }],
  school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

export default mongoose.models.Class || mongoose.model("Class", classSchema);
