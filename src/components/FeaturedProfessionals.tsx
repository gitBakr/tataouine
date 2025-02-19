
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const professionals = [
  {
    name: "Dr. Marie Dubois",
    profession: "Médecin Généraliste",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Pierre Martin",
    profession: "Plombier",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Sophie Laurent",
    profession: "Architecte d'intérieur",
    rating: 5.0,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
];

export const FeaturedProfessionals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {professionals.map((professional) => (
        <Card key={professional.name} className="hover-scale glass-card overflow-hidden">
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <img
                src={professional.image}
                alt={professional.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{professional.name}</h3>
                <p className="text-gray-600">{professional.profession}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-medium">{professional.rating}</span>
              <span className="text-gray-600">({professional.reviews} avis)</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
