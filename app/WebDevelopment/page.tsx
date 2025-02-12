"use client"
import React, { useState, useEffect } from "react";
import ServicesLayout from "@/components/layout/sections/servicesLayout";
import { Server, Database, Cloud, Lock, Zap, Code, Workflow, Rocket, CheckCircle } from "lucide-react"

const page = () => {
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0)


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technology Stack",
      description:
        "We use cutting-edge technologies like React, Next.js, and Tailwind CSS to build modern, fast, and scalable web applications.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Work Flow",
      description:
        "Our agile workflow ensures continuous communication, rapid iterations, and efficient project management from start to finish.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Project Steps",
      description:
        "From initial concept to final deployment, we follow a structured approach to ensure your project is delivered on time and exceeds expectations.",
    },
  ]

  function TechnologyStack() {
    const technologies = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "GraphQL", "PostgreSQL"]

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white/10 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {tech}
          </div>
        ))}
      </div>
    )
  }

  function WorkFlow() {
    const steps = [
      "Requirements Gathering",
      "Planning & Design",
      "Development",
      "Testing & QA",
      "Deployment",
      "Maintenance & Support",
    ]

    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 animate-slideInFromLeft"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-8 h-8 bg-[#ea580c] rounded-full flex items-center justify-center">{index + 1}</div>
            <div>{step}</div>
          </div>
        ))}
      </div>
    )
  }

  function ProjectSteps() {
    const steps = [
      "Initial Consultation",
      "Project Proposal",
      "Contract & Agreement",
      "Project Kickoff",
      "Design Phase",
      "Development Sprints",
      "Client Reviews & Feedback",
      "Testing & Quality Assurance",
      "Final Approval",
      "Deployment",
      "Post-Launch Support",
    ]

    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CheckCircle className="w-6 h-6 text-[#ea580c]" />
            <div>{step}</div>
          </div>
        ))}
      </div>
    )
  }

  const technologies = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      techs: [
        {
          name: "React",
          description: "A JavaScript library for building user interfaces",
          features: ["Component-based", "Virtual DOM", "JSX syntax", "Hooks for state management"],
        },
        {
          name: "Next.js",
          description: "The React Framework for Production",
          features: ["Server-side rendering", "Static site generation", "API routes", "Code splitting"],
        },
        {
          name: "Tailwind CSS",
          description: "A utility-first CSS framework",
          features: ["Responsive design", "Customizable", "Low specificity", "JIT compiler"],
        },
        {
          name: "TypeScript",
          description: "A typed superset of JavaScript",
          features: ["Static typing", "Enhanced IDE support", "Early error detection", "Better refactoring"],
        },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      techs: [
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
          features: ["Event-driven", "Non-blocking I/O", "Large ecosystem (npm)", "Cross-platform"],
        },
        {
          name: "Express.js",
          description: "Fast, unopinionated, minimalist web framework for Node.js",
          features: ["Robust routing", "HTTP helpers", "Middleware support", "High performance"],
        },
      ],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      techs: [
        {
          name: "PostgreSQL",
          description: "Advanced open-source relational database",
          features: ["ACID compliance", "JSON support", "Full-text search", "Concurrent control"],
        },
        {
          name: "MongoDB",
          description: "Document-oriented NoSQL database",
          features: ["Flexible schema", "Scalability", "High performance", "Rich queries"],
        },
      ],
    },
    {
      category: "API",
      icon: <Cloud className="w-6 h-6" />,
      techs: [
        {
          name: "GraphQL",
          description: "A query language for your API",
          features: ["Declarative data fetching", "Single endpoint", "Strong typing", "Real-time with subscriptions"],
        },
        {
          name: "REST",
          description: "Representational State Transfer architectural style",
          features: ["Stateless", "Cacheable", "Uniform interface", "Layered system"],
        },
      ],
    },
    {
      category: "DevOps",
      icon: <Zap className="w-6 h-6" />,
      techs: [
        {
          name: "Docker",
          description: "Platform for developing, shipping, and running applications",
          features: [
            "Containerization",
            "Consistency across environments",
            "Isolation",
            "Version control for containers",
          ],
        },
        {
          name: "GitHub Actions",
          description: "Automate your workflow from idea to production",
          features: ["CI/CD", "Workflow automation", "Community-powered", "Built-in secret management"],
        },
      ],
    },
    {
      category: "Security",
      icon: <Lock className="w-6 h-6" />,
      techs: [
        {
          name: "JWT",
          description: "JSON Web Tokens for secure authentication",
          features: ["Stateless", "Compact", "Self-contained", "Digitally signed"],
        },
        {
          name: "HTTPS",
          description: "Hypertext Transfer Protocol Secure",
          features: ["Encryption", "Data integrity", "Authentication", "Trust signals (SSL certificates)"],
        },
      ],
    },
  ]
  const Worksteps = [
    {
      title: "1. Research & Planning",
      description:
        "Understanding client requirements, market analysis, and setting project goals to ensure a strong foundation.",
    },
    {
      title: "2. UI/UX Design",
      description:
        "Creating wireframes and prototypes with a focus on user experience, aesthetics, and brand consistency.",
    },
    {
      title: "3. Development",
      description:
        "Building the website using modern technologies, ensuring performance, security, and best coding practices.",
    },
    {
      title: "4. Testing & QA",
      description:
        "Conducting rigorous testing for responsiveness, cross-browser compatibility, and performance optimization.",
    },
    {
      title: "5. Deployment",
      description:
        "Launching the website on a secure server with SEO optimizations and analytics integration.",
    },
    {
      title: "6. Maintenance & Support",
      description:
        "Providing ongoing updates, security patches, and feature enhancements based on user feedback.",
    },
  ];

  return loading ? (
    <div className="flex justify-center items-center h-screen bg-[#0c0a09]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ea580c]"></div>
    </div>
  ) : (
    <>
      <ServicesLayout
        serviceName="Web Development"
        headLineFirst="Designed"
        headLineSecond="Your Digital Identity"
      />

      {/* How We Work Section */}
      <section className="bg-[#0c0a09] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white/5 p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeStep === index ? "border-2 border-[#ea580c]" : ""
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-[#ea580c]">{step.icon}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology Stack Section */}
      <section className="bg-[#0c0a09] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Our Technology Stack</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and efficient web applications. Our carefully
            selected tech stack ensures we deliver high-performance solutions tailored to your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg transition-all duration-300 hover:bg-white/10">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-[#ea580c]">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="border-t border-white/10 pt-4">
                      <h4 className="text-lg font-medium mb-2 text-[#ea580c]">{tech.name}</h4>
                      <p className="text-sm text-gray-300 mb-2">{tech.description}</p>
                      <ul className="list-disc list-inside text-sm text-gray-400">
                        {tech.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0c0a09] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ea580c]">
          Our Work Flow
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          A structured approach ensuring high-quality web solutions from start to finish.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Worksteps.map((step, index) => (
          <div
            key={index}
            className="bg-white text-[#0c0a09] p-6 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-[#ea580c]">
              {step.title}
            </h3>
            <p className="mt-2 text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>

    </>
  );
};


export default page;
