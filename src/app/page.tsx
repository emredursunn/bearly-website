import { Bot, Mic, Star, Sparkles, Zap, Heart, Play, ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="relative container mx-auto px-6 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="text-left">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-800">AI-Powered Learning</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Learn Languages
                  <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Through Stories
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Immerse yourself in personalized stories that adapt to your learning level. 
                  Make language learning fun, effective, and unforgettable.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Start Learning Free</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Watch Demo
                  </button>
                </div>
                
                <div className="flex items-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-orange-400"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                    </div>
                    <span>50K+ learners</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Image/Mockup */}
              <div className="relative">
                <div className="relative z-10">
                  {/* Phone Mockup */}
                  <div className="relative mx-auto w-72 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="bg-gray-50 h-12 flex items-center justify-between px-6 text-xs font-medium text-gray-600">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-6">
                        <div className="text-center mb-6">
                          <h3 className="text-lg font-bold text-gray-800 mb-2">The Magic Forest</h3>
                          <div className="flex justify-center space-x-1 mb-3">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          </div>
                          <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Beginner</span>
                        </div>
                        
                        <div className="space-y-4 text-sm">
                          <p className="leading-relaxed">
                            Once upon a time, there was a <span className="bg-yellow-200 px-1 rounded">beautiful</span> forest where magical creatures lived happily together.
                          </p>
                          <p className="leading-relaxed">
                            A young <span className="bg-blue-200 px-1 rounded">rabbit</span> named Luna discovered a secret path that led to an enchanted garden.
                          </p>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center space-x-2">
                            <Play className="w-3 h-3" />
                            <span>Continue Reading</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-6 w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-spin">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose 
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> StoryLearn?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our innovative approach combines the power of storytelling with advanced AI technology 
                to create a personalized learning experience that adapts to you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-8">AI-Powered Stories</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Experience personalized narratives that adapt to your learning level, interests, and progress. 
                  Our AI creates engaging content that keeps you motivated.
                </p>
                <div className="flex items-center text-purple-600 font-medium group-hover:text-pink-600 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="group relative bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-8">Interactive Learning</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Tap any word for instant translation and pronunciation. Listen to native speakers 
                  and improve your accent with real-time feedback.
                </p>
                <div className="flex items-center text-pink-600 font-medium group-hover:text-orange-600 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-8">Personalized Content</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Create custom stories based on your hobbies, interests, and goals. 
                  Make learning relevant and exciting with content that matters to you.
                </p>
                <div className="flex items-center text-orange-600 font-medium group-hover:text-red-600 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already mastering new languages through the power of storytelling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <span>Download on App Store</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                Get it on Google Play
              </button>
            </div>
            
            <div className="text-white/80 text-sm">
              Free to download • No credit card required • 7-day premium trial
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}