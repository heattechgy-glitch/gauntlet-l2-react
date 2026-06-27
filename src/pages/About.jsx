import { useState } from "react";
import { Users, Target, Clock } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      initials: "AC",
      bio: "Former ML engineer with 10+ years in autonomous systems.",
    },
    {
      name: "Sarah Williams",
      role: "Head of Engineering",
      initials: "SW",
      bio: "Built distributed systems at scale for Fortune 500 companies.",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead AI Researcher",
      initials: "MR",
      bio: "PhD in Computer Science, specializing in reinforcement learning.",
    },
  ];

  const timeline = [
    {
      year: "2024 Q1",
      title: "Foundation",
      description: "Company founded with initial concept for Gauntlet L2",
    },
    {
      year: "2024 Q2",
      title: "Alpha Release",
      description: "First working prototype deployed to select users",
    },
    {
      year: "2024 Q3",
      title: "Public Beta",
      description: "Open beta program launched with community feedback",
    },
    {
      year: "2024 Q4",
      title: "Production Launch",
      description: "Full production release with enterprise features",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#0ea5e9] to-blue-600 bg-clip-text text-transparent">
            About Gauntlet L2
          </h1>
          <p className="text-xl text-gray-400">
            Building the future of autonomous AI systems
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-800">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "mission"
                ? "text-[#0ea5e9] border-b-2 border-[#0ea5e9]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Target className="inline-block w-5 h-5 mr-2" />
            Mission
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "team"
                ? "text-[#0ea5e9] border-b-2 border-[#0ea5e9]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Users className="inline-block w-5 h-5 mr-2" />
            Team
          </button>
          <button
            onClick={() => setActiveTab("timeline")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "timeline"
                ? "text-[#0ea5e9] border-b-2 border-[#0ea5e9]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Clock className="inline-block w-5 h-5 mr-2" />
            Timeline
          </button>
        </div>

        {/* Mission Section */}
        {activeTab === "mission" && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-[#0ea5e9]">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                At Gauntlet L2, we're revolutionizing the way organizations
                interact with artificial intelligence. Our mission is to create
                autonomous AI systems that are not only powerful and efficient,
                but also transparent, reliable, and aligned with human values.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                We believe that the future of AI lies in systems that can learn,
                adapt, and operate independently while maintaining robust safety
                guarantees and ethical guidelines. Our platform enables
                developers and enterprises to deploy AI agents that handle
                complex tasks autonomously, freeing humans to focus on
                high-level strategy and creative problem-solving.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through cutting-edge research, rigorous testing, and a
                commitment to open collaboration, we're building the
                infrastructure for the next generation of intelligent systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#0ea5e9]/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#0ea5e9]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-400">
                  Pushing the boundaries of what's possible with autonomous AI
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#0ea5e9]/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#0ea5e9]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-400">
                  Building together with our community and partners
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#0ea5e9]/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#0ea5e9]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-gray-400">
                  Delivering production-grade systems you can trust
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTab === "team" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-[#0ea5e9]">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#0ea5e9] transition-all"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#0ea5e9] to-blue-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#0ea5e9] font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Section */}
        {activeTab === "timeline" && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-[#0ea5e9]">
              Our Journey
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800"></div>

              {timeline.map((event, idx) => (
                <div
                  key={idx}
                  className={`relative mb-12 ${
                    idx % 2 === 0
                      ? "md:pr-1/2 md:text-right"
                      : "md:pl-1/2 md:ml-auto md:text-left"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-[#0ea5e9] rounded-full -ml-2 md:-ml-2 border-4 border-black"></div>

                  <div
                    className={`ml-8 md:ml-0 ${
                      idx % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#0ea5e9] transition-all">
                      <span className="text-[#0ea5e9] font-bold text-sm">
                        {event.year}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}