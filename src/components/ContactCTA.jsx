import { Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactCTA() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    // Simulate a network request
    setTimeout(() => setStatus("success"), 900);
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Book a Private Site Visit</h2>
        <p className="mt-2 text-gray-600">
          Share your details and our team will call you with pricing, directions, and documentation.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <input required type="text" placeholder="Full name" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
            <input required type="tel" placeholder="Phone number" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
          </div>
          <input type="email" placeholder="Email (optional)" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
          <textarea placeholder="Tell us what you're looking for (acreage, budget, crops)" rows={4} className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
          <button disabled={status!=="idle"} className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white px-5 py-3 font-medium hover:bg-emerald-700 disabled:opacity-60">
            {status === "submitting" ? "Submitting..." : status === "success" ? "Request Sent" : "Request a Call"}
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center gap-6 text-emerald-700">
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 hover:text-emerald-800"><Phone className="w-4 h-4"/> +1 (234) 567‑890</a>
          <a href="mailto:hello@farland.prem" className="inline-flex items-center gap-2 hover:text-emerald-800"><Mail className="w-4 h-4"/> hello@farland.prem</a>
        </div>
      </div>
    </section>
  );
}
