import { Schema, model, models, Document } from "mongoose";
import type { UserRole, LearningProfile } from "@/types";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  learningProfile?: LearningProfile;
  preferences?: {
    learningStyle: "visual" | "auditory" | "kinesthetic" | "reading";
    difficulty: "beginner" | "intermediate" | "advanced";
    timeCommitment: number; // hours per week
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["learner", "instructor", "admin"], default: "learner" },
    learningProfile: {
      currentSkills: { type: [String], default: [] },
      learningGoals: { type: [String], default: [] },
      completedCourses: { type: [String], default: [] },
      learningStreak: { type: Number, default: 0 },
      totalStudyTime: { type: Number, default: 0 }, // in minutes
    },
    preferences: {
      learningStyle: { type: String, enum: ["visual", "auditory", "kinesthetic", "reading"], default: "visual" },
      difficulty: { type: String, enum: ["beginner", "intermediate", "advanced"], default: "beginner" },
      timeCommitment: { type: Number, default: 5 }, // hours per week
    },
  },
  { timestamps: true }
);

export const User = models.User || model<IUser>("User", UserSchema);


