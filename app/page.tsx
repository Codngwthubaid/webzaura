"use client";
import React from "react";
import { Home } from "@/components/Home";
import { Navbar } from "@/components/navbar";
import { createBrowserRouter, RouterProvider, Router as ReactRouter } from "react-router-dom";
import { WebDevelopment } from "@/components/webDevelopment";
import { AppDevelopment } from "@/components/appDevelopment";
import { SocialMediaManagement } from "@/components/socialMediaManagement";
import { AiChatBot } from "@/components/aiChatbot";
import { UIUXGD } from "@/components/uiuxGD";
import { DigitalMarketing } from "@/components/digitalMarketing";

const Page = () => {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/webDevelopment",
        element: <WebDevelopment />,
      },
      {
        path: "/appDevelopment",
        element: <AppDevelopment />,
      },
      {
        path: "/socialMediaManagement",
        element: <SocialMediaManagement />,
      },
      {
        path: "/aiChatbot",
        element: <AiChatBot />,
      },
      {
        path: "/uiuxGD",
        element: <UIUXGD />,
      },
      {
        path: "/digitalMarketing",
        element: <DigitalMarketing />,
      },
    ]);

  return (
    <>
      <Navbar />
      <main className="mx-auto container">
        <RouterProvider router={router} />
      </main>
    </>
  );
};

export default Page;