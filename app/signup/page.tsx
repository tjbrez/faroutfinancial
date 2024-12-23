"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SignUp() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create user account
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to create account');
      }

      // Redirect to Stripe checkout
      const stripeResponse = await fetch('/api/stripe', {
        method: 'POST',
      });

      const { url } = await stripeResponse.json();
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6">
      <h1 className="text-3xl font-bold mb-8">Create Your Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            value={email || ''}
            disabled
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            required
            minLength={8}
          />
        </div>
        <Button type="submit" className="w-full">
          Continue to Payment
        </Button>
      </form>
    </div>
  );
}
