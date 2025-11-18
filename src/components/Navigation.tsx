import { Car, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Início" },
    { id: "services", label: "Serviços" },
    { id: "fleet", label: "Frota" },
    { id: "about", label: "Sobre" },
    { id: "contact", label: "Contato" },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-slate-800 transition-colors">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              Vip Fleet
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate("contact")}
              className="ml-4 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
            >
              Reservar
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate("contact")}
              className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
            >
              Reservar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
