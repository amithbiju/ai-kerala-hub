"use client";

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, Star, TrendingUp, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getSegmentById, getCoursesBySegment } from '@/lib/mockApi';
import { Segment, Course } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SegmentDetailPage() {
  const params = useParams();
  const segmentId = params.segmentId as string;
  
  const [segment, setSegment] = useState<Segment | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [segmentData, coursesData] = await Promise.all([
        getSegmentById(segmentId),
        getCoursesBySegment(segmentId)
      ]);
      setSegment(segmentData || null);
      setCourses(coursesData);
      setLoading(false);
    };
    loadData();
  }, [segmentId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="h-64 bg-muted animate-pulse rounded-xl mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-80 bg-muted animate-pulse rounded-xl" />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!segment) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Segment Not Found</h1>
          <Button asChild>
            <Link href="/paths">Back to Learning Paths</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link href="/paths">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Paths
            </Link>
          </Button>
          
          <div className="flex items-start gap-6">
            <div className={`w-20 h-20 rounded-2xl ${segment.color} flex items-center justify-center text-5xl flex-shrink-0`}>
              {segment.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{segment.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{segment.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-medium">{segment.courseCount} Courses</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">{segment.learners.toLocaleString()} Active Learners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Available Courses</h2>
            <p className="text-muted-foreground">
              Choose from {courses.length} carefully designed courses for {segment.name.toLowerCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="h-full hover:shadow-xl transition-all cursor-pointer group border-2 hover:border-primary/50">
                  <div className="aspect-video relative overflow-hidden rounded-t-xl">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      width={800}
                      height={450}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4">{course.level}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.modules} modules</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{course.enrolled.toLocaleString()} enrolled</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating} rating</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-sm text-primary font-medium group-hover:underline">
                        View Course Details →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="py-12 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Join thousands of {segment.name.toLowerCase()} already advancing their AI skills
              </p>
              <Button size="lg" variant="secondary">
                Create Free Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
