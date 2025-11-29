"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  BookOpen, 
  Award, 
  TrendingUp, 
  Users, 
  Heart, 
  Eye, 
  Settings,
  Bell,
  User,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { getUserProgress, projects, learningCircles } from '@/lib/mockApi';
import { UserProgress, Project, LearningCircle } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [userProjects, setUserProjects] = useState<Project[]>([]);
  const [userCircles, setUserCircles] = useState<LearningCircle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      const progressData = await getUserProgress();
      setUserProgress(progressData);
      // Mock user projects (first 2 projects)
      setUserProjects(projects.slice(0, 2));
      // Mock user circles (first 2 circles)
      setUserCircles(learningCircles.slice(0, 2));
      setLoading(false);
    };
    loadUserData();
  }, []);

  const totalCoursesEnrolled = userProgress.length;
  const completedCourses = userProgress.filter(p => p.progress === 100).length;
  const averageProgress = userProgress.length > 0 
    ? Math.round(userProgress.reduce((sum, p) => sum + p.progress, 0) / userProgress.length)
    : 0;

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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Learner!</h1>
              <p className="text-muted-foreground">Continue your AI learning journey</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Enrolled Courses</p>
                    <p className="text-3xl font-bold">{totalCoursesEnrolled}</p>
                  </div>
                  <BookOpen className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Completed</p>
                    <p className="text-3xl font-bold">{completedCourses}</p>
                  </div>
                  <Award className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Avg. Progress</p>
                    <p className="text-3xl font-bold">{averageProgress}%</p>
                  </div>
                  <TrendingUp className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Learning Circles</p>
                    <p className="text-3xl font-bold">{userCircles.length}</p>
                  </div>
                  <Users className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="learning" className="space-y-6">
            <TabsList>
              <TabsTrigger value="learning">Learning Progress</TabsTrigger>
              <TabsTrigger value="projects">My Projects</TabsTrigger>
              <TabsTrigger value="circles">Learning Circles</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Learning Progress Tab */}
            <TabsContent value="learning" className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Your Courses</h2>
                  <p className="text-muted-foreground">Track your learning progress</p>
                </div>
                <Button asChild>
                  <Link href="/paths">Browse More Courses</Link>
                </Button>
              </div>

              <div className="space-y-4">
                {userProgress.map((course) => (
                  <Card key={course.courseId} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-10 w-10 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-lg mb-1">{course.courseName}</h3>
                              <p className="text-sm text-muted-foreground">
                                Last accessed: {new Date(course.lastAccessed).toLocaleDateString('en-IN', {
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                            <Button asChild>
                              <Link href={`/courses/${course.courseId}`}>Continue</Link>
                            </Button>
                          </div>
                          <div className="space-y-2 mt-4">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                {course.completedModules} of {course.totalModules} modules completed
                              </span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">My Projects</h2>
                  <p className="text-muted-foreground">Your AI project portfolio</p>
                </div>
                <Button>Create New Project</Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {userProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {project.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {project.views}
                          </div>
                        </div>
                        <span className="text-muted-foreground">
                          {new Date(project.createdAt).toLocaleDateString('en-IN', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">Edit</Button>
                        <Button className="flex-1">View</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Learning Circles Tab */}
            <TabsContent value="circles" className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">My Learning Circles</h2>
                  <p className="text-muted-foreground">Your community connections</p>
                </div>
                <Button asChild>
                  <Link href="/circles">Find More Circles</Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {userCircles.map((circle) => (
                  <Card key={circle.id} className="hover:shadow-xl transition-all">
                    <div className="aspect-video relative overflow-hidden rounded-t-xl">
                      <Image
                        src={circle.image}
                        alt={circle.name}
                        width={800}
                        height={450}
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{circle.name}</CardTitle>
                      <CardDescription>{circle.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{circle.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{circle.members}/{circle.maxMembers} members</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {circle.topics.map((topic) => (
                          <Badge key={topic} variant="secondary">{topic}</Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full">View Details</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Account Settings</h2>
                <p className="text-muted-foreground">Manage your profile and preferences</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-10 w-10 text-primary" />
                      </div>
                      <Button variant="outline">Change Avatar</Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="First name" defaultValue="Kerala" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Last name" defaultValue="Learner" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex gap-2">
                        <Mail className="h-5 w-5 text-muted-foreground mt-2" />
                        <Input id="email" type="email" placeholder="email@example.com" defaultValue="learner@keralaai.org" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <div className="flex gap-2">
                        <Phone className="h-5 w-5 text-muted-foreground mt-2" />
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" defaultValue="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="flex gap-2">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-2" />
                        <Input id="location" placeholder="Your location" defaultValue="Kochi, Kerala" />
                      </div>
                    </div>

                    <Button className="mt-4">Save Changes</Button>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive course updates</p>
                        </div>
                        <Button variant="outline" size="sm">On</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Newsletter</p>
                          <p className="text-sm text-muted-foreground">Weekly AI insights</p>
                        </div>
                        <Button variant="outline" size="sm">On</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-destructive">
                        Delete Account
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
