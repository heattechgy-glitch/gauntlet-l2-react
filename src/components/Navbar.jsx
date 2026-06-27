import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Pricing", hash: "#pricing" }
  ];

  const handleNavClick = (hash) => {
    window.location.hash = hash;
    setActiveHash(hash);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-sky-500">FlowAI</div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.hash}
                  onClick={() => handleNavClick(link.hash)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    activeHash === link.hash
                      ? "bg-sky-500/20 text-sky-500"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  )}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.hash}
                onClick={() => handleNavClick(link.hash)}
                className={cn(
                  "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors",
                  activeHash === link.hash
                    ? "bg-sky-500/20 text-sky-500"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                )}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}