import { Segment, Course, Module, Project, LearningCircle, Partner, UserProgress } from './types';

// Mock Data - Kerala AI Literacy Hub
export const segments: Segment[] = [
  {
    id: 'students',
    name: 'Students',
    description: 'AI learning paths for school and college students',
    icon: '🎓',
    color: 'bg-emerald-500',
    courseCount: 12,
    learners: 3420
  },
  {
    id: 'professionals',
    name: 'Professionals',
    description: 'AI skills for career advancement and workplace innovation',
    icon: '💼',
    color: 'bg-blue-500',
    courseCount: 18,
    learners: 2850
  },
  {
    id: 'entrepreneurs',
    name: 'Entrepreneurs',
    description: 'Leverage AI to build and scale your business',
    icon: '🚀',
    color: 'bg-purple-500',
    courseCount: 10,
    learners: 1560
  },
  {
    id: 'government',
    name: 'Government Officials',
    description: 'AI for public service and governance',
    icon: '🏛️',
    color: 'bg-orange-500',
    courseCount: 8,
    learners: 980
  },
  {
    id: 'educators',
    name: 'Educators',
    description: 'Teaching AI and integrating it into education',
    icon: '👨‍🏫',
    color: 'bg-rose-500',
    courseCount: 15,
    learners: 2100
  },
  {
    id: 'seniors',
    name: 'Senior Citizens',
    description: 'Gentle introduction to AI for everyday life',
    icon: '🧓',
    color: 'bg-teal-500',
    courseCount: 6,
    learners: 740
  }
];

export const courses: Course[] = [
  // Students
  {
    id: 'ai-basics-students',
    segmentId: 'students',
    title: 'AI Fundamentals for Young Minds',
    description: 'An engaging introduction to artificial intelligence concepts designed specifically for students',
    duration: '6 weeks',
    level: 'Beginner',
    modules: 8,
    enrolled: 1240,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800'
  },
  {
    id: 'ml-python-students',
    segmentId: 'students',
    title: 'Machine Learning with Python',
    description: 'Learn to build your first ML models using Python and popular libraries',
    duration: '8 weeks',
    level: 'Intermediate',
    modules: 12,
    enrolled: 890,
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800'
  },
  // Professionals
  {
    id: 'ai-workplace',
    segmentId: 'professionals',
    title: 'AI Tools for Workplace Productivity',
    description: 'Master AI-powered tools to boost your professional efficiency',
    duration: '4 weeks',
    level: 'Beginner',
    modules: 6,
    enrolled: 1850,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
  },
  {
    id: 'data-science-career',
    segmentId: 'professionals',
    title: 'Data Science Career Track',
    description: 'Complete pathway to becoming a data science professional',
    duration: '12 weeks',
    level: 'Advanced',
    modules: 16,
    enrolled: 670,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
  },
  // Entrepreneurs
  {
    id: 'ai-business-strategy',
    segmentId: 'entrepreneurs',
    title: 'AI Business Strategy',
    description: 'Integrate AI into your business model and operations',
    duration: '5 weeks',
    level: 'Intermediate',
    modules: 7,
    enrolled: 540,
    rating: 4.6,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
  },
  {
    id: 'ai-startup-toolkit',
    segmentId: 'entrepreneurs',
    title: 'AI Startup Toolkit',
    description: 'Build AI-powered products from ideation to launch',
    duration: '10 weeks',
    level: 'Advanced',
    modules: 14,
    enrolled: 320,
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800'
  },
  // Government
  {
    id: 'ai-governance',
    segmentId: 'government',
    title: 'AI in Public Governance',
    description: 'Leveraging AI for efficient public service delivery',
    duration: '6 weeks',
    level: 'Beginner',
    modules: 8,
    enrolled: 450,
    rating: 4.5,
    thumbnail: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800'
  },
  {
    id: 'smart-cities',
    segmentId: 'government',
    title: 'Smart Cities & AI',
    description: 'Building intelligent urban infrastructure with AI',
    duration: '7 weeks',
    level: 'Intermediate',
    modules: 10,
    enrolled: 280,
    rating: 4.6,
    thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800'
  },
  // Educators
  {
    id: 'teaching-ai',
    segmentId: 'educators',
    title: 'Teaching AI in Classrooms',
    description: 'Methodologies and resources for teaching AI concepts',
    duration: '5 weeks',
    level: 'Beginner',
    modules: 7,
    enrolled: 980,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800'
  },
  {
    id: 'ai-enhanced-learning',
    segmentId: 'educators',
    title: 'AI-Enhanced Learning Experiences',
    description: 'Using AI tools to personalize and improve student outcomes',
    duration: '6 weeks',
    level: 'Intermediate',
    modules: 9,
    enrolled: 760,
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800'
  },
  // Seniors
  {
    id: 'ai-everyday-life',
    segmentId: 'seniors',
    title: 'AI in Everyday Life',
    description: 'Simple, practical AI applications for daily activities',
    duration: '4 weeks',
    level: 'Beginner',
    modules: 5,
    enrolled: 420,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800'
  },
  {
    id: 'digital-safety-ai',
    segmentId: 'seniors',
    title: 'Digital Safety in the AI Age',
    description: 'Stay safe and secure while using AI technologies',
    duration: '3 weeks',
    level: 'Beginner',
    modules: 4,
    enrolled: 320,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800'
  }
];

