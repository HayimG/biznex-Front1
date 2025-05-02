
import { ArrowRight, Check } from "lucide-react";
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
          <p className="text-biznex-blue font-medium tracking-wider mb-3 animate-fade-in">
            BUILD INTERACTIVE CONVERSATION FLOWS
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Smarter Conversations. <span className="heading-gradient">Limitless Use Cases.</span> One Platform.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
            From AI-powered lead gen to support, payments, and beyond — BizneX gives you the freedom to create any conversational flow, anytime. No code. No limits. Just growth.
          </p>

          {/* Social Proof Banner */}
          <div className="bg-biznex-navy/5 rounded-lg py-3 px-4 mb-8 animate-fade-in">
            <p className="text-biznex-navy font-medium">
              Trusted by 500+ companies to increase conversion rates by up to 40%
            </p>
          </div>

          {/* Quick Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 text-left max-w-3xl mx-auto">
            {[
              "Launch with 20+ ready-made templates",
              "Customize with a no-code visual builder",
              "Automate support, capture leads, sell products",
              "Seamlessly integrate with Stripe, Calendly, CRMs, and more"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="bg-biznex-blue rounded-full p-1 shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button size="lg" className="btn-primary group">
              Start Free
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
              <span className="text-xs opacity-80 ml-1">No credit card needed</span>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto animate-fade-in">
          <div className="gradient-border card-shadow overflow-hidden relative">
            {/* Interactive Demo Animation Placeholder */}
            <div className="absolute top-2 right-2 z-10 flex space-x-1.5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-biznex-navy to-biznex-blue p-6 rounded-xl text-white">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="BizneX Flow Builder Platform" 
                className="w-full h-auto object-cover rounded-lg shadow-lg border border-white/10"
              />
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-4 border border-white/10">
                <p className="text-lg font-medium">Build your first conversation flow in seconds</p>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="h-2 bg-biznex-blue/30 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-white w-3/4 rounded-full animate-pulse-glow"></div>
                  </div>
                  <span className="text-sm">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
