
import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out BizneX",
      features: [
        "300 Monthly Responses",
        "Basic Flow Templates",
        "Standard Customization",
        "Email Support",
        "Basic Analytics"
      ],
      limitations: ["No Custom Domain", "No API Integrations"],
      callToAction: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$39",
      period: "/month",
      description: "Best for professionals and growing teams",
      features: [
        "Unlimited Responses",
        "All Flow Templates",
        "Advanced Customization",
        "All Integrations",
        "Priority Support",
        "Advanced Analytics",
        "Custom Domain",
        "Custom CSS"
      ],
      limitations: [],
      callToAction: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams with specific needs",
      features: [
        "Everything in Pro",
        "Custom Contracts",
        "Dedicated Account Manager",
        "SLA & Uptime Guarantee",
        "Premium Support",
        "Advanced Security",
        "Single Sign-On (SSO)",
        "Custom Integration Development"
      ],
      limitations: [],
      callToAction: "Contact Sales",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-biznex-teal font-medium tracking-wider mb-3">PRICING PLANS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, <span className="heading-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the perfect plan for your needs. No hidden fees or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? "border-biznex-purple shadow-lg relative" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-biznex-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-biznex-teal mr-2 mt-0.5" />
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
              
              <Button 
                className={`w-full ${
                  plan.popular
                    ? "bg-biznex-purple hover:bg-biznex-light-purple" 
                    : plan.name === "Enterprise"
                      ? "bg-gray-900 hover:bg-gray-800"
                      : "bg-white border-2 border-biznex-purple text-biznex-purple hover:bg-biznex-purple hover:text-white"
                }`}
              >
                {plan.callToAction}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
