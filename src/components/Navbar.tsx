
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("fr");

  return (
    <nav className="bg-blue-600 text-white fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-yellow-300">
            ProConnect
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-yellow-300 transition-colors">Accueil</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Professionnels</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Catégories</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 hover:text-yellow-300">
                <Globe className="h-5 w-5" />
                <span>{currentLang.toUpperCase()}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="cursor-pointer"
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 hover:bg-blue-700 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-yellow-300 transition-colors">Accueil</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Professionnels</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Catégories</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
              
              {/* Mobile Language Selector */}
              <div className="border-t border-blue-500 pt-4">
                <div className="flex flex-col space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={`text-left py-2 px-4 hover:bg-blue-700 rounded ${
                        currentLang === lang.code ? "text-yellow-300" : ""
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
