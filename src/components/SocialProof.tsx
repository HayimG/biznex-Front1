
import { Star } from "lucide-react";
import CountUp from "./ui/CountUp";

const SocialProof = () => {
  const metrics = [{
    value: 40,
    suffix: "%+",
    label: "Average increase in form completion rates"
  }, {
    value: 3.2,
    suffix: "x",
    label: "More qualified leads captured"
  }, {
    value: 35,
    suffix: "%",
    label: "Reduction in support tickets"
  }, {
    value: 12,
    suffix: " min",
    label: "Average time to deploy first flow"
  }];

  return <section className="bg-gray-50 py-[10px]">
      <div className="container-section">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-biznex-primary/10 px-3 py-1 text-biznex-primary text-sm font-medium mb-4">
              TRUSTED WORLDWIDE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Industry Leaders{" "}
              <span className="heading-gradient relative">
                Who Build with BizneX
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                  <path className="animate-draw-line" d="M2 10C50 2 150 2 298 10" stroke="#3E92CC" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Thousands of companies trust BizneX to power their most critical customer interactions.
            </p>
          </div>

          {/* Logo Cloud */}
          <div className="py-8 px-4 bg-white rounded-xl shadow-sm border border-gray-200 mb-16 animate-slide-in-right">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4].map(idx => <div key={idx} className="h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <div className="bg-gray-200 h-8 w-32 rounded-md flex items-center justify-center text-gray-500 font-semibold">
                    LOGO {idx}
                  </div>
                </div>)}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-md transition-shadow animate-float" style={{animationDelay: `${idx * 200}ms`}}>
                <p className="text-3xl font-bold text-biznex-navy mb-2">
                  <CountUp end={metric.value} suffix={metric.suffix} duration={2000} />
                </p>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <div className="bg-gradient-to-r from-biznex-navy to-biznex-blue rounded-xl p-8 text-white max-w-4xl mx-auto animate-scale-in">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
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
      </div>
    </section>;
};
export default SocialProof;
