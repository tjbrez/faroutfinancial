"use client";

import { useState } from "react";
import { TreePalm, Waves, SunMedium } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      toast.success("Right on! You're on the waitlist!");
      setEmail("");
    } catch (error) {
      console.error('Waitlist error:', error);
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/images/background.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff7e45]/30 to-[#2a9d8f]/30 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4 hidden">
            <Waves className="text-white w-8 h-8" />
            <SunMedium className="text-white w-10 h-10" />
            <TreePalm className="text-white w-8 h-8" />
          </div>
          <h1 className="font-pacifico text-7xl text-white mb-4 drop-shadow-lg">
            Far Out Financial
          </h1>
          <p className="font-poppins text-xl text-white/90 mb-8 drop-shadow-lg">
            Catch the three bucket strategy wave to financial freedom
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {[
            { num: "1", title: "Learn", desc: "Understand the three bucket strategy and why it might be the best way for you to manage saving and investing for your future." },
            { num: "2", title: "Apply", desc: "Put your knowledge into action and build your personal portfolio view. Gain deep insights into your curent financial situation." },
            { num: "3", title: "Adjust", desc: "Fine-tune your savings and investment strategy and run simulations to see how different decisions could impact your future." },
            { num: "4", title: "Automate", desc: "Let your money work for you. Build automations to ensure you're always on track and sticking to your plan. Sit back and relax." },
          ].map((step) => (
            <div
              key={step.num}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#ff7e45] to-[#2a9d8f] text-white text-lg font-bold mb-3">
                {step.num}
              </div>
              <h3 className="font-pacifico text-xl text-[#2a9d8f] mb-2">{step.title}</h3>
              <p className="font-poppins text-sm text-[#2a9d8f]/70">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Waitlist Section */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
            <h2 className="font-pacifico text-3xl text-[#2a9d8f] mb-4">
              Ride the Wave Early
            </h2>
            <p className="font-poppins text-[#2a9d8f]/70 mb-6">
              Join our waitlist to be the first to know when we launch
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-[#2a9d8f]/20 focus:border-[#2a9d8f] focus:ring-[#2a9d8f]"
                required
              />
              <Button 
                type="submit"
                className="bg-[#ff7e45] hover:bg-[#ff7e45]/90 text-white font-poppins"
              >
                Join Waitlist
              </Button>
            </form>
          </div>
          <div className="text-center mt-8 text-white/90">
            <div className="mr-4">Copyright © 2024 Far Out Financial LLC</div>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
