import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { BackgroundEffects } from "./components/BackgroundEffects";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer className="bg-white/50 backdrop-blur-sm py-8 mt-20 border-t border-purple-100/50">
          <div className="max-w-6xl mx-auto px-6 text-center text-slate-600">
            <p>© 2025 Salwa Mekni. Built with passion and React.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
