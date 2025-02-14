"use client"
import React, { useState, useEffect } from "react";
import ServicesLayout from "@/components/layout/sections/servicesLayout";
import { Server, Database, Cloud, Lock, Zap, Code} from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { FooterSection } from "@/components/layout/sections/footer";
import { useTheme } from "next-themes";


const Page = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
  const webDevelopmentPlans = [
    {
      title: "Basic",
      popular: 0,
      price: 179,
      description: "A perfect plan for small businesses and startups.",
      buttonText: "Buy Now",
      benefitList: [
        "3 team members",
        "5 GB storage",
        "Upto 5 Pages",
        "Community support",
        "Basic SEO",
      ],
    },
    {
      title: "Enterprise",
      popular: 1,
      price: 299,
      description: "Best for growing businesses.",
      buttonText: "Buy Now",
      benefitList: [
        "6 team members",
        "15 GB storage",
        "Upto 10 Pages",
        "Priority support",
        "Advanced SEO",
      ],
    },
    {
      title: "Advanced",
      popular: 0,
      price: 599,
      description: "A perfect plan for small businesses and startups.",
      buttonText: "Buy Now",
      benefitList: [
        "3 team members",
        "5 GB storage",
        "Upto 5 Pages",
        "Community support",
        "Basic SEO",
      ],
    },
  ];
  return loading ? (
    <div className={`flex justify-center items-center h-screen bg-[#0c0a09] ${theme === "dark" ? "bg-[#0c0a09]" : "bg-white"}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ea580c]"></div>
    </div>
  ) : (
    <>
      <ServicesLayout
        serviceName="Web Development"
        headLineFirst="Designed"
        headLineSecond="Your Digital Identity"
      />

      <section className={`bg-[#0c0a09] text-white py-16 px-6 md:px-12 lg:px-24 container mx-auto p-6 transition-all ${theme === "dark" ? "bg-[#0c0a09] border-gray-700" : "bg-white border-gray-300"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#ea580c]">
            Our Work Flow
          </h2>
          <p className={`mt-4 text-lg text-gray-300 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          A structured approach to web development ensures high-quality web solutions from the initial planning stages to the final deployment and maintenance, focusing on organization, user experience, and clear objectives. This involves a systematic methodology that incorporates key elements such as defining goals, planning site structure, and employing agile practices. By prioritizing these aspects, developers can create websites that are both effective and user-friendly
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Worksteps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 text-white p-6 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-[#ea580c]">
                {step.title}
              </h3>
              <p className={`mt-2 text-white ${theme === "dark" ? "text-gray-300" : "text-black"}`}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`bg-[#0c0a09] text-white py-16 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#ea580c] text-center">Our Technology Stack</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and efficient web applications. Our carefully
            selected tech stack ensures we deliver high-performance solutions tailored to your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className={`bg-white/5 p-6 rounded-lg transition-all duration-300 hover:bg-white/10`}>
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-[#ea580c]">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <div key={techIndex} className={`border-t border-white/10 pt-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                      <h4 className="text-lg font-medium mb-2 text-[#ea580c]">{tech.name}</h4>
                      <p className="text-sm  mb-2">{tech.description}</p>
                      <ul className="list-disc list-inside text-sm">
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
      <section className="container py-24 sm:py-32 relative px-10 mx-auto">
      {[{ category: "Web Development", plans: webDevelopmentPlans }].map(({ category, plans }) => (
        <div key={category} className="mt-2">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea580c]">Pricing</h2>
          <h3 className="text-xl text-muted-foreground pb-4 mb-4">Choose the perfect plan for your needs.</h3>
        </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map(({ title, popular, price, description, buttonText, benefitList }) => (
              <Card
                key={title}
                className={`mb-20 ${popular === 1
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary transition-all hover:lg:scale-[1.1]"
                  : ""}`}
              >
                <CardHeader>
                  <CardTitle className="pb-2">{title}</CardTitle>
                  <CardDescription className="pb-4">{description}</CardDescription>
                  <div>
                    <span className="text-2xl font-bold">Starts from / </span>
                    <span className="text-3xl font-bold">${price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {benefitList.map((benefit) => (
                      <span key={benefit} className="flex">
                        <Check className="text-primary mr-2" />
                        <h3>{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={popular === 1 ? "default" : "secondary"}
                    className="w-full"
                  >
                    <Link href={"#contact"}>{buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
    <FooterSection />

    </>
  );
};


export default Page;
