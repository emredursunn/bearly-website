import { Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Bearly</span>
          </div>
          <p className="text-gray-400">Learn languages through immersive storytelling.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <div className="space-y-2 text-gray-400">
            <div>Features</div>
            <div>Pricing</div>
            <div>How it Works</div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <div className="space-y-2 text-gray-400">
            <div>Help Center</div>
            <div>Contact</div>
            <div>Privacy</div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Download</h4>
          <div className="space-y-2 text-gray-400">
            <div>iOS App</div>
            <div>Android App</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 StoryLearn. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