export const courseModules: Record<string, Module[]> = {
  'ai-basics-students': [
    { id: 'm1', title: 'Introduction to AI', duration: '45 min', lessons: 5, completed: true },
    { id: 'm2', title: 'Machine Learning Basics', duration: '60 min', lessons: 6, completed: true },
    { id: 'm3', title: 'Neural Networks Explained', duration: '50 min', lessons: 5, completed: false },
    { id: 'm4', title: 'AI in Daily Life', duration: '40 min', lessons: 4, completed: false },
    { id: 'm5', title: 'Ethics in AI', duration: '55 min', lessons: 5, completed: false },
    { id: 'm6', title: 'Future of AI', duration: '45 min', lessons: 4, completed: false },
    { id: 'm7', title: 'Hands-on AI Projects', duration: '90 min', lessons: 8, completed: false },
    { id: 'm8', title: 'Final Assessment', duration: '30 min', lessons: 1, completed: false }
  ]
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Malayalam Language AI Chatbot',
    description: 'A conversational AI built to understand and respond in Malayalam, helping preserve and promote our language in the digital age',
    author: 'Rahul Krishnan',
    authorAvatar: 'https://i.pravatar.cc/150?img=12',
    segmentId: 'students',
    thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
    likes: 234,
    views: 1820,
    createdAt: '2024-01-15',
    tags: ['NLP', 'Malayalam', 'Chatbot']
  },
  {
    id: 'p2',
    title: 'Coconut Disease Detection System',
    description: 'AI-powered mobile app that helps farmers identify coconut tree diseases through image recognition',
    author: 'Priya Menon',
    authorAvatar: 'https://i.pravatar.cc/150?img=25',
    segmentId: 'entrepreneurs',
    thumbnail: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800',
    likes: 189,
    views: 1450,
    createdAt: '2024-01-20',
    tags: ['Computer Vision', 'Agriculture', 'Mobile']
  },
  {
    id: 'p3',
    title: 'Flood Prediction Model for Kerala',
    description: 'Machine learning model to predict flooding patterns using historical data and weather forecasts',
    author: 'Anand Sharma',
    authorAvatar: 'https://i.pravatar.cc/150?img=33',
    segmentId: 'professionals',
    thumbnail: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800',
    likes: 312,
    views: 2340,
    createdAt: '2024-01-10',
    tags: ['ML', 'Climate', 'Prediction']
  },
  {
    id: 'p4',
    title: 'Smart Traffic Management for Kochi',
    description: 'AI system to optimize traffic flow and reduce congestion in urban areas',
    author: 'Lakshmi Nair',
    authorAvatar: 'https://i.pravatar.cc/150?img=45',
    segmentId: 'government',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    likes: 267,
    views: 1980,
    createdAt: '2024-01-18',
    tags: ['Smart Cities', 'Traffic', 'IoT']
  },
  {
    id: 'p5',
    title: 'AI-Powered Study Companion',
    description: 'Personalized learning assistant that adapts to student needs and learning pace',
    author: 'Arjun Kumar',
    authorAvatar: 'https://i.pravatar.cc/150?img=52',
    segmentId: 'educators',
    thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
    likes: 421,
    views: 3120,
    createdAt: '2024-01-05',
    tags: ['EdTech', 'Personalization', 'Learning']
  },
  {
    id: 'p6',
    title: 'Heritage Tourism Virtual Guide',
    description: 'AR-enabled AI guide for Kerala tourism sites with multilingual support',
    author: 'Maya Thomas',
    authorAvatar: 'https://i.pravatar.cc/150?img=16',
    segmentId: 'entrepreneurs',
    thumbnail: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
    likes: 198,
    views: 1560,
    createdAt: '2024-01-22',
    tags: ['AR', 'Tourism', 'Culture']
  }
];

