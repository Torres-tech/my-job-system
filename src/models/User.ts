import { Schema, model, models, Document } from "mongoose";
import type { UserRole, UserProfile } from "@/types";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  resume_base?: string;
  profile?: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["mentee", "mentor", "admin"], default: "mentee" },
    resume_base: { type: String },
    profile: {
      skills: { type: [String], default: [] },
      goals: { type: String },
    },
  },
  { timestamps: true }
);

export const User = models.User || model<IUser>("User", UserSchema);


