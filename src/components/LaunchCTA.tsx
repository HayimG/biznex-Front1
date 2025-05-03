
import { ArrowRight, Play, Rocket, Zap, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CountUp from "./CountUp";

const LaunchCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    observer.observe(document.getElementById('launch-cta') as Element);
    return () => observer.disconnect();
  }, []);
  
  return <section id="launch-cta" className="relative overflow-hidden bg-gray-50 py-[10px]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-biznex-primary/5 to-transparent opacity-70 -z-10"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-biznex-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-biznex-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow animation-delay-1000"></div>
      
      <div className="absolute -right-20 top-1/3 w-72 h-72 rounded-full border border-biznex-primary/10 animate-spin-slow opacity-30"></div>
      <div className="absolute -left-10 bottom-1/4 w-40 h-40 rounded-full border border-biznex-secondary/10 animate-spin-slow animation-delay-2000 opacity-30"></div>
      
      <div className="container-section">
        {/* Main framed container to match Features styling */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          {/* Header text section */}
          <div className="text-center max-w-3xl mx-auto mb-8 relative">
            <div className={`inline-flex items-center gap-2 px-4 py-2 mb-4 bg-biznex-primary/10 rounded-full transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`} style={{
            transitionDelay: '300ms'
          }}>
              <Rocket size={18} className="text-biznex-primary animate-bounce-subtle" />
              <span className="font-medium text-biznex-primary">Ready to transform your business?</span>
            </div>
            
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`} style={{
            transitionDelay: '400ms'
          }}>
              Ready to Launch Your First Flow - <br />
              <span className="heading-gradient relative">
                in Just <CountUp end="12" suffix=" Minutes?" duration={1500} threshold={0} />
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                  <path className="animate-draw-line" d="M2 10C50 2 150 2 298 10" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h2>
            
            <p className={`text-gray-600 text-lg mb-8 max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`} style={{
            transitionDelay: '500ms'
          }}>
              Join thousands of users using BizneX to create AI-powered conversations that engage, convert, and support — without writing a single line of code.
            </p>
            
            <div className={`flex flex-wrap justify-center gap-6 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`} style={{
            transitionDelay: '600ms'
          }}>
              {["No setup delays", "No code required", "No credit card needed"].map((benefit, i) => <div key={benefit} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:border-biznex-primary/30 transition-all duration-300 hover:shadow-md group">
                  <div className="h-6 w-6 rounded-full bg-biznex-primary/10 flex items-center justify-center group-hover:bg-biznex-primary/20 transition-colors">
                    <CheckCircle size={14} className="text-biznex-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>)}
            </div>
            
            <div className={`flex flex-col sm:flex-row justify-center gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`} style={{
            transitionDelay: '700ms'
          }}>
              <Button size="lg" 
                redirectUrl="https://app.biznex.io/register" 
                className="bg-gradient-to-r from-biznex-navy to-biznex-blue hover:from-biznex-blue hover:to-biznex-navy text-white px-8 h-auto rounded-full text-lg group relative overflow-hidden hover:shadow-[0_0_30px_rgba(62,146,204,0.6)] transition-all duration-500 py-[15px]">
                {/* Animated glow effect */}
                <span className="absolute inset-0 bg-white/5 animate-pulse-slow"></span>
                
                {/* Moving light effect on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine"></span>
                
                <span className="relative flex items-center">
                  <Zap size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                  Start Building for Free
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </Button>
            </div>
          </div>
          
          {/* Testimonial Card */}
          <div className={`bg-white rounded-xl p-6 shadow-md border border-gray-50 hover:border-gray-100 transition-all duration-500 relative overflow-hidden group tech-glow transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`} style={{
          transitionDelay: '800ms'
        }}>
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer"></div>
            
            <blockquote className="text-gray-700 text-lg italic relative">
              "We replaced our traditional contact forms with BizneX and saw a <CountUp end="47" suffix="%" duration={1500} /> increase in completed submissions. The data we gather is more meaningful, and our customers actually enjoy the experience."
              <div className="absolute -bottom-2 -right-2 w-20 h-20 text-9xl text-biznex-primary/5 leading-none">"</div>
            </blockquote>
            <div className="flex items-center mt-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-biznex-primary/20 to-biznex-secondary/20 flex items-center justify-center text-biznex-navy font-medium border border-white shadow-sm">
                JD
              </div>
              <div className="ml-3">
                <p className="font-medium text-gray-900">Jane Theroux</p>
                <p className="text-sm text-gray-500">Head of Marketing</p>
              </div>
              <div className="ml-auto flex">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} className="text-amber-400 fill-amber-400" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LaunchCTA;
