"use client";

import { useState } from "react";
import { TreePalm, Waves, SunMedium } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [email, setEmail] = useState("");
  const [isExistingUser, setIsExistingUser] = useState<boolean | null>(null);
  const searchParams = useSearchParams();
  const isApp = searchParams.get('app');
  console.log("isApp: ", isApp);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      if (isApp) {
        // Check if user exists
        const response = await fetch('/api/auth/check-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        
        if (data.exists) {
          // Redirect to login page with email pre-filled
          window.location.href = `/login?email=${encodeURIComponent(email)}`;
        } else {
          // Redirect to signup/stripe page with email pre-filled
          window.location.href = `/signup?email=${encodeURIComponent(email)}`;
        }
      } else {
        // Existing waitlist logic
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
      }
    } catch (error) {
      console.error(isApp ? 'Email check error:' : 'Waitlist error:', error);
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
          <h1 className="font-original-surfer text-7xl text-white mb-4 drop-shadow-lg">
            Far Out Financial
          </h1>
          <p className="font-poppins text-xl text-white/90 mb-8 drop-shadow-lg">
            Catch the "Three Bucket Strategy" wave to financial freedom
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {[
            { num: "1", title: "Learn", desc: "Dive into the Three Bucket Strategy and discover why it might be the ultimate approach to managing your savings and investments. Surf through essential insights to set the foundation for a bright financial future." },
            { num: "2", title: "Apply", desc: "Turn your newfound knowledge into action by building your personal portfolio view. Gain deep insights into your current financial situation and apply the Three Bucket Strategy to your own financial plan." },
            { num: "3", title: "Adjust", desc: "Perfect your savings and investment strategy with ease. Run simulations and set goals to see how different decisions can ripple through your future, ensuring you stay on course for your financial dreams." },
            { num: "4", title: "Automate", desc: "Set your finances to autopilot and watch your money work for you. Create seamless automations to keep you on track and sticking to your plan, so you can relax and enjoy the sunny vibes." },
          ].map((step) => (
            <div
              key={step.num}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#ff7e45] to-[#2a9d8f] text-white text-lg font-bold mb-3">
                {step.num}
              </div>
              <h3 className="font-original-surfer text-xl text-[#2a9d8f] mb-2">{step.title}</h3>
              <p className="font-poppins text-sm text-[#2a9d8f]/70">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Waitlist Section */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
            <h2 className="font-original-surfer text-3xl text-[#2a9d8f] mb-4">
              {isApp ? 'Create Your Account' : 'Ride the Wave Early'}
            </h2>
            <p className="font-poppins text-[#2a9d8f]/70 mb-6">
              {isApp 
                ? 'Start your journey to financial freedom.' 
                : 'Join our waitlist to be the first to know when we launch'}
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-[#2a9d8f]/20 focus:border-[#2a9d8f] focus:ring-[#2a9d8f]"
                required
              />
              <Button 
                type="submit"
                className="bg-[#ff7e45] hover:bg-[#ff7e45]/90 text-white font-poppins"
              >
                {isApp ? 'Get Started' : 'Join Waitlist'}
              </Button>
            </form>
            <p className="font-poppins text-[#777]/70 mt-6">
              {isApp 
                ? 'Already have an account? We\'ll sign you in.' 
                : ''}
            </p>
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
