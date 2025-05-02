
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5",
        isScrolled ? 
          "frosted-nav shadow-md py-3" : 
          "bg-transparent"
      )}
    >
      <div className="container-section flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-bold transition-all duration-300",
              isScrolled ?
                "text-biznex-primary" :
                "bg-gradient-to-r from-biznex-primary to-biznex-secondary bg-clip-text text-transparent"
            )}>
              BizneX
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#showcase" className="nav-link">
            How it Works
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-biznex-primary text-biznex-primary hover:bg-biznex-primary hover:text-white transition-all hover:scale-[1.02]"
            onClick={() => window.location.href = "https://biznex.io/app"}
          >
            Sign In
          </Button>
          <Button 
            className="bg-biznex-primary hover:bg-biznex-primary/90 text-white rounded-full px-6 hover:shadow-lg transition-all hover:scale-[1.02]"
            onClick={() => window.location.href = "https://biznex.io/app"}
          >
            Start Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-biznex-dark hover:text-biznex-primary transition-colors p-2 rounded-full hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="container-section py-5 flex justify-between items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-biznex-primary">
                BizneX
              </span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-biznex-dark hover:text-biznex-primary transition-colors p-2 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="container-section flex flex-col space-y-6 py-10 staggered-fade-in">
            <a
              href="#features"
              className="text-xl font-medium text-biznex-dark hover:text-biznex-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#showcase"
              className="text-xl font-medium text-biznex-dark hover:text-biznex-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-xl font-medium text-biznex-dark hover:text-biznex-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-xl font-medium text-biznex-dark hover:text-biznex-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-4 pt-6">
              <Button 
                variant="outline" 
                className="w-full border-2 border-biznex-primary text-biznex-primary hover:bg-biznex-primary hover:text-white text-lg py-6"
                onClick={() => {
                  window.location.href = "https://biznex.io/app";
                  setIsMobileMenuOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button 
                className="w-full bg-biznex-primary hover:bg-biznex-primary/90 text-white rounded-full text-lg py-6"
                onClick={() => {
                  window.location.href = "https://biznex.io/app";
                  setIsMobileMenuOpen(false);
                }}
              >
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
