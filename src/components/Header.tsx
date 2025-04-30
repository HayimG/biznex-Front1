
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-section flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-biznex-purple to-biznex-light-purple bg-clip-text text-transparent">
              BizneX
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-biznex-purple font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#showcase"
            className="text-gray-700 hover:text-biznex-purple font-medium transition-colors"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-biznex-purple font-medium transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-biznex-purple font-medium transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-biznex-purple text-biznex-purple hover:bg-biznex-purple hover:text-white">
            Sign In
          </Button>
          <Button className="bg-biznex-purple hover:bg-biznex-light-purple">
            Start Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-700 hover:text-biznex-purple font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#showcase"
              className="text-gray-700 hover:text-biznex-purple font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-biznex-purple font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-biznex-purple font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" className="border-biznex-purple text-biznex-purple hover:bg-biznex-purple hover:text-white w-full">
                Sign In
              </Button>
              <Button className="bg-biznex-purple hover:bg-biznex-light-purple w-full">
                Start Free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
