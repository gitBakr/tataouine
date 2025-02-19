
import { Briefcase, Star, Wrench, Paintbrush, Car, Brain, Scissors, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { icon: Star, name: "Santé", color: "bg-blue-50" },
  { icon: Wrench, name: "Artisans", color: "bg-yellow-50" },
  { icon: Briefcase, name: "Services", color: "bg-blue-50" },
  { icon: Paintbrush, name: "Art & Design", color: "bg-yellow-50" },
  { icon: Car, name: "Auto", color: "bg-blue-50" },
  { icon: Brain, name: "Education", color: "bg-yellow-50" },
  { icon: Scissors, name: "Beauté", color: "bg-blue-50" },
  { icon: Home, name: "Immobilier", color: "bg-yellow-50" },
];

export const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Card
          key={category.name}
          className={`hover-scale glass-card p-6 cursor-pointer ${category.color}`}
        >
          <div className="flex flex-col items-center space-y-2">
            <category.icon className="h-8 w-8 text-blue-600" />
            <span className="font-medium text-blue-900">{category.name}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};
