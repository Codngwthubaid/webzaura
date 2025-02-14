"use client"
import React from "react";
import { useTheme } from "next-themes";

const ServicesWorkFLowLayout = (
  {
    wst1, wst2, wst3, wst4, wst5, wst6, wsd1, wsd2, wsd3, wsd4, wsd5, wsd6, desc
  }: {
    wst1: string, wst2: string, wst3: string, wst4: string, wst5: string, wst6: string, wsd1: string, wsd2: string, wsd3: string, wsd4: string, wsd5: string, wsd6: string, desc: string
  }
) => {
  const { theme } = useTheme();

  const Worksteps = [
    {
      title: wst1,
      description: wsd1
    },
    {
      title: wst2,
      description: wsd2
    },
    {
      title: wst3,
      description: wsd3
    },
    {
      title: wst4,
      description: wsd4
    },
    {
      title: wst5,
      description: wsd5
    },
    {
      title: wst6,
      description: wsd6
    },
  ];

  return (
    <section className={`text-white py-16 px-6 md:px-12 lg:px-24 container mx-auto p-6 transition-all ${theme === "dark" ? "bg-[#0c0a09] border-gray-700" : "bg-white border-gray-300"}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ea580c]">
          Our Work Flow
        </h2>
        <p className={`mt-4 text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          {desc}
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
            <p className={`mt-2 ${theme === "dark" ? "text-gray-300" : "text-black"}`}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesWorkFLowLayout
