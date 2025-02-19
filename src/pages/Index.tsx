
import { SearchBar } from "@/components/SearchBar";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProfessionals } from "@/components/FeaturedProfessionals";
import { Testimonials } from "@/components/Testimonials";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-6 pt-32 pb-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 tracking-tight">
          Trouvez le bon professionnel
        </h1>
        <p className="text-xl text-blue-600 mb-12 max-w-2xl mx-auto">
          Connectez-vous avec les meilleurs professionnels de votre région en quelques clics
        </p>
        <SearchBar />
      </section>

      {/* Categories Section */}
      <section className="px-6 py-16 bg-blue-50/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Explorez par catégorie
          </h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Professionals Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Professionnels à la une
          </h2>
          <FeaturedProfessionals />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-blue-50/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Ce qu'en pensent nos utilisateurs
          </h2>
          <Testimonials />
        </div>
      </section>
    </div>
  );
};

export default Index;
