"use client"
import React, { useState, useEffect } from "react";
import ServicesLayout from "@/components/layout/sections/servicesLayout";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-[#0c0a09]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ea580c]"></div>
        </div>
      ) : (
        <ServicesLayout
          serviceName="UI/UX & Graphic Designs"
          headLineFirst="Designs"
          headLineSecond="That Make a Lasting Impression"
        />
      )
      }
    </div>
  )
}

export default Page
