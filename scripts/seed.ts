import "dotenv/config";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import { Course } from "@/models/Course";
import { Enrollment } from "@/models/Enrollment";

async function main() {
  await connectToDatabase();

  await Promise.all([
    User.deleteMany({}),
    Course.deleteMany({}),
    Enrollment.deleteMany({}),
  ]);

  const learner = await User.create({
    name: "Alex Learner",
    email: "alex@example.com",
    passwordHash: "dev-only",
    role: "learner",
    learningProfile: { 
      currentSkills: ["JavaScript", "HTML", "CSS"], 
      learningGoals: ["Master React", "Learn TypeScript", "Build Full-Stack Apps"],
      completedCourses: [],
      learningStreak: 5,
      totalStudyTime: 1200
    },
    preferences: {
      learningStyle: "visual",
      difficulty: "intermediate",
      timeCommitment: 10
    }
  });

  const instructor = await User.create({
    name: "Sarah Instructor",
    email: "sarah@example.com",
    passwordHash: "dev-only",
    role: "instructor",
    learningProfile: {
      currentSkills: ["React", "TypeScript", "Node.js", "MongoDB"],
      learningGoals: ["Teach Advanced React Patterns"],
      completedCourses: [],
      learningStreak: 0,
      totalStudyTime: 0
    }
  });

  const course = await Course.create({
    title: "JavaScript Fundamentals",
    description: "Master the fundamentals of JavaScript programming from variables to functions and beyond.",
    instructor: "Sarah Instructor",
    category: "Programming",
    difficulty: "beginner",
    duration: 480, // 8 hours
    content: {
      lessons: [
        {
          title: "Introduction to JavaScript",
          type: "video",
          duration: 30,
          content: "Learn the basics of JavaScript and its role in web development."
        },
        {
          title: "Variables and Data Types",
          type: "video",
          duration: 45,
          content: "Understanding variables, constants, and different data types in JavaScript."
        },
        {
          title: "Functions and Scope",
          type: "video",
          duration: 60,
          content: "Deep dive into functions, parameters, and scope in JavaScript."
        }
      ]
    },
    prerequisites: [],
    skills: ["JavaScript", "Programming", "Web Development"],
    rating: 4.8,
    enrolledCount: 1247,
    isPublished: true
  });

  await Enrollment.create({
    userId: learner._id,
    courseId: course._id,
    progress: {
      completedLessons: [],
      currentLesson: course.content.lessons[0]._id,
      completionPercentage: 0,
      timeSpent: 0
    },
    status: "enrolled",
    enrolledAt: new Date(),
    lastAccessedAt: new Date()
  });

  console.log("LearnWise AI seed data created successfully!");
  console.log("- Created learner: Alex Learner");
  console.log("- Created instructor: Sarah Instructor");
  console.log("- Created course: JavaScript Fundamentals");
  console.log("- Created enrollment for Alex in JavaScript course");
}

main().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});


