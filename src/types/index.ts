export type UserRole = "learner" | "instructor" | "admin";

export interface LearningProfile {
  currentSkills: string[];
  learningGoals: string[];
  completedCourses: string[];
  learningStreak: number;
  totalStudyTime: number; // in minutes
}

export interface CourseContent {
  lessons: Array<{
    id: string;
    title: string;
    type: "video" | "text" | "quiz" | "project";
    duration: number; // in minutes
    content: string;
    isCompleted?: boolean;
  }>;
}

export interface LearningProgress {
  courseId: string;
  completedLessons: string[];
  currentLesson?: string;
  completionPercentage: number;
  timeSpent: number; // in minutes
  lastAccessedAt: Date;
}

export interface LearningRecommendation {
  courseId: string;
  title: string;
  reason: string;
  matchScore: number;
  category: string;
}


