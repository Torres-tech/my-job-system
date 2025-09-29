import { Schema, model, models, Document, Types } from "mongoose";

export interface IEnrollment extends Document {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
  progress: {
    completedLessons: Types.ObjectId[];
    currentLesson?: Types.ObjectId;
    completionPercentage: number;
    timeSpent: number; // in minutes
  };
  status: "enrolled" | "in_progress" | "completed" | "paused";
  enrolledAt: Date;
  completedAt?: Date;
  lastAccessedAt?: Date;
  notes?: string;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

const EnrollmentSchema = new Schema<IEnrollment>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true, index: true },
    progress: {
      completedLessons: [{ type: Schema.Types.ObjectId }],
      currentLesson: { type: Schema.Types.ObjectId },
      completionPercentage: { type: Number, default: 0 },
      timeSpent: { type: Number, default: 0 },
    },
    status: {
      type: String,
      enum: ["enrolled", "in_progress", "completed", "paused"],
      default: "enrolled",
      index: true,
    },
    enrolledAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
    lastAccessedAt: { type: Date, default: Date.now },
    notes: { type: String },
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true }
);

export const Enrollment = models.Enrollment || model<IEnrollment>("Enrollment", EnrollmentSchema);


