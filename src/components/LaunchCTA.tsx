
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const LaunchCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-biznex-navy/5 to-biznex-blue/5 rounded-2xl p-10 shadow-sm border border-biznex-blue/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Launch Your First Flow — in Just 12 Minutes?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
                Join thousands of teams using BizneX to create AI-powered conversations that engage, convert, and support — without writing a single line of code.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-biznex-blue"></div>
                  <span className="text-gray-700 font-medium">No setup delays</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-biznex-blue"></div>
                  <span className="text-gray-700 font-medium">No code required</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-biznex-blue"></div>
                  <span className="text-gray-700 font-medium">No credit card needed</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-biznex-navy to-biznex-blue hover:from-biznex-blue hover:to-biznex-navy text-white px-8 py-6 h-auto rounded-full text-lg group"
                  onClick={() => window.location.href = "https://biznex.io/app"}
                >
                  Start Building for Free
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
                
                <Button 
                  variant="ghost"
                  size="lg"
                  className="text-biznex-navy border border-biznex-navy/20 hover:bg-biznex-navy/5 px-8 py-6 h-auto rounded-full text-lg group relative"
                  onClick={() => window.location.href = "https://biznex.io/app"}
                >
                  <Play className="mr-1" size={18} />
                  See Live Demo
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-4/5 h-0.5 bg-biznex-blue transition-all duration-300"></span>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <blockquote className="text-gray-700 text-lg italic">
                "We replaced our traditional contact forms with BizneX and saw a 47% increase in completed submissions. The data we gather is more meaningful, and our customers actually enjoy the experience."
              </blockquote>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full bg-biznex-blue/20 flex items-center justify-center text-biznex-navy font-medium">
                  JD
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Jane Doe</p>
                  <p className="text-sm text-gray-500">Head of Marketing, Example Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchCTA;
