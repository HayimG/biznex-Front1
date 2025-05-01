
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
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
    // Initialize the Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Apply to all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
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
    setIsLoading(true);
    
    if (!window.Paddle) {
      toast({
        title: "שגיאה",
        description: "טוען את Paddle... נסה שוב בעוד רגע",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    try {
      // Use Paddle's direct checkout instead of API call to avoid CORS issues
      window.Paddle.Checkout.open({
        settings: {
          displayMode: "overlay",
          theme: "light",
          locale: "he",
        },
        items: [{
          priceId: "pri_01jt60bbz9ne82q0t71eg43vn1", 
          quantity: 1
        }],
        customer: {
          email: "test@example.com"
        },
        customData: {
          userId: "cl_test_123"
        },
        successUrl: "https://app.biznex.io/subscription/success"
      });
      console.log("Paddle checkout opened");
    } catch (error) {
      console.error("Error opening Paddle checkout:", error);
      toast({
        title: "שגיאה",
        description: "לא הצלחנו לפתוח את טופס התשלום",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <section className="py-16 bg-gray-50">
          <div className="container-section text-center">
            <h2 className="text-3xl font-bold mb-4 text-right">הצטרף לשירות Biznex</h2>
            <p className="text-lg mb-6 text-right">מנוי חודשי ב-$19.90 בלבד</p>
            <Button 
              onClick={openCheckout}
              className="btn-primary text-lg"
              disabled={isLoading}
            >
              {isLoading ? "טוען..." : "התחל מנוי"}
            </Button>
          </div>
        </section>
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
