import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-3 bg-purple-50 text-purple-700 rounded-full mb-4 text-sm sm:text-base font-semibold tracking-wide shadow-sm"
          >
            SOFTWARE ENGINEER
          </motion.div>

          <h1 className="mb-2 text-slate-800 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-black tracking-tight text-4xl sm:text-6xl md:text-7xl">
              Salwa Mekni
            </span>
          </h1>

        
          
          <p className="text-slate-600 mb-8 max-w-lg text-base sm:text-lg">
            A software engineer passionate about AI, data science, and product-focused engineering.
            I build intelligent, user-centered solutions that make a measurable difference.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all">
                <Mail className="mr-2" size={18} />
                Get in Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="border-purple-200 hover:bg-purple-50 shadow-sm hover:shadow-md transition-all">
                <a href={new URL('../../assets/Salwa-Makni-CV-EN.pdf', import.meta.url).href} download>
                  <Download className="mr-2" size={18} />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/SalwaMK"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-purple-600 shadow-sm hover:shadow-md transition-all"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/salwa-makni"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-purple-600 shadow-sm hover:shadow-md transition-all"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:salwamekni8@gmail.com"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-purple-600 shadow-sm hover:shadow-md transition-all"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Animated rotating gradient rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full blur-3xl opacity-30"
            />
            
            {/* Pulsing outer ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40"
            />
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20" />
              <img
                src={new URL('../../assets/salwa1.jpg', import.meta.url).href}
                alt="salwa"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </motion.div>

            {/* Enhanced Floating badge animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-purple-200"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  y: [0, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-purple-600"
              >
                🤖 AI
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-pink-200"
            >
              <motion.div
                animate={{ 
                  rotate: [0, -10, 0, 10, 0],
                  y: [0, 5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="text-pink-600"
              >
                📊 Data
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
