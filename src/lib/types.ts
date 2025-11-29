export interface Segment {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  courseCount: number;
  learners: number;
}

export interface Course {
  id: string;
  segmentId: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  modules: number;
  enrolled: number;
  rating: number;
  thumbnail: string;
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: number;
  completed: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  authorAvatar: string;
  segmentId: string;
  thumbnail: string;
  likes: number;
  views: number;
  createdAt: string;
  tags: string[];
}

export interface LearningCircle {
  id: string;
  name: string;
  description: string;
  location: string;
  district: string;
  members: number;
  maxMembers: number;
  meetingSchedule: string;
  image: string;
  coordinator: string;
  topics: string[];
}

export interface Partner {
  id: string;
  name: string;
  type: 'Educational' | 'Corporate' | 'Government' | 'NGO';
  logo: string;
  description: string;
  website: string;
}

export interface UserProgress {
  courseId: string;
  courseName: string;
  progress: number;
  lastAccessed: string;
  completedModules: number;
  totalModules: number;
}
