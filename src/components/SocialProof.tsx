
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const SocialProof = () => {
  const metrics = [{
    value: "40%+",
    label: "Average increase in form completion rates"
  }, {
    value: "3.2x",
    label: "More qualified leads captured"
  }, {
    value: "35%",
    label: "Reduction in support tickets"
  }, {
    value: "12 min",
    label: "Average time to deploy first flow"
  }];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    // Apply to all elements with animation classes
    const animatedElements = document.querySelectorAll(".social-proof-animate");
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <section className="bg-gray-50 py-[10px]">
      <div className="container-section">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          <div className="text-center max-w-3xl mx-auto mb-16 social-proof-animate animate-fade-in-up" style={{ transitionDelay: '100ms' }}>
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
              Thousands of business trust BizneX to power their most critical customer interactions.
            </p>
          </div>

          {/* Logo Cloud */}
          <div className="py-8 px-4 bg-white rounded-xl shadow-sm border border-gray-200 mb-16 social-proof-animate animate-scale-in" style={{ transitionDelay: '200ms' }}>
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
            {metrics.map((metric, idx) => <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-md transition-shadow social-proof-animate animate-scale-in" style={{ transitionDelay: `${300 + idx * 100}ms` }}>
                <p className="text-3xl font-bold text-biznex-navy mb-2">{metric.value}</p>
                <p className="text-gray-600">{metric.label}</p>
              </div>)}
          </div>

          {/* Featured Testimonial */}
          <div className="bg-gradient-to-r from-biznex-navy to-biznex-blue rounded-xl p-8 text-white max-w-4xl mx-auto social-proof-animate animate-fade-in-up" style={{ transitionDelay: '700ms' }}>
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
