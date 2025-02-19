
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="Rechercher un professionnel..."
        className="glass-input pl-10 py-6 text-lg w-full focus:ring-2 focus:ring-gray-200 focus:border-transparent"
      />
    </div>
  );
};
