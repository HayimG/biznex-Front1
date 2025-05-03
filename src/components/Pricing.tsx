import { CheckCircle, X, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Pricing = () => {
  const plans = [{
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out BizneX",
    features: ["300 Monthly Responses", "Basic Flow Templates", "Standard Customization", "Email Support", "Basic Analytics"],
    limitations: ["No Custom Domain", "No API Integrations"],
    popular: false
  }, {
    name: "Pro",
    price: "$39",
    period: "/month",
    description: "Best for professionals and growing teams",
    features: ["Unlimited Responses", "All Flow Templates", "Advanced Customization", "All Integrations", "Priority Support", "Advanced Analytics", "Custom Domain", "Custom CSS"],
    limitations: [],
    popular: true
  }, {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large teams with specific needs",
    features: ["Everything in Pro", "Custom Contracts", "Dedicated Account Manager", "SLA & Uptime Guarantee", "Premium Support", "Advanced Security", "Single Sign-On (SSO)", "Custom Integration Development"],
    limitations: [],
    popular: false
  }];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the Intersection Observer
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

    // Apply to all elements with pricing-animate class
    const animatedElements = document.querySelectorAll(".pricing-animate");
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <section id="pricing" className="bg-gray-50 py-[10px]">
      <div className="container-section">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          <div className="text-center max-w-3xl mx-auto mb-16 pricing-animate animate-fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="inline-block rounded-full bg-biznex-primary/10 px-3 py-1 text-biznex-primary text-sm font-medium mb-4">
              PRICING PLANS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, <span className="heading-gradient relative">
                Transparent Pricing 
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                  <path className="animate-draw-line" d="M2 10C50 2 150 2 298 10" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span> for Teams of All Sizes
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the perfect plan for your needs. No hidden fees or surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-8 border transition-all duration-300 pricing-animate ${
                  index === 0 ? 'animate-fade-in-right' : index === 2 ? 'animate-fade-in-left' : 'animate-scale-in'
                } relative ${plan.popular ? "border-biznex-blue shadow-lg" : "border-gray-200 hover:border-gray-300 hover:shadow"}`} 
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Popular Badge - Positioned above the card top */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-biznex-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold h-16 flex items-center">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <li key={`lim-${i}`} className="flex items-start opacity-70">
                      <X className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Single consolidated CTA button below all plans */}
          <div className="max-w-md mx-auto text-center pricing-animate animate-fade-in-up" style={{ transitionDelay: '700ms' }}>
            <Button 
              className="w-full bg-gradient-to-r from-biznex-navy to-biznex-blue text-white h-12 rounded-full group relative overflow-hidden hover:shadow-[0_0_30px_rgba(62,146,204,0.6)] transition-all duration-500"
              redirectUrl="https://app.biznex.io/register"
            >
              {/* Animated glow effect */}
              <span className="absolute inset-0 bg-white/5 animate-pulse-slow"></span>
              
              {/* Moving light effect on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine"></span>
              
              <span className="relative flex items-center justify-center">
                <Zap size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                Get Started with BizneX
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </span>
            </Button>
            <p className="text-gray-500 mt-4">No credit card required for Free plan</p>
          </div>
        </div>
      </div>
    </section>;
};

export default Pricing;
