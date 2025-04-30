
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BizneX has completely transformed how we gather customer information. Our conversion rates have increased by 40% since implementing their conversational forms.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVibe",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "The visual builder is incredibly intuitive. We've been able to create complex conversation flows for our support system without any developer resources.",
      author: "Michael Chen",
      position: "Customer Experience Lead",
      company: "SkyData",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "BizneX helped us reduce our lead qualification time by 60%. The analytics and integration capabilities are beyond anything else on the market.",
      author: "Emily Rodriguez",
      position: "Sales Operations",
      company: "GrowthMakers",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-biznex-teal font-medium tracking-wider mb-3">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by <span className="heading-gradient">Innovative Teams</span>
          </h2>
          <p className="text-gray-600 text-lg">
            See what our customers have to say about their experience with BizneX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <img src="https://placeholder.svg" alt="Company logo" className="h-8 opacity-60" />
          <img src="https://placeholder.svg" alt="Company logo" className="h-8 opacity-60" />
          <img src="https://placeholder.svg" alt="Company logo" className="h-8 opacity-60" />
          <img src="https://placeholder.svg" alt="Company logo" className="h-8 opacity-60" />
          <img src="https://placeholder.svg" alt="Company logo" className="h-8 opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
