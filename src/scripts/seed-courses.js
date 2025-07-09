// Seed script to populate sample courses data
async function seedCourses() {
  const courses = [
    {
      title: "Complete React Developer Course",
      description: "Learn React from scratch and become a professional React developer. Build real-world projects and master modern React patterns.",
      price: 79.99,
      category: "Web Development",
      level: "intermediate",
      duration: 480,
      studentsCount: 2150,
      rating: 4.7,
      reviewsCount: 342,
      tags: ["React", "JavaScript", "Frontend", "Web Development"],
      publishedAt: new Date()
    },
    {
      title: "Python Data Science Bootcamp",
      description: "Master Python for data science with pandas, numpy, matplotlib, and machine learning. Perfect for beginners.",
      price: 89.99,
      category: "Data Science",
      level: "beginner",
      duration: 600,
      studentsCount: 1876,
      rating: 4.6,
      reviewsCount: 298,
      tags: ["Python", "Data Science", "Machine Learning", "Pandas"],
      publishedAt: new Date()
    },
    {
      title: "UI/UX Design Masterclass",
      description: "Learn professional UI/UX design principles, tools, and workflows. Create stunning designs that users love.",
      price: 69.99,
      category: "Design",
      level: "intermediate",
      duration: 360,
      studentsCount: 1432,
      rating: 4.8,
      reviewsCount: 201,
      tags: ["UI/UX", "Design", "Figma", "Adobe XD"],
      publishedAt: new Date()
    },
    {
      title: "Digital Marketing Strategy",
      description: "Master digital marketing with SEO, social media, content marketing, and analytics. Grow your online presence.",
      price: 59.99,
      category: "Marketing",
      level: "beginner",
      duration: 300,
      studentsCount: 1098,
      rating: 4.5,
      reviewsCount: 156,
      tags: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
      publishedAt: new Date()
    },
    {
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js, Express, and MongoDB. Learn REST APIs and authentication.",
      price: 74.99,
      category: "Web Development",
      level: "intermediate",
      duration: 420,
      studentsCount: 987,
      rating: 4.6,
      reviewsCount: 124,
      tags: ["Node.js", "Express", "MongoDB", "Backend"],
      publishedAt: new Date()
    },
    {
      title: "Business Strategy Fundamentals",
      description: "Learn essential business strategy concepts, market analysis, and strategic planning for business success.",
      price: 49.99,
      category: "Business",
      level: "beginner",
      duration: 240,
      studentsCount: 856,
      rating: 4.4,
      reviewsCount: 98,
      tags: ["Business Strategy", "Management", "Planning", "Analysis"],
      publishedAt: new Date()
    },
    {
      title: "Professional Photography Course",
      description: "Master photography techniques, composition, lighting, and post-processing. Perfect for aspiring photographers.",
      price: 64.99,
      category: "Photography",
      level: "beginner",
      duration: 330,
      studentsCount: 743,
      rating: 4.7,
      reviewsCount: 87,
      tags: ["Photography", "Lightroom", "Composition", "Editing"],
      publishedAt: new Date()
    },
    {
      title: "Advanced JavaScript Concepts",
      description: "Deep dive into advanced JavaScript topics including closures, prototypes, async programming, and ES6+ features.",
      price: 84.99,
      category: "Web Development",
      level: "advanced",
      duration: 540,
      studentsCount: 654,
      rating: 4.8,
      reviewsCount: 76,
      tags: ["JavaScript", "ES6", "Advanced", "Programming"],
      publishedAt: new Date()
    }
  ];

  return courses;
}

module.exports = { seedCourses };
