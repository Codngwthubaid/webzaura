"use client"
import React from "react";
import { Server, Database, Code } from "lucide-react";
import { useTheme } from "next-themes";
const ServicesTechStackLayout = () => {
  const { theme } = useTheme();

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
        {
          name: "NeonDB",
          description: "Automatically scale resources according to load",
          features: ["On-demand scaling", "Cost-effectiveness", "Resource and cost control", "No manual intervention or restarts"],
        },
        {
          name: "PrismaORM",
          description: "Object Relational Mapper (ORM) that helps developers work with databases",
          features: ["Prisma Schema", "Prisma Migrate", "Type safety", "Database migrations", "Real-time data", "Pagination"],
        },
      ],
    },
  ]

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#ea580c] text-center">Our Technology Stack</h2>
        <p className={`text-lg text-center mb-12 max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
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

  )
}

export default ServicesTechStackLayout
