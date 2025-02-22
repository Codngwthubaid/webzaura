"use client"
import { ContactSection } from '@/components/layout/sections/contact'
import { FooterSection } from '@/components/layout/sections/footer'
import { TeamSection } from '@/components/layout/sections/team'
import React from 'react'

const Page = () => {
  return (
    <div>
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default Page
