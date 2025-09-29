import { Schema, model, models, Document } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  instructor: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number; // in minutes
  content: {
    lessons: Array<{
      title: string;
      type: "video" | "text" | "quiz" | "project";
      duration: number;
      content: string;
    }>;
  };
  prerequisites: string[];
  skills: string[];
  rating: number;
  enrolledCount: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, enum: ["beginner", "intermediate", "advanced"], required: true },
    duration: { type: Number, required: true },
    content: {
      lessons: [{
        title: { type: String, required: true },
        type: { type: String, enum: ["video", "text", "quiz", "project"], required: true },
        duration: { type: Number, required: true },
        content: { type: String, required: true },
      }],
    },
    prerequisites: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    enrolledCount: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Course = models.Course || model<ICourse>("Course", CourseSchema);


