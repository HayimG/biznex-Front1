import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const HowItWorks = () => {
  const steps = [{
    number: "1",
    title: "Choose Your Starting Point",
    description: "Begin with a template designed for your use case, or start from scratch with our intuitive visual builder.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
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
  return <section id="how-it-works" className="bg-gray-50 py-[20px]">
      <div className="container-section">
        {/* Main frame containing both text and content */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-biznex-blue font-medium tracking-wider mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build Powerful Flows <span className="heading-gradient">in Minutes</span> — No Code Needed
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you're starting from a template or building from scratch, BizneX makes it easy to go live with AI-powered conversations in just a few clicks.
            </p>
          </div>

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, index) => <div key={index} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-block py-1 px-3 rounded-full bg-biznex-navy text-white font-semibold">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
                
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-biznex-navy/10 to-biznex-blue/10"></div>
                    <img src={step.image} alt={step.title} className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>)}
          </div>

          {/* Time Comparison */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            

            
          </div>

          <div className="text-center mt-16">
            <Button className="btn-secondary group">
              See BizneX in Action
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;