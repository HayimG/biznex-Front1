import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden py-[50px]">
      {/* Enhanced Dynamic Background with Animated Layers */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-biznex-blue/15 rounded-full opacity-70 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-purple-200 rounded-full opacity-60 blur-[80px] animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-200/50 rounded-full opacity-50 blur-[60px] animate-pulse-slow animation-delay-1000"></div>
        
        {/* Animated particles */}
        <div className="absolute top-64 right-1/4 w-8 h-8 bg-biznex-blue rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-32 left-1/3 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-float animation-delay-1000"></div>
        <div className="absolute top-96 left-1/2 w-4 h-4 bg-biznex-navy rounded-full opacity-60 animate-float animation-delay-2000"></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-tech-pattern opacity-50"></div>
      </div>

      <div className="container-section py-[5px]">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Interactive Badge */}
          

          {/* Enhanced Headline with Dynamic Effects */}
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block relative">
              Smarter Conversations
           {/*    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-biznex-blue transform -translate-x-1/2 transition-all duration-1000 delay-1000" style={{ width: isVisible ? '80%' : '0%' }}></span> */}
            </span> <br />
            <span className="heading-gradient inline-block mt-2 relative">
              Limitless Use Cases.
              {/* <div className="absolute -right-12 -top-8 w-8 h-8 bg-gradient-to-br from-biznex-secondary to-biznex-primary rounded-full opacity-70 blur-sm animate-pulse-slow"></div> */}
            </span> <br />
            <span className="relative inline-block mt-2">
              One Platform.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                <path className="animate-draw-line" d="M2 10C50 2 150 2 298 10" stroke="#3E92CC" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Enhanced Subheading with Staggered Animation */}
          <p className={`text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            From AI-powered lead gen to support, payments, and beyond — BizneX gives you the freedom to create any conversational flow, anytime. No code. No limits. Just growth.
          </p>

          {/* Redesigned CTA Button - Longer and Thinner */}
          <div className={`flex flex-col items-center animate-fade-in mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <Button size="lg" className="bg-gradient-to-r from-biznex-navy to-biznex-blue text-white px-16 py-4 h-12 rounded-full group relative overflow-hidden hover:shadow-[0_0_30px_rgba(62,146,204,0.6)] transition-all duration-500" onClick={() => window.location.href = "https://biznex.io/app"}>
              {/* Animated glow effect */}
              <span className="absolute inset-0 bg-white/5 animate-pulse-slow"></span>
              
              {/* Moving light effect on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine"></span>
              
              <span className="relative flex items-center justify-center text-base font-medium tracking-wider">
                START FREE
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </span>
              {/*  <span className="absolute bottom-1 left-0 right-0 text-xs text-white/80">No credit card needed</span> */}
            </Button>
            <p className="mt-2 text-sm text-gray-600">No credit card needed</p>
          </div>
        </div>

        {/* Enhanced Hero Image with High-Tech Effects */}
        <div className={`max-w-5xl mx-auto relative transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          {/* Floating Tech Elements */}
          <div className="absolute -top-10 -left-10 md:-left-20 w-20 h-20 bg-biznex-navy/10 rounded-xl rotate-12 animate-float"></div>
          <div className="absolute -bottom-5 -right-5 md:-right-10 w-16 h-16 bg-biznex-blue/10 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/4 -left-4 w-8 h-8 bg-gradient-to-br from-biznex-secondary to-transparent rounded-lg animate-spin-slow"></div>
          <div className="absolute bottom-1/4 -right-4 w-8 h-8 border-2 border-biznex-primary/30 rounded-lg animate-spin-slow animation-delay-2000"></div>
          
          {/* Main Card with Enhanced Effects */}
          <div className="gradient-border card-shadow overflow-hidden relative rounded-2xl transform hover:scale-[1.01] transition-all duration-500 group">
            {/* Animated Border Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-biznex-navy via-biznex-primary to-biznex-blue rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            
            {/* Browser Controls */}
            <div className="absolute top-0 left-0 right-0 bg-biznex-navy/90 backdrop-blur-sm p-2 z-10 flex items-center">
              <div className="flex space-x-1.5 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-biznex-navy/40 rounded-md h-5 flex items-center justify-center">
                
              </div>
            </div>
            
            {/* Main Content with Enhanced Visuals */}
            <div className="bg-gradient-to-br from-biznex-navy via-biznex-navy/90 to-biznex-blue/80 p-8 pt-12 rounded-xl text-white">
              <img alt="BizneX Flow Builder Platform" className="w-full h-auto object-cover rounded-lg shadow-lg border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]" src="/lovable-uploads/157b3d3e-fd77-43da-aa50-dfa31ae14c79.png" />
              
              {/* Enhanced Progress Indicator with More Tech Elements */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-6 border border-white/20 shadow-inner relative overflow-hidden group-hover:shadow-blue-500/20 group-hover:border-white/30 transition-all duration-500">
                {/* Animated Light Effect */}
                
                
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xl font-bold">Build your first conversation flow in seconds</p>
                  <span className="text-white/80 bg-white/20 px-3 py-1 rounded-full text-sm">75% Complete</span>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <div className="h-3 bg-biznex-blue/30 rounded-full w-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-white/80 to-white/80 via-biznex-secondary/80 w-3/4 rounded-full animate-pulse-glow"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white/80">Live Preview</span>
                  </div>
                  <button className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-1 rounded-md transition-colors hover:shadow-inner group relative overflow-hidden">
                    <span className="relative z-10">Continue Building</span>
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-biznex-primary to-biznex-secondary opacity-50 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tech decorative elements */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-12 rounded-full bg-biznex-blue/5 blur-xl"></div>
        </div>
      </div>
    </div>;
};
export default Hero;