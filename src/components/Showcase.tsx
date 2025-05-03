
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Showcase = () => {
  const steps = [
    {
      number: "01",
      title: "Design Your Flow",
      description: "Create a flowchart of your conversation with our drag-and-drop builder. Customize each step to gather the information you need.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    },
    {
      number: "02",
      title: "Add Logic & Integrations",
      description: "Implement conditional logic, connect to external services, and customize the user experience based on previous responses.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    },
    {
      number: "03",
      title: "Publish & Analyze",
      description: "Deploy your flow with a single click, embed it anywhere, and gain insights from user interactions with our analytics dashboard.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section id="showcase" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-biznex-teal font-medium tracking-wider mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Create Engaging Conversations <span className="heading-gradient">in Three Simple Steps</span>
          </h2>
          <p className="text-gray-600 text-lg">
            BizneX makes it easy to build, deploy, and analyze conversational flows without any technical expertise.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-block py-1 px-3 rounded-full bg-purple-100 text-biznex-purple font-semibold">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-biznex-teal mr-2 mt-0.5" />
                    <span className="text-gray-700">Intuitive visual interface</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-biznex-teal mr-2 mt-0.5" />
                    <span className="text-gray-700">Real-time preview as you build</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-biznex-teal mr-2 mt-0.5" />
                    <span className="text-gray-700">Templates for quick starts</span>
                  </li>
                </ul>
                
                <div className="pt-2">
                  <Button 
                    className="bg-biznex-purple hover:bg-biznex-light-purple"
                    redirectUrl="https://app.biznex.io/register"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-biznex-purple to-biznex-teal rounded-xl opacity-30 blur-lg"></div>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="relative rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
