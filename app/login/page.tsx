"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

export default function Login() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid credentials. Please try again.");
        return;
      }

      // Check subscription status
      const response = await fetch('/api/auth/check-subscription');
      const { hasActiveSubscription } = await response.json();

      if (!hasActiveSubscription) {
        // Redirect to Stripe if no active subscription
        const stripeResponse = await fetch('/api/stripe', {
          method: 'POST',
        });

        const { url } = await stripeResponse.json();
        if (url) {
          window.location.href = url;
        }
      } else {
        // Redirect to dashboard if they have an active subscription
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      <div className="mt-4 text-center">
        <a 
          href="/forgot-password" 
          className="text-gray-600 hover:text-gray-800 text-sm"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
}