export const learningCircles: LearningCircle[] = [
  {
    id: 'lc1',
    name: 'Kochi AI Innovators',
    description: 'Weekly meetups focused on practical AI projects and networking for professionals and entrepreneurs',
    location: 'Infopark, Kochi',
    district: 'Ernakulam',
    members: 45,
    maxMembers: 50,
    meetingSchedule: 'Every Saturday, 4:00 PM',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    coordinator: 'Rajesh Kumar',
    topics: ['Machine Learning', 'Startups', 'Product Development']
  },
  {
    id: 'lc2',
    name: 'Trivandrum Tech Circle',
    description: 'Student-focused learning community exploring AI fundamentals and competitive programming',
    location: 'Technopark, Trivandrum',
    district: 'Thiruvananthapuram',
    members: 62,
    maxMembers: 80,
    meetingSchedule: 'Every Sunday, 10:00 AM',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800',
    coordinator: 'Sneha Nair',
    topics: ['Python', 'Data Science', 'AI Ethics']
  },
  {
    id: 'lc3',
    name: 'Kozhikode Data Science Group',
    description: 'Collaborative learning environment for data science enthusiasts of all levels',
    location: 'Cyberpark, Kozhikode',
    district: 'Kozhikode',
    members: 38,
    maxMembers: 60,
    meetingSchedule: 'Bi-weekly Wednesday, 6:30 PM',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    coordinator: 'Mohammed Rashid',
    topics: ['Data Analytics', 'Visualization', 'Business Intelligence']
  },
  {
    id: 'lc4',
    name: 'Thrissur AI for Good',
    description: 'Using AI to solve local community challenges and social issues',
    location: 'Swaraj Round, Thrissur',
    district: 'Thrissur',
    members: 29,
    maxMembers: 40,
    meetingSchedule: 'First Saturday of month, 3:00 PM',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    coordinator: 'Deepa Menon',
    topics: ['Social Impact', 'Healthcare AI', 'Education Tech']
  },
  {
    id: 'lc5',
    name: 'Kannur Women in AI',
    description: 'Empowering women through AI education and career development support',
    location: 'IT Park, Kannur',
    district: 'Kannur',
    members: 34,
    maxMembers: 50,
    meetingSchedule: 'Every Saturday, 2:00 PM',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    coordinator: 'Archana Kumar',
    topics: ['Career Development', 'AI Applications', 'Mentorship']
  },
  {
    id: 'lc6',
    name: 'Kottayam Senior Tech Club',
    description: 'Gentle introduction to AI and digital tools for senior citizens',
    location: 'Community Center, Kottayam',
    district: 'Kottayam',
    members: 18,
    maxMembers: 25,
    meetingSchedule: 'Every Monday, 11:00 AM',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800',
    coordinator: 'Thomas Joseph',
    topics: ['Digital Literacy', 'AI Basics', 'Online Safety']
  }
];

