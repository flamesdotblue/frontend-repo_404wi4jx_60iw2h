import { Star, MapPin, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-60" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            Premium Farmland, Single Vendor
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            Own Prime Farmland in the Heart of Farland
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:max-w-xl">
            Secure, fertile plots curated by a single trusted vendor. Ethically managed, investment‑grade land with clear titles and guided ownership.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#listings" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition">
              Browse Available Plots
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 transition">
              Request a Site Visit
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-600"/> Clear Titles</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-600"/> Prime Location</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
              alt="Lush green farmland"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
