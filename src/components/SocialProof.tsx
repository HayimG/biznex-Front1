
import { Star } from "lucide-react";

const SocialProof = () => {
  const metrics = [
    { value: "40%+", label: "Average increase in form completion rates" },
    { value: "3.2x", label: "More qualified leads captured" },
    { value: "35%", label: "Reduction in support tickets" },
    { value: "12 min", label: "Average time to deploy first flow" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-biznex-blue font-medium tracking-wider mb-3">TRUSTED WORLDWIDE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Industry Leaders <span className="heading-gradient">Who Build with BizneX</span>
          </h2>
        </div>

        {/* Logo Cloud */}
        <div className="py-8 px-4 bg-white rounded-xl shadow-sm border border-gray-200 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="bg-gray-200 h-8 w-32 rounded-md flex items-center justify-center text-gray-500 font-semibold">
                  LOGO {idx}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
              <p className="text-3xl font-bold text-biznex-navy mb-2">{metric.value}</p>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-biznex-navy to-biznex-blue rounded-xl p-8 text-white max-w-4xl mx-auto">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <p className="text-xl italic mb-6">
            "BizneX has transformed how we engage with customers. What used to take our developers weeks now takes our marketing team minutes. The ROI has been incredible."
          </p>
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
              MT
            </div>
            <div className="ml-3">
              <p className="font-medium">Michael Torres</p>
              <p className="text-sm text-white/80">Director of Digital Experience, TechVision Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
