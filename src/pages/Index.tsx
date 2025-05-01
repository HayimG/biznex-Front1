
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Paddle: any;
  }
}

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

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
    const paddleScript = document.createElement("script");
    paddleScript.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    paddleScript.async = true;
    paddleScript.onload = () => {
      if (window.Paddle) {
        window.Paddle.Environment.set("sandbox");
        window.Paddle.Initialize({
          token: "test_8fbad8c60f6bf12f38699401c64"
        });
      }
    };
    document.head.appendChild(paddleScript);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // Remove the paddle script if component unmounts
      document.querySelectorAll('script[src="https://cdn.paddle.com/paddle/v2/paddle.js"]')
        .forEach(script => script.remove());
    };
  }, []);

  const openPaddleOverlay = async () => {
    try {
      const response = await fetch("https://api.sandbox.paddle.com/checkout-sessions", {
        method: "POST",
        headers: {
          Authorization: "5b31cdfda85c98b9503dadb70b693c3811d5dd7800fcd752b2",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          customer_email: "test@example.com",
          price_id: "pri_01jt60bbz9ne82q0t71eg43vn1",
          passthrough: {
            userId: "cl_test_123"
          },
          return_url: "https://app.biznex.io/subscription/success"
        })
      });

      const data = await response.json();

      if (data?.data?.url && window.Paddle) {
        window.Paddle.Checkout.open({ url: data.data.url });
      } else {
        console.error("Paddle error response:", data);
        alert("שגיאה: לא הצלחנו לפתוח את טופס התשלום.");
      }
    } catch (error) {
      console.error("Error opening Paddle checkout:", error);
      alert("שגיאה בפתיחת טופס התשלום.");
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
              onClick={openPaddleOverlay}
              className="btn-primary text-lg"
            >
              התחל מנוי
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
