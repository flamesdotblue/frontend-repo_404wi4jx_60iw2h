import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anita Rao",
    quote:
      "Documentation was spotless and the team guided us through every step. We started planting within two weeks.",
  },
  {
    name: "Karthik Menon",
    quote:
      "Transparent pricing and zero middlemen. The soil quality exceeded expectations for our mango orchard.",
  },
  {
    name: "Meera & Vikram",
    quote:
      "Loved the location and access to water. We now spend weekends on the farm and plan long-term cultivation.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-emerald-900 text-emerald-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3">
          <Star className="w-5 h-5 text-amber-300"/>
          <h2 className="text-2xl md:text-3xl font-semibold">What Buyers Say</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl p-6 bg-emerald-800/40 ring-1 ring-white/10">
              <blockquote className="text-emerald-100">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-emerald-200">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
