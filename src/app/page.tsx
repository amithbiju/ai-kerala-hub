"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, BookOpen, Target, Sparkles, Heart, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { segments, projects, learningCircles } from '@/lib/mockApi';
import { Segment, Project, LearningCircle } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  const [segmentData, setSegmentData] = useState<Segment[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [circlesPreview, setCirclesPreview] = useState<LearningCircle[]>([]);

  useEffect(() => {
    setSegmentData(segments);
    setFeaturedProjects(projects.slice(0, 3));
    setCirclesPreview(learningCircles.slice(0, 3));
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit" variant="secondary">
                <Sparkles className="h-3 w-3 mr-1" />
                AI for Everyone Initiative
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welcome to Kerala&apos;s
                <span className="text-primary block">AI Literacy Hub</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Empowering every Keralite with AI knowledge and skills. Whether you&apos;re a student, professional, entrepreneur, or lifelong learner, we have a path for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/paths">
                    Explore Learning Paths
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/circles">Join a Learning Circle</Link>
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">11,650+</div>
                  <div className="text-sm text-muted-foreground">Active Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">69</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Learning Circles</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                  alt="Kerala AI Learning Community"
                  width={800}
                  height={800}
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Segments */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Learning Path</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored AI learning experiences for different segments of Kerala society
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentData.map((segment) => (
              <Link key={segment.id} href={`/paths/${segment.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg ${segment.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                      {segment.icon}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {segment.name}
                    </CardTitle>
                    <CardDescription>{segment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {segment.courseCount} courses
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {segment.learners.toLocaleString()} learners
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple steps to start your AI learning journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">1. Choose Your Path</h3>
              <p className="text-muted-foreground">
                Select a learning path that matches your background and goals
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">2. Learn & Practice</h3>
              <p className="text-muted-foreground">
                Access courses, complete projects, and build real-world skills
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">3. Join Community</h3>
              <p className="text-muted-foreground">
                Connect with local learning circles and grow together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                Amazing AI projects created by our Kerala learners
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">View All</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={project.authorAvatar}
                        alt={project.author}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-sm text-muted-foreground">{project.author}</span>
                    </div>
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {project.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {project.views}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Circles Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Learning Circles</h2>
              <p className="text-lg text-muted-foreground">
                Connect with fellow learners in your district
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/circles">View All Circles</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {circlesPreview.map((circle) => (
              <Card key={circle.id} className="hover:shadow-lg transition-shadow">
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
                  <CardDescription className="line-clamp-2">{circle.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{circle.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Members</span>
                    <span className="font-medium">{circle.members}/{circle.maxMembers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Schedule</span>
                    <span className="font-medium text-right text-xs">{circle.meetingSchedule}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading educational institutions, corporations, and government bodies in making Kerala AI-ready
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/partners">Become a Partner</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}