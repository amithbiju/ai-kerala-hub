"use client";

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Users, Star, Play, CheckCircle2, Circle, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getCourseById, getCourseModules } from '@/lib/mockApi';
import { Course, Module } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  
  const [course, setCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [courseData, modulesData] = await Promise.all([
        getCourseById(courseId),
        getCourseModules(courseId)
      ]);
      setCourse(courseData || null);
      setModules(modulesData);
      setLoading(false);
    };
    loadData();
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="h-96 bg-muted animate-pulse rounded-xl" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <Button asChild>
            <Link href="/paths">Back to Learning Paths</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const completedModules = modules.filter(m => m.completed).length;
  const progressPercent = modules.length > 0 ? (completedModules / modules.length) * 100 : 0;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Course Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link href={`/paths/${course.segmentId}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Segment
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Badge>{course.level}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
              <p className="text-lg text-muted-foreground">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-medium">{course.modules} modules</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">{course.enrolled.toLocaleString()} enrolled</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating} rating</span>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="mr-3">
                  <Play className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
                <Button size="lg" variant="outline">
                  Preview Course
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <div className="aspect-video relative overflow-hidden rounded-t-xl">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={800}
                    height={450}
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Your Progress</span>
                      <span className="font-medium">{Math.round(progressPercent)}%</span>
                    </div>
                    <Progress value={progressPercent} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {completedModules} of {modules.length} modules completed
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Course</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    This comprehensive course is designed to take you from the fundamentals to advanced concepts in AI. 
                    You&apos;ll learn through a combination of video lectures, hands-on projects, and real-world case studies.
                  </p>
                  <p>
                    Perfect for {course.level.toLowerCase()} level learners, this course provides everything you need to 
                    succeed in the AI field.
                  </p>
                </CardContent>
              </Card>

              {/* What You'll Learn */}
              <Card>
                <CardHeader>
                  <CardTitle>What You&apos;ll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Core AI concepts and terminology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Practical implementation skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Real-world project experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Best practices and ethics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Course Modules */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                  <CardDescription>
                    {modules.length} modules • {modules.reduce((acc, m) => acc + m.lessons, 0)} lessons
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {modules.map((module, index) => (
                      <div
                        key={module.id}
                        className="flex items-start gap-4 p-4 rounded-lg border hover:border-primary/50 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          {module.completed ? (
                            <CheckCircle2 className="h-6 w-6 text-primary" />
                          ) : (
                            <Circle className="h-6 w-6 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-muted-foreground">Module {index + 1}</span>
                            {module.completed && <Badge variant="secondary" className="text-xs">Completed</Badge>}
                          </div>
                          <h3 className="font-semibold mb-1">{module.title}</h3>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>{module.lessons} lessons</span>
                            <span>{module.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Play className="h-5 w-5 text-primary" />
                    <span>Video lectures</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Community support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Certificate of completion</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      AI
                    </div>
                    <div>
                      <div className="font-semibold">Kerala AI Team</div>
                      <div className="text-sm text-muted-foreground">Expert Instructors</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Experienced AI professionals and educators dedicated to Kerala&apos;s AI literacy mission.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
