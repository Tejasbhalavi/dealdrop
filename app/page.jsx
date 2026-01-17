
import Image from "next/image";
import { Rabbit, Shield, Bell } from "lucide-react";
import AddProductFrom from "@/components/AddProductFrom";
import AuthButton from "@/components/AuthButton";


export default function Home() {
  const user = null; // Replace with actual user authentication logic
  const products = []; // Replace with actual product data

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50">
      <header className=" bg-white/80  backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10  ">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className=" flex items-center gap-3">
            <Image
              src={"/deal-drop-logo.png"}
              alt="Deal-drop-logo"
              width={600}
              height={200}
              className=" h-10 w-auto"
            />
          </div>

          {/* Auth Button  */}
          <AuthButton user={user} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <span>🚀 New Feature:</span> AI-Powered Price Predictions!
          </div>

          <h2 className="text-5xl font-bold text-orange-500 mb-4 tracking-tight">
            Never Miss a Price Drop
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Track prices from any e-commerce site. Get instant alerts when
            prices drop. Save money effortlessly.
          </p>

          {/* <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg font-semibold">Get Started - It's Free</Button> */}

          {/* Add product Form */}

          <AddProductFrom user={user} />

          {/* Features Section */}
          {products.length === 0 && (
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl border border-gray-200"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-orange-500 mb-2">{title}</h3>
                  <p className="text-sm text-gray-700">{description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
