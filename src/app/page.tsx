"use client";
import {Header} from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import {TapeSection } from '@/sections/Tape'
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import LogRocket from 'logrocket';



// import { useEffect } from "react";
export default function Home() {
  if (process.env.NODE_ENV === 'production') {
    LogRocket.init('YOUR_APP_ID'); // Replace 'YOUR_APP_ID' with your actual LogRocket app ID
  }
  // useEffect(() =>{
  //   if (process.env.NODE_ENV ===  'production') {
  //     LogRocket.init('YOUR_APP_ID');
  //   }
  // }, []);
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
