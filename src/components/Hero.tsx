
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-biznex-blue/10 rounded-full opacity-70 blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-purple-100 rounded-full opacity-60 blur-[80px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-100/50 rounded-full opacity-50 blur-[60px]"></div>
        <div className="absolute top-64 right-1/4 w-8 h-8 bg-biznex-blue rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-1/3 w-6 h-6 bg-purple-400 rounded-full opacity-40"></div>
        <div className="absolute top-96 left-1/2 w-4 h-4 bg-biznex-navy rounded-full opacity-60"></div>
      </div>

      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-biznex-navy/10 border border-biznex-navy/20 rounded-full animate-fade-in">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-biznex-navy to-biznex-blue border border-white"
                ></div>
              ))}
            </div>
            <span className="text-sm font-semibold text-biznex-navy">BUILD INTERACTIVE CONVERSATION FLOWS</span>
          </div>

          {/* Enhanced Headline with Bigger Font and Animation */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight tracking-tight">
            Smarter Conversations. <br />
            <span className="heading-gradient">Limitless Use Cases.</span> <br />
            <span className="relative">
              One Platform.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C50 2 150 2 298 10" stroke="#3E92CC" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-10 animate-fade-in leading-relaxed">
            From AI-powered lead gen to support, payments, and beyond — BizneX gives you the freedom to create any conversational flow, anytime. No code. No limits. Just growth.
          </p>

          {/* Enhanced CTA Section - Redesigned Stronger Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-biznex-navy to-biznex-blue hover:from-biznex-blue hover:to-biznex-navy text-white text-xl px-10 py-8 h-auto group shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20 relative overflow-hidden"
              onClick={() => window.location.href = "https://biznex.io/app"}
            >
              <span className="absolute inset-0 bg-white/10 animate-pulse-glow"></span>
              <span className="relative flex items-center">
                Start Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </span>
              <span className="absolute bottom-1 left-0 right-0 text-xs text-white/90">No credit card needed</span>
            </Button>
          </div>
        </div>

        {/* Enhanced Hero Image with Floating Elements */}
        <div className="mt-6 md:mt-12 max-w-5xl mx-auto animate-fade-in relative">
          {/* Floating Elements */}
          <div className="absolute -top-10 -left-10 md:-left-20 w-20 h-20 bg-biznex-navy/10 rounded-xl rotate-12 animate-pulse-glow"></div>
          <div className="absolute -bottom-5 -right-5 md:-right-10 w-16 h-16 bg-biznex-blue/10 rounded-full animate-pulse-glow"></div>
          
          <div className="gradient-border card-shadow overflow-hidden relative rounded-2xl">
            {/* Browser Controls */}
            <div className="absolute top-0 left-0 right-0 bg-biznex-navy/90 backdrop-blur-sm p-2 z-10 flex items-center">
              <div className="flex space-x-1.5 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-biznex-navy/40 rounded-md h-5 flex items-center justify-center">
                <span className="text-xs text-white/70">app.biznex.io/dashboard</span>
              </div>
            </div>
            
            {/* Main Content with Enhanced Visuals */}
            <div className="bg-gradient-to-br from-biznex-navy to-biznex-blue p-8 pt-12 rounded-xl text-white">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="BizneX Flow Builder Platform" className="w-full h-auto object-cover rounded-lg shadow-lg border border-white/10" />
              
              {/* Enhanced Progress Indicator */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-6 border border-white/20 shadow-inner">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xl font-bold">Build your first conversation flow in seconds</p>
                  <span className="text-white/80 bg-white/20 px-3 py-1 rounded-full text-sm">75% Complete</span>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <div className="h-3 bg-biznex-blue/30 rounded-full w-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-white/80 to-white w-3/4 rounded-full animate-pulse-glow"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-white/80">Live Preview</span>
                  </div>
                  <button className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-1 rounded-md transition-colors">
                    Continue Building
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Hero;
