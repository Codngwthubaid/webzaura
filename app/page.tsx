"use client";
import React, { useEffect, useState } from 'react';
import { Home } from '@/components/Home';
import { WebDevelopment } from '@/components/webDevelopment';
import { AppDevelopment } from '@/components/appDevelopment';
import { DigitalMarketing } from '@/components/digitalMarketing';
import { SocialMediaManagement } from '@/components/socialMediaManagement';
import { AiChatBot } from '@/components/aiChatbot';
import { UIUXGD } from '@/components/uiuxGD';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from '@/components/navbar';

const Page = () => {
  const [router, setRouter] = useState<any>(null);

  useEffect(() => {
    // This code will only run on the client side
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
        path: "/digitalMarketing",
        element: <DigitalMarketing />,
      },
      {
        path: "/uiuxGD",
        element: <UIUXGD />,
      },
      {
        path: "/aiChatBot",
        element: <AiChatBot />,
      },
    ]);

    setRouter(router);
  }, []);

  if (!router) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default Page;