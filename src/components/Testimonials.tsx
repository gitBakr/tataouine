
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Un service exceptionnel qui m'a permis de trouver rapidement les bons professionnels.",
    author: "Jean Dupont",
    role: "Client satisfait"
  },
  {
    quote: "La plateforme parfaite pour développer ma clientèle locale.",
    author: "Marie Lambert",
    role: "Professionnelle"
  },
  {
    quote: "Simple, rapide et efficace. Je recommande vivement !",
    author: "Thomas Bernard",
    role: "Client satisfait"
  }
];

export const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="glass-card p-6">
          <Quote className="h-8 w-8 text-gray-400 mb-4" />
          <p className="text-gray-700 mb-4">{testimonial.quote}</p>
          <div className="mt-auto">
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
