"use client"
import React from 'react'
import { AiChatBot } from '@/components/aiChatbot/page'
import { AppDevelopment } from '@/components/appDevelopment/page'
import { DigitalMarketing } from '@/components/digitalMarketing/page'
import { SocialMediaManagement } from '@/components/socialMediaManagement'
import { UIUXGD } from '@/components/uiuxGD'
import { WebDevelopment } from '@/components/webDevelopment'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from '@/components/Home'
import { Navbar } from '@/components/navbar'

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
    path: "/smManagement",
    element: <SocialMediaManagement />,
  },
  {
    path: "/aiChatbot",
    element: <AiChatBot />,
  },
  {
    path: "/uiuxGD",
    element: <UIUXGD />
  },
  {
    path: "/digitalMarketing",
    element: <DigitalMarketing />
  }
])


const page = () => {
  return (
    <>
      <main className='mx-auto container'>
        <Navbar />
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default page
