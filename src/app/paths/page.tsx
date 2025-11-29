"use client";

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getSegments } from '@/lib/mockApi';
import { Segment } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LearningPathsPage() {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSegments = async () => {
      const data = await getSegments();
      setSegments(data);
      setLoading(false);
    };
    loadSegments();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-muted animate-pulse rounded-xl" />
            ))}
          </div>
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
          <div className="max-w-3xl">
            <Badge className="mb-4">6 Learning Paths</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Learning for Everyone
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover your personalized AI learning journey. Choose a path that aligns with your role, goals, and aspirations in Kerala&apos;s AI-powered future.
            </p>
          </div>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((segment) => (
              <Link key={segment.id} href={`/paths/${segment.id}`}>
                <Card className="h-full hover:shadow-xl transition-all cursor-pointer group border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl ${segment.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform`}>
                      {segment.icon}
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors flex items-center justify-between">
                      {segment.name}
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription className="text-base">{segment.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span className="font-medium">{segment.courseCount} courses</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="font-medium">{segment.learners.toLocaleString()} learners</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm text-primary font-medium group-hover:underline">
                        Explore this path →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why Choose a Learning Path?</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Content</h3>
                    <p className="text-muted-foreground text-sm">
                      Courses designed specifically for your role and experience level
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Structured Learning</h3>
                    <p className="text-muted-foreground text-sm">
                      Clear progression from basics to advanced topics
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-World Projects</h3>
                    <p className="text-muted-foreground text-sm">
                      Apply your learning to solve Kerala-specific challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Not Sure Which Path?</h3>
                <p className="text-muted-foreground">
                  Take our quick assessment to find the perfect learning path for you
                </p>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Take Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
