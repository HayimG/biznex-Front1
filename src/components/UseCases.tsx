
import { ArrowRight, Calendar, Star, Users, Zap, CheckCircle, CircleDollarSign, FileText, LayoutList, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const UseCases = () => {
  const useCases = [{
    title: "Lead Generation & Qualification",
    description: "Capture leads with smart, engaging flows that ask the right questions and score automatically.",
    stats: "Users report 3x more qualified leads",
    icon: Users,
    color: "bg-blue-500"
  }, {
    title: "Product Quizzes & Estimators",
    description: "Help users discover the right plan, service, or product — with interactive logic and instant results.",
    icon: LayoutGrid,
    color: "bg-purple-500"
  }, {
    title: "Meeting Booking with Lead Capture",
    description: "Connect Calendly and qualify leads before they book. Fewer no-shows, better-fit calls.",
    icon: Calendar,
    color: "bg-green-500"
  }, {
    title: "AI-Powered Chat Experiences",
    description: "Build GPT-like conversations that guide, recommend, or answer — 24/7, branded, and personalized.",
    icon: Zap,
    color: "bg-amber-500"
  }, {
    title: "Customer Support & FAQs",
    description: "Reduce support load with conversational flows that resolve common issues automatically.",
    stats: "Cut support tickets by 35%",
    icon: CheckCircle,
    color: "bg-indigo-500"
  }, {
    title: "Digital Product Checkout",
    description: "Sell digital goods or services directly inside the chat — with Stripe or Paddle integration.",
    icon: CircleDollarSign,
    color: "bg-pink-500"
  }, {
    title: "Surveys, Feedback & NPS",
    description: "Collect insights that actually get completed — through smooth, interactive flows.",
    icon: FileText,
    color: "bg-cyan-500"
  }, {
    title: "Onboarding & Internal Use",
    description: "Create onboarding assistants, internal help bots, or interactive SOPs for your team.",
    icon: LayoutList,
    color: "bg-orange-500"
  }];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    // Apply to all elements with animation classes in this component
    const animatedElements = document.querySelectorAll(".use-cases-animate");
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <section id="use-cases" className="bg-gray-50 py-[10px]">
      <div className="container-section">
        {/* Main frame containing both text and cards */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          <div className="text-center max-w-3xl mx-auto mb-16 use-cases-animate animate-fade-in-up" style={{ transitionDelay: '100ms' }}>
            <p className="text-biznex-blue font-medium tracking-wider mb-3">USE CASES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Whatever Your Goal — <span className="heading-gradient">There's a Flow for That</span>
            </h2>
            <p className="text-gray-600 text-lg">
              From startups to scaleups, BizneX powers conversations that generate leads, close sales, support customers, and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 group use-cases-animate animate-scale-in" 
                style={{ transitionDelay: `${200 + (index * 50)}ms` }}
              >
                <div className={`${useCase.color} text-white p-3 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-3">{useCase.description}</p>
                {useCase.stats && <div className="bg-gray-50 rounded-lg py-2 px-3 text-sm font-medium text-gray-700">
                    {useCase.stats}
                  </div>}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 use-cases-animate animate-fade-in-up" style={{ transitionDelay: '700ms' }}>
            <Button className="btn-outline group">
              Explore All Use Cases
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default UseCases;
