import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Brain, Sparkles } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Work smarter with{" "}
            <span className="text-[#0ea5e9]">AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Unlock the power of artificial intelligence to streamline your workflow, 
            boost productivity, and achieve more in less time.
          </p>

          <div className="pt-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="inline-flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-24">
          {/* Feature Card 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-[#0ea5e9] transition-colors duration-200">
            <div className="w-12 h-12 bg-[#0ea5e9]/10 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#0ea5e9]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-400">
              Experience blazing-fast performance with cutting-edge AI models optimized 
              for speed and efficiency.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-[#0ea5e9] transition-colors duration-200">
            <div className="w-12 h-12 bg-[#0ea5e9]/10 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-[#0ea5e9]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Intelligent Insights</h3>
            <p className="text-gray-400">
              Gain deep insights and actionable intelligence from your data with 
              advanced AI analytics.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-[#0ea5e9] transition-colors duration-200">
            <div className="w-12 h-12 bg-[#0ea5e9]/10 rounded-lg flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-[#0ea5e9]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Effortless Automation</h3>
            <p className="text-gray-400">
              Automate repetitive tasks and focus on what matters most with 
              intelligent workflow automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}