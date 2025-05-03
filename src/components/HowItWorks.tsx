
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HowItWorks = () => {
  const steps = [{
    number: "1",
    title: "Choose Your Starting Point",
    description: "Begin with a template designed for your use case, or start from scratch with our intuitive visual builder.",
    image: "public/lovable-uploads/186c78d9-7857-4492-86cd-645865a19035.png"
  }, {
    number: "2",
    title: "Customize Your Flow",
    description: "Drag-and-drop elements, add logic, connect your tools, and personalize the look and feel to match your brand.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  }, {
    number: "3",
    title: "Publish & Convert",
    description: "Embed on your website, share via link, or deploy as a popup. Then watch the results roll in through your dashboard.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  }, {
    number: "4",
    title: "Track & Optimize",
    description: "Monitor performance in real time. See user inputs, engagement levels, and completion rates to refine your flows and boost results.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
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
    const animatedElements = document.querySelectorAll(".how-it-works-animate");
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  return <section id="how-it-works" className="bg-gray-50 py-[5px]">
      <div className="container-section">
        {/* Main frame containing both text and content */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          <div className="text-center max-w-3xl mx-auto mb-16 how-it-works-animate animate-fade-in-up" style={{ transitionDelay: '100ms' }}>
            <p className="text-biznex-blue font-medium tracking-wider mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build Powerful Flows <span className="heading-gradient">in Minutes</span> - No Code Needed
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you're starting from a template or building from scratch, BizneX makes it easy to go live with AI-powered conversations in just a few clicks.
            </p>
          </div>

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
              >
                <div className={`flex-1 space-y-6 how-it-works-animate ${index % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left'}`} 
                     style={{ transitionDelay: `${200 + (index * 100)}ms` }}
                >
                  <div className="inline-block py-1 px-3 rounded-full bg-biznex-navy text-white font-semibold">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
                
                <div className={`flex-1 how-it-works-animate animate-scale-in`} style={{ transitionDelay: `${300 + (index * 100)}ms` }}>
                  <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg">
                    <AspectRatio ratio={3/2} className="bg-gray-100">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 how-it-works-animate animate-fade-in-up" style={{ transitionDelay: '700ms' }}>
            <Button 
              className="bg-gradient-to-r from-biznex-navy to-biznex-blue text-white px-8 py-4 h-12 rounded-full group relative overflow-hidden hover:shadow-[0_0_30px_rgba(62,146,204,0.6)] transition-all duration-500"
              onClick={() => window.location.href = "https://app.biznex.io"}
            >
              {/* Animated glow effect */}
              <span className="absolute inset-0 bg-white/5 animate-pulse-slow"></span>
              
              {/* Moving light effect on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine"></span>
              
              <span className="relative flex items-center">
                See BizneX in Action
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;
