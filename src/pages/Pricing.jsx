import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

export default function Pricing() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Free",
      price: 0,
      yearlyPrice: 0,
      description: "Perfect for getting started",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Community support",
        "7-day data retention",
        "Public project visibility"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: 29,
      yearlyPrice: 290,
      description: "For serious developers",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "90-day data retention",
        "Private projects",
        "Custom domains",
        "Team collaboration (up to 5)",
        "API access"
      ],
      cta: "Start Pro Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: 99,
      yearlyPrice: 990,
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "365-day data retention",
        "24/7 dedicated support",
        "SSO & SAML",
        "Custom SLA",
        "On-premise deployment",
        "Advanced security controls",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const handleCTAClick = (planName) => {
    if (planName === "Enterprise") {
      window.location.href = "mailto:sales@gauntlet.dev?subject=Enterprise Plan Inquiry";
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-sky-200 to-sky-500 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={billingCycle === "monthly" ? "text-white font-medium" : "text-gray-500"}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-16 h-8 bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-sky-500 rounded-full transition-transform duration-300 ${
                  billingCycle === "yearly" ? "transform translate-x-8" : ""
                }`}
              />
            </button>
            <span className={billingCycle === "yearly" ? "text-white font-medium" : "text-gray-500"}>
              Yearly
              <span className="ml-2 text-sm text-green-400">(Save 17%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-sky-900/50 to-gray-900 border-2 border-sky-500 shadow-2xl shadow-sky-500/20 scale-105"
                  : "bg-gray-900/50 border border-gray-800"
              } transition-all duration-300 hover:scale-105`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sky-600 to-sky-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">
                    ${billingCycle === "monthly" ? plan.price : Math.floor(plan.yearlyPrice / 12)}
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                {billingCycle === "yearly" && plan.price > 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    ${plan.yearlyPrice} billed annually
                  </p>
                )}
              </div>

              <button
                onClick={() => handleCTAClick(plan.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-6 transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/30"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-gray-400">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept all major credit cards (Visa, MasterCard, American Express) and offer invoice-based billing for Enterprise customers.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Is there a free trial for Pro?</h3>
              <p className="text-gray-400">
                Yes! We offer a 14-day free trial for the Pro plan. No credit card required to start.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">What happens if I exceed my plan limits?</h3>
              <p className="text-gray-400">
                We'll notify you when you're approaching your limits. You can upgrade anytime to continue using all features without interruption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}