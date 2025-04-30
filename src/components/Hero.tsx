
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 -right-10 w-72 h-72 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
      </div>

      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-biznex-purple font-medium tracking-wider mb-3 animate-fade-in">
            BUILD INTERACTIVE CONVERSATION FLOWS
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Create Engaging <span className="heading-gradient">Conversational Experiences</span> Without Coding
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
            Build interactive flows, collect data, automate processes, and engage users with a powerful drag-and-drop builder. Trusted by 10,000+ businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button size="lg" className="btn-primary group">
              Start Building for Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="btn-outline">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <div className="p-4">
              <p className="text-3xl font-bold text-biznex-purple">10,000+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-biznex-purple">5M+</p>
              <p className="text-gray-600">Conversations</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-biznex-purple">99.9%</p>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto animate-fade-in">
          <div className="gradient-border card-shadow overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="BizneX Flow Builder Platform" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
