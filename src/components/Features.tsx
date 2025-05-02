
import { CheckCircle, Code, Zap, Users, Database, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Features = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleItems(prev => [...prev, index]);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    // Apply to all elements with animation classes in this component
    const animatedElements = document.querySelectorAll(".features-animate, .feature-card-container");
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  const features = [{
    icon: <MessageSquare className="h-12 w-12 text-biznex-primary" />,
    title: "Visual Flow Builder",
    description: "Create interactive conversational experiences with our intuitive drag-and-drop builder, no coding required."
  }, {
    icon: <Zap className="h-12 w-12 text-biznex-accent" />,
    title: "Logic Branching",
    description: "Design complex conversation flows with conditional logic and dynamic content based on user responses."
  }, {
    icon: <Database className="h-12 w-12 text-biznex-secondary" />,
    title: "Data Collection",
    description: "Capture and store user responses securely with customizable forms and database integration."
  }, {
    icon: <Code className="h-12 w-12 text-biznex-navy" />,
    title: "API Integration",
    description: "Connect to any third-party service with webhooks and API integrations to extend functionality."
  }, {
    icon: <Users className="h-12 w-12 text-biznex-blue" />,
    title: "Team Collaboration",
    description: "Work together with your team on flow design, testing, and deployment with real-time collaboration."
  }, {
    icon: <CheckCircle className="h-12 w-12 text-biznex-secondary" />,
    title: "Analytics Dashboard",
    description: "Gain insights from user interactions with comprehensive analytics and conversion tracking."
  }];
  
  return <section id="features" className="relative overflow-hidden bg-gray-50 py-[10px]">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-biznex-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-biznex-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-section">
        {/* Main frame containing both text and cards */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          {/* Header text section */}
          <div className="text-center max-w-3xl mx-auto mb-10 features-animate animate-fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="inline-block rounded-full bg-biznex-primary/10 px-3 py-1 text-biznex-primary text-sm font-medium mb-4">
              POWERFUL FEATURES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
              Everything You Need to Build{" "}
              <span className="heading-gradient relative">
                Exceptional Conversational Flows
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                  <path className="animate-draw-line" d="M2 10C50 2 150 2 298 10" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              BizneX provides all the tools you need to design, build, and deploy interactive conversation flows without any coding.
            </p>
          </div>

          {/* Main features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-container h-full features-animate animate-fade-in-up" data-index={index} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                <Card className={`feature-card h-full rounded-2xl bg-white shadow-md border border-gray-100 hover:border-biznex-primary/30 transition-all duration-500 ${visibleItems.includes(index) ? 'opacity-100' : 'opacity-0 scale-95'}`}>
                  <CardHeader>
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-biznex-primary/20 to-biznex-secondary/20 rounded-full blur-xl opacity-70"></div>
                      <div className="relative bg-white p-3 rounded-full inline-flex items-center justify-center border border-gray-100 shadow-sm">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold group">
                      {feature.title}
                      <span className="block w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-biznex-primary to-biznex-secondary transition-all duration-300"></span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default Features;
