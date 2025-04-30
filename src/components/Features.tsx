
import { CheckCircle, Code, Zap, Users, Database, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-12 w-12 text-biznex-purple" />,
      title: "Visual Flow Builder",
      description: "Create interactive conversational experiences with our intuitive drag-and-drop builder, no coding required."
    },
    {
      icon: <Zap className="h-12 w-12 text-biznex-purple" />,
      title: "Logic Branching",
      description: "Design complex conversation flows with conditional logic and dynamic content based on user responses."
    },
    {
      icon: <Database className="h-12 w-12 text-biznex-purple" />,
      title: "Data Collection",
      description: "Capture and store user responses securely with customizable forms and database integration."
    },
    {
      icon: <Code className="h-12 w-12 text-biznex-purple" />,
      title: "API Integration",
      description: "Connect to any third-party service with webhooks and API integrations to extend functionality."
    },
    {
      icon: <Users className="h-12 w-12 text-biznex-purple" />,
      title: "Team Collaboration",
      description: "Work together with your team on flow design, testing, and deployment with real-time collaboration."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-biznex-purple" />,
      title: "Analytics Dashboard",
      description: "Gain insights from user interactions with comprehensive analytics and conversion tracking."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-biznex-teal font-medium tracking-wider mb-3">POWERFUL FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to Build <span className="heading-gradient">Exceptional Conversational Flows</span>
          </h2>
          <p className="text-gray-600 text-lg">
            BizneX provides all the tools you need to design, build, and deploy interactive conversation flows without any coding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:border-biznex-purple/30 transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
