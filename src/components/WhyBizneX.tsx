
import { CheckCircle, X } from "lucide-react";

const WhyBizneX = () => {
  const comparisonData = [
    { 
      feature: "Building Speed", 
      biznex: "Minutes", 
      traditional: "Days or weeks",
      highlight: true
    },
    { 
      feature: "Coding Required", 
      biznex: "None", 
      traditional: "Often needed for customization" 
    },
    { 
      feature: "AI Capabilities", 
      biznex: "Built-in", 
      traditional: "Limited or additional cost" 
    },
    { 
      feature: "Integrations", 
      biznex: "30+ native connections", 
      traditional: "Typically 5-10 basics" 
    },
    { 
      feature: "Conversation Types", 
      biznex: "Unlimited customizable templates", 
      traditional: "Limited templates" 
    },
    { 
      feature: "Analytics", 
      biznex: "Comprehensive", 
      traditional: "Basic metrics only" 
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-biznex-blue font-medium tracking-wider mb-3">COMPARISON</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Leading Teams <span className="heading-gradient">Choose BizneX</span> Over Alternatives
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg max-w-4xl mx-auto bg-white">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-biznex-navy text-white">
                <th className="py-4 px-6 text-left rounded-tl-xl">Feature</th>
                <th className="py-4 px-6 text-center font-bold bg-biznex-light-navy">BizneX</th>
                <th className="py-4 px-6 text-center rounded-tr-xl">Traditional Builders</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${row.highlight ? 'bg-blue-50' : ''}`}
                >
                  <td className="py-4 px-6 border-t border-gray-200">{row.feature}</td>
                  <td className="py-4 px-6 text-center border-t border-gray-200 font-medium text-biznex-navy">
                    <div className="flex items-center justify-center gap-2">
                      {row.biznex}
                      {row.highlight && <CheckCircle className="h-4 w-4 text-green-500" />}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center border-t border-gray-200 text-gray-600">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="text-5xl text-biznex-blue">"</div>
            <div>
              <p className="text-lg text-gray-700 italic mb-4">
                We replaced our traditional contact forms with BizneX and saw a 47% increase in completed submissions. The data we gather is more meaningful, and our customers actually enjoy the experience.
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-biznex-navy/10 flex items-center justify-center text-biznex-navy font-bold text-xl">
                  SC
                </div>
                <div className="ml-4">
                  <p className="font-medium">Sara Chen</p>
                  <p className="text-sm text-gray-600">Growth Lead at Flexify</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBizneX;
