"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Eye, Filter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getProjects } from '@/lib/mockApi';
import { Project } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'students', label: 'Students' },
    { id: 'professionals', label: 'Professionals' },
    { id: 'entrepreneurs', label: 'Entrepreneurs' },
    { id: 'government', label: 'Government' },
    { id: 'educators', label: 'Educators' },
  ];

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setFilteredProjects(data);
      setLoading(false);
    };
    loadProjects();
  }, []);

  const handleFilter = (filterId: string) => {
    setSelectedFilter(filterId);
    if (filterId === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.segmentId === filterId));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-muted animate-pulse rounded-xl" />
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
            <Badge className="mb-4">Community Showcase</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Projects from Kerala
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover innovative AI projects created by learners across Kerala. Get inspired, learn from others, and share your own creations.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-background sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilter(filter.id)}
                className="whitespace-nowrap"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {filteredProjects.length} projects
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={project.authorAvatar}
                        alt={project.author}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div className="text-sm">
                        <div className="font-medium">{project.author}</div>
                        <div className="text-muted-foreground text-xs">
                          {new Date(project.createdAt).toLocaleDateString('en-IN', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
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
                  <Button variant="outline" className="w-full" size="sm">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project to Share?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Showcase your AI project to the Kerala community and inspire others
          </p>
          <Button size="lg">Submit Your Project</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
