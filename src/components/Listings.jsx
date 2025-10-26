import { MapPin, ArrowRight } from "lucide-react";

const plots = [
  {
    id: 1,
    name: "Valley View Estate",
    size: "2.5 – 5 Acres",
    price: "$28,000/acre",
    location: "Farland South, 12km to NH-16",
    image:
      "https://images.unsplash.com/photo-1460602594182-8568137446ce?q=80&w=1600&auto=format&fit=crop",
    tags: ["Irrigation nearby", "Internal road"],
  },
  {
    id: 2,
    name: "Riverbend Farms",
    size: "3 – 8 Acres",
    price: "$32,500/acre",
    location: "East Farland, near River Kora",
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1600&auto=format&fit=crop",
    tags: ["Fenced", "Water access"],
  },
  {
    id: 3,
    name: "High Plains Reserve",
    size: "4 – 6 Acres",
    price: "$24,900/acre",
    location: "North Ridge, 20km ring road",
    image:
      "https://images.unsplash.com/photo-1425934398893-310a009a77f9?q=80&w=1600&auto=format&fit=crop",
    tags: ["Drip-ready", "Power nearby"],
  },
];

export default function Listings() {
  return (
    <section id="listings" className="py-16 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Available Plots</h2>
            <p className="mt-2 text-gray-600">Handpicked inventory — limited release, first come first served.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium">
            Book a site visit <ArrowRight className="w-4 h-4"/>
          </a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plots.map((plot) => (
            <article key={plot.id} className="group bg-white border border-emerald-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={plot.image} alt={plot.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{plot.name}</h3>
                  <span className="text-emerald-700 font-semibold">{plot.price}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600 flex items-center gap-1"><MapPin className="w-4 h-4 text-emerald-600"/> {plot.location}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {plot.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{t}</span>
                  ))}
                </div>
                <div className="mt-5">
                  <a href="#contact" className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-800">
                    I'm Interested <ArrowRight className="w-4 h-4"/>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
