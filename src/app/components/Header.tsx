import { Sparkles } from "lucide-react";

const Header = () => (
  <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Bearly
        </span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How it Works</a>
        <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
      </nav>
      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all">
        Get Started
      </button>
    </div>
  </header>
);

export default Header;