export const partners: Partner[] = [
  {
    id: 'partner1',
    name: 'Kerala Startup Mission',
    type: 'Government',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200',
    description: 'Supporting AI entrepreneurship and innovation ecosystem in Kerala',
    website: 'https://startupmission.kerala.gov.in'
  },
  {
    id: 'partner2',
    name: 'IIT Palakkad',
    type: 'Educational',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=200',
    description: 'Academic excellence and research collaboration in AI',
    website: 'https://iitpkd.ac.in'
  },
  {
    id: 'partner3',
    name: 'Tata Consultancy Services',
    type: 'Corporate',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200',
    description: 'Industry expertise and mentorship for AI professionals',
    website: 'https://tcs.com'
  },
  {
    id: 'partner4',
    name: 'Digital University Kerala',
    type: 'Educational',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200',
    description: 'Digital education and online learning infrastructure',
    website: 'https://duk.ac.in'
  },
  {
    id: 'partner5',
    name: 'Infosys Foundation',
    type: 'Corporate',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200',
    description: 'CSR initiatives in AI literacy and skill development',
    website: 'https://infosys.com'
  },
  {
    id: 'partner6',
    name: 'Kerala Knowledge Economy Mission',
    type: 'Government',
    logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200',
    description: 'Building knowledge economy through AI education',
    website: 'https://kkem.org'
  },
  {
    id: 'partner7',
    name: 'IEEE Kerala Section',
    type: 'NGO',
    logo: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=200',
    description: 'Technical community support and AI standards',
    website: 'https://ieee.org'
  },
  {
    id: 'partner8',
    name: 'Google for Education',
    type: 'Corporate',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200',
    description: 'AI tools and resources for educational institutions',
    website: 'https://edu.google.com'
  }
];

export const userProgress: UserProgress[] = [
  {
    courseId: 'ai-basics-students',
    courseName: 'AI Fundamentals for Young Minds',
    progress: 35,
    lastAccessed: '2024-01-24',
    completedModules: 2,
    totalModules: 8
  },
  {
    courseId: 'ai-workplace',
    courseName: 'AI Tools for Workplace Productivity',
    progress: 60,
    lastAccessed: '2024-01-23',
    completedModules: 4,
    totalModules: 6
  },
  {
    courseId: 'teaching-ai',
    courseName: 'Teaching AI in Classrooms',
    progress: 15,
    lastAccessed: '2024-01-20',
    completedModules: 1,
    totalModules: 7
  }
];

// Mock API Functions
export const getSegments = async (): Promise<Segment[]> => {
  await delay(300);
  return segments;
};

export const getSegmentById = async (id: string): Promise<Segment | undefined> => {
  await delay(300);
  return segments.find(s => s.id === id);
};

export const getCoursesBySegment = async (segmentId: string): Promise<Course[]> => {
  await delay(300);
  return courses.filter(c => c.segmentId === segmentId);
};

export const getCourseById = async (id: string): Promise<Course | undefined> => {
  await delay(300);
  return courses.find(c => c.id === id);
};

export const getCourseModules = async (courseId: string): Promise<Module[]> => {
  await delay(300);
  return courseModules[courseId] || [];
};

export const getProjects = async (segmentFilter?: string): Promise<Project[]> => {
  await delay(300);
  if (segmentFilter) {
    return projects.filter(p => p.segmentId === segmentFilter);
  }
  return projects;
};

export const getLearningCircles = async (districtFilter?: string): Promise<LearningCircle[]> => {
  await delay(300);
  if (districtFilter) {
    return learningCircles.filter(lc => lc.district === districtFilter);
  }
  return learningCircles;
};

export const getPartners = async (typeFilter?: string): Promise<Partner[]> => {
  await delay(300);
  if (typeFilter) {
    return partners.filter(p => p.type === typeFilter);
  }
  return partners;
};

export const getUserProgress = async (): Promise<UserProgress[]> => {
  await delay(300);
  return userProgress;
};

// Helper delay function
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
