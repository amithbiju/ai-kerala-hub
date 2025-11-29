"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Users, MapPin, Calendar, Filter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getLearningCircles } from '@/lib/mockApi';
import { LearningCircle } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function LearningCirclesPage() {
  const [circles, setCircles] = useState<LearningCircle[]>([]);
  const [filteredCircles, setFilteredCircles] = useState<LearningCircle[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const districts = [
    'all',
    'Ernakulam',
    'Thiruvananthapuram',
    'Kozhikode',
    'Thrissur',
    'Kannur',
    'Kottayam',
  ];

  useEffect(() => {
    const loadCircles = async () => {
      const data = await getLearningCircles();
      setCircles(data);
      setFilteredCircles(data);
      setLoading(false);
    };
    loadCircles();
  }, []);

  const handleFilter = (district: string) => {
    setSelectedDistrict(district);
    if (district === 'all') {
      setFilteredCircles(circles);
    } else {
      setFilteredCircles(circles.filter(c => c.district === district));
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
            <Badge className="mb-4">Community Learning</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learning Circles
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Join local AI learning communities across Kerala. Meet fellow learners, share knowledge, and grow together.
            </p>
            <Button size="lg" onClick={() => setShowCreateForm(!showCreateForm)}>
              {showCreateForm ? 'View Circles' : 'Create New Circle'}
            </Button>
          </div>
        </div>
      </section>

      {/* Create Circle Form */}
      {showCreateForm && (
        <section className="py-16 bg-background border-b">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle>Create a Learning Circle</CardTitle>
                <CardDescription>
                  Start a new AI learning community in your area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Circle Name</Label>
                      <Input id="name" placeholder="e.g., Malappuram AI Enthusiasts" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Input id="district" placeholder="e.g., Malappuram" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Meeting Location</Label>
                    <Input id="location" placeholder="e.g., City Library, Main Street" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your learning circle's focus and goals..."
                      rows={4}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="schedule">Meeting Schedule</Label>
                      <Input id="schedule" placeholder="e.g., Every Saturday, 3:00 PM" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxMembers">Max Members</Label>
                      <Input id="maxMembers" type="number" placeholder="e.g., 30" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coordinator">Coordinator Name</Label>
                    <Input id="coordinator" placeholder="Your name" />
                  </div>
                  <Button type="submit" className="w-full">Create Learning Circle</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 border-b bg-background sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            {districts.map((district) => (
              <Button
                key={district}
                variant={selectedDistrict === district ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilter(district)}
                className="whitespace-nowrap"
              >
                {district === 'all' ? 'All Districts' : district}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Circles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {filteredCircles.length} learning circles
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCircles.map((circle) => (
              <Card key={circle.id} className="hover:shadow-xl transition-all group">
                <div className="aspect-video relative overflow-hidden rounded-t-xl">
                  <Image
                    src={circle.image}
                    alt={circle.name}
                    width={800}
                    height={450}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-background/90">
                    {circle.district}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {circle.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{circle.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{circle.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{circle.meetingSchedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{circle.members}/{circle.maxMembers} members</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-xs text-muted-foreground mb-2">Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {circle.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="text-xs text-muted-foreground">Coordinator</div>
                    <div className="font-medium">{circle.coordinator}</div>
                  </div>

                  <Button 
                    className="w-full" 
                    variant={circle.members >= circle.maxMembers ? 'outline' : 'default'}
                    disabled={circle.members >= circle.maxMembers}
                  >
                    {circle.members >= circle.maxMembers ? 'Full' : 'Join Circle'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
              <p className="text-muted-foreground">
                Learn together with peers who share your interests and goals
              </p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Connections</h3>
              <p className="text-muted-foreground">
                Meet in person at convenient locations across Kerala
              </p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Regular Meetups</h3>
              <p className="text-muted-foreground">
                Structured schedules with consistent learning opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
