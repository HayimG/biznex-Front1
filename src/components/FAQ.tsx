
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [{
    question: "What is BizneX?",
    answer: "BizneX is a no-code platform for building interactive conversation flows, chatbots, and forms. It allows you to create engaging user experiences without writing any code, using an intuitive drag-and-drop interface."
  }, {
    question: "Do I need technical skills to use BizneX?",
    answer: "No, BizneX is designed to be used by anyone, regardless of their technical background. Our drag-and-drop interface makes it easy to create complex conversation flows without any coding knowledge."
  }, {
    question: "Can I integrate BizneX with other tools?",
    answer: "Yes, BizneX offers integration with popular tools like Google Sheets, Zapier, Make.com, Airtable, Slack, and many more. You can also use webhooks to connect with any custom API."
  }, {
    question: "How can I embed BizneX flows on my website?",
    answer: "You can embed your BizneX flows on any website using our embed code or WordPress plugin. You can also share your flows via direct link or iframe."
  }, {
    question: "Is my data secure with BizneX?",
    answer: "Yes, security is our priority. We use industry-standard encryption and security practices to protect your data. For enterprise customers, we offer additional security features like SSO and custom data retention policies."
  }, {
    question: "Can I white-label the conversational flows?",
    answer: "Yes, our Pro and Enterprise plans allow you to fully white-label your conversational experiences with your own branding, custom domains, and CSS customization."
  }];
  
  return (
    <section id="faq" className="bg-white py-[50px]">
      <div className="container-section">
        {/* Main frame containing both text and content */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-biznex-teal font-medium tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="heading-gradient">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to the most common questions about BizneX.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-md font-medium transition-colors">
                Visit Help Center
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-biznex-purple text-white hover:bg-biznex-light-purple rounded-md font-medium transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
