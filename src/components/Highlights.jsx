import { Leaf, Shield, MapPin, CheckCircle } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Fertile Soil",
    desc: "Rich loam and black cotton soil suitable for horticulture and cash crops.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    desc: "Easy highway access, water sources nearby, and strong rural infrastructure.",
  },
  {
    icon: Shield,
    title: "Clear Documentation",
    desc: "Single-vendor assurance with title verification and guided registration.",
  },
  {
    icon: CheckCircle,
    title: "Ready to Cultivate",
    desc: "Fenced boundaries, internal roads, and drip-ready water points on select plots.",
  },
];

export default function Highlights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Why Buy With Us</h2>
        <p className="mt-2 text-gray-600 md:max-w-2xl">
          We curate limited premium farmland parcels with end-to-end guidance — from due diligence to after-sale support.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition bg-white">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
