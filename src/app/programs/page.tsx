"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const programs = [
  {
    id: 'kuttymakers',
    icon: '👦👧',
    title: 'KuttyMakers',
    ageGroup: 'Ages 10–17',
    description: 'Hands-on introduction to AI using games, patterns, stories, and simple tools like Teachable Machine.',
    tags: ['Beginner', 'Hands-on', 'Fun Learning'],
    cta: 'Explore KuttyMakers Program',
    link: '/paths/kuttymakers',
    color: 'from-blue-500/10 to-purple-500/10'
  },
  {
    id: 'young-makers',
    icon: '🎓💻',
    title: 'Young Makers',
    ageGroup: 'College Students & Early Professionals',
    description: 'Study jams, hackathons, and project-based learning to build real AI solutions using GenAI and LLMs.',
    tags: ['Intermediate', 'Project-Based', 'Career-Focused'],
    cta: 'Explore Young Makers Program',
    link: '/paths/young-makers',
    color: 'from-green-500/10 to-teal-500/10'
  },
  {
    id: 'friends',
    icon: '👨‍🏫👵👩‍⚕️',
    title: 'Friends of the Movement',
    ageGroup: 'Educators, Parents, Elders, Professionals',
    description: 'Awareness sessions on AI, misinformation, deepfakes, and how AI impacts daily life and careers.',
    tags: ['Awareness', 'Community', 'Practical'],
    cta: 'Explore Friends Program',
    link: '/paths/friends',
    color: 'from-orange-500/10 to-amber-500/10'
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              AI Literacy Programs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Three learning tracks designed for kids, youth, and the wider community.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card 
                key={program.id} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/50"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                
                <CardHeader className="space-y-4">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  
                  {/* Title and Age Group */}
                  <div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </CardTitle>
                    <Badge variant="secondary" className="font-normal">
                      {program.ageGroup}
                    </Badge>
                  </div>
                  
                  {/* Description */}
                  <CardDescription className="text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {program.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" 
                    variant="default"
                    asChild
                  >
                    <Link href={program.link}>
                      {program.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Not sure which program is right for you?</h2>
          <p className="text-lg text-muted-foreground">
            Explore all our learning paths or join a community learning circle to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/paths">Browse All Paths</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="/circles">Find Learning Circles</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
