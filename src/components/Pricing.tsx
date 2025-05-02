import { CheckCircle, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const Pricing = () => {
  const plans = [{
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out BizneX",
    features: ["300 Monthly Responses", "Basic Flow Templates", "Standard Customization", "Email Support", "Basic Analytics"],
    limitations: ["No Custom Domain", "No API Integrations"],
    callToAction: "Start Free",
    popular: false
  }, {
    name: "Pro",
    price: "$39",
    period: "/month",
    description: "Best for professionals and growing teams",
    features: ["Unlimited Responses", "All Flow Templates", "Advanced Customization", "All Integrations", "Priority Support", "Advanced Analytics", "Custom Domain", "Custom CSS"],
    limitations: [],
    callToAction: "Get Started",
    popular: true
  }, {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams with specific needs",
    features: ["Everything in Pro", "Custom Contracts", "Dedicated Account Manager", "SLA & Uptime Guarantee", "Premium Support", "Advanced Security", "Single Sign-On (SSO)", "Custom Integration Development"],
    limitations: [],
    callToAction: "Contact Sales",
    popular: false
  }];
  return <section id="pricing" className="bg-gray-50 py-[20px]">
      <div className="container-section">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
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
            {plans.map((plan, index) => <div key={index} className={`rounded-xl p-8 border transition-all duration-300 ${plan.popular ? "border-biznex-blue shadow-lg relative transform hover:-translate-y-1" : "border-gray-200 hover:border-gray-300 hover:shadow"}`}>
                {plan.popular && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-biznex-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>)}
                  {plan.limitations.map((limitation, i) => <li key={`lim-${i}`} className="flex items-start opacity-70">
                      <X className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-500">{limitation}</span>
                    </li>)}
                </ul>
                
                <Button className={`w-full ${plan.popular ? "bg-biznex-blue hover:bg-biznex-light-navy" : plan.name === "Enterprise" ? "bg-gray-900 hover:bg-gray-800" : "bg-white border-2 border-biznex-blue text-biznex-blue hover:bg-biznex-blue hover:text-white"} group`}>
                  {plan.callToAction}
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>)}
          </div>

          {/* Money-Back Guarantee */}
          <div className="bg-gray-50 rounded-xl p-8 text-center max-w-3xl mx-auto mb-10">
            <p className="text-lg font-medium mb-4">Try BizneX risk-free with our 14-day money-back guarantee.</p>
            <p className="text-gray-600">Have questions about which plan is right for you? Talk to our team.</p>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Button size="lg" className="btn-primary group">
              Start Building Today
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
              <span className="text-xs opacity-80 ml-1">No credit card required for your 14-day free trial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;