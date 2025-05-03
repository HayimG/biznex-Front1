
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import WhyBizneX from "../components/WhyBizneX";
import Showcase from "../components/Showcase";
import SocialProof from "../components/SocialProof";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LaunchCTA from "../components/LaunchCTA";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

declare global {
  interface Window {
    Paddle: any;
  }
}

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Force HTTPS for all users
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.href = window.location.href.replace('http:', 'https:');
      return;
    }

    // Initialize the Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          // Don't unobserve to allow re-animation when scrolling back
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    // Apply to all elements with animate classes
    const animationClasses = [
      '.animate-fade-in-up', 
      '.animate-fade-in-right', 
      '.animate-fade-in-left', 
      '.animate-scale-in'
    ];
    
    animationClasses.forEach(className => {
      const elements = document.querySelectorAll(className);
      elements.forEach(el => {
        observerRef.current?.observe(el);
      });
    });

    // Initialize Paddle
    const loadPaddle = () => {
      if (window.Paddle) {
        // Paddle already loaded
        return;
      }
      const paddleScript = document.createElement("script");
      paddleScript.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
      paddleScript.async = true;
      paddleScript.onload = () => {
        if (window.Paddle) {
          window.Paddle.Environment.set("sandbox");
          window.Paddle.Initialize({
            token: "test_8fbad8c60f6bf12f38699401c64"
          });
          console.log("Paddle initialized successfully");
        }
      };
      document.head.appendChild(paddleScript);
    };
    loadPaddle();
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const openCheckout = () => {
    window.location.href = "https://app.biznex.io/register";
  };

  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="use-cases">
          <UseCases />
        </section>
        <section id="how-it-works">
          <Showcase />
        </section>
        <LaunchCTA />
        <section id="social-proof">
          <SocialProof />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>;
};

export default Index;
