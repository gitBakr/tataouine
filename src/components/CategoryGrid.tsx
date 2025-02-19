
import { Briefcase, FirstAid, Wrench, Paintbrush, Car, Brain, Scissors, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { icon: FirstAid, name: "Santé", color: "bg-red-50" },
  { icon: Wrench, name: "Artisans", color: "bg-blue-50" },
  { icon: Briefcase, name: "Services", color: "bg-green-50" },
  { icon: Paintbrush, name: "Art & Design", color: "bg-purple-50" },
  { icon: Car, name: "Auto", color: "bg-yellow-50" },
  { icon: Brain, name: "Education", color: "bg-pink-50" },
  { icon: Scissors, name: "Beauté", color: "bg-orange-50" },
  { icon: Home, name: "Immobilier", color: "bg-indigo-50" },
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
            <category.icon className="h-8 w-8 text-gray-700" />
            <span className="font-medium text-gray-900">{category.name}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};
