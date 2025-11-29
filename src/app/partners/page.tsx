"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2, GraduationCap, Landmark, Heart, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getPartners } from '@/lib/mockApi';
import { Partner } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [filteredPartners, setFilteredPartners] = useState<Partner[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const partnerTypes = [
    { id: 'all', label: 'All Partners', icon: Building2 },
    { id: 'Educational', label: 'Educational', icon: GraduationCap },
    { id: 'Corporate', label: 'Corporate', icon: Building2 },
    { id: 'Government', label: 'Government', icon: Landmark },
    { id: 'NGO', label: 'NGO', icon: Heart },
  ];

  useEffect(() => {
    const loadPartners = async () => {
      const data = await getPartners();
      setPartners(data);
      setFilteredPartners(data);
      setLoading(false);
    };
    loadPartners();
  }, []);

  const handleFilter = (type: string) => {
    setSelectedType(type);
    if (type === 'all') {
      setFilteredPartners(partners);
    } else {
      setFilteredPartners(partners.filter(p => p.type === type));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-48 bg-muted animate-pulse rounded-xl" />
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
            <Badge className="mb-4">Collaborative Ecosystem</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Partners
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Kerala AI Literacy Hub is powered by a diverse ecosystem of educational institutions, corporations, government bodies, and NGOs committed to democratizing AI education.
            </p>
            <Button size="lg" onClick={() => setShowApplicationForm(!showApplicationForm)}>
              {showApplicationForm ? 'View Partners' : 'Become a Partner'}
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      {showApplicationForm && (
        <section className="py-16 bg-background border-b">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle>Partner Application</CardTitle>
                <CardDescription>
                  Join us in making Kerala AI-ready for everyone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name</Label>
                      <Input id="orgName" placeholder="Your organization name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgType">Organization Type</Label>
                      <Select>
                        <SelectTrigger id="orgType">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="educational">Educational Institution</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="government">Government Body</SelectItem>
                          <SelectItem value="ngo">NGO</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" placeholder="https://example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Organization Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Tell us about your organization and how you'd like to contribute..."
                      rows={4}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Person</Label>
                      <Input id="contactName" placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Contact Email</Label>
                      <Input id="contactEmail" type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="proposal">Partnership Proposal</Label>
                    <Textarea 
                      id="proposal" 
                      placeholder="Describe how you'd like to partner with Kerala AI Literacy Hub (e.g., sponsorship, infrastructure, expertise, content creation)..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Partner Types Filter */}
      <section className="py-8 border-b bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {partnerTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleFilter(type.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {type.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {filteredPartners.length} partners
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPartners.map((partner) => (
              <Card key={partner.id} className="hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="aspect-square relative overflow-hidden rounded-lg mb-4 bg-muted">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200}
                      height={200}
                      className="object-contain p-6"
                    />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">{partner.type}</Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {partner.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 min-h-[3.75rem]">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join Kerala's AI literacy movement and make a lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Educational Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Help shape the future of AI education and empower thousands of learners across Kerala
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Brand Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gain recognition as a leader in AI education and social responsibility in Kerala
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Community Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with a vibrant community of learners, educators, and AI enthusiasts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with us to democratize AI education and build a future-ready Kerala
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => setShowApplicationForm(true)}>
              Apply for Partnership
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
