import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Listings from "./components/Listings";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-gray-900">
          Farland Premium
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#listings" className="text-gray-600 hover:text-gray-900">Plots</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          <a href="#" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Book Visit</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-inter text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Listings />
        <Testimonials />
        <ContactCTA />
      </main>
      <footer className="border-t border-gray-100 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Farland Premium. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
