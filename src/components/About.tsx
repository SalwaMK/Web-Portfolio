import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Heart, Target } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches to solve complex problems",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Deeply committed to creating AI solutions that positively impact people's lives",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Dedicated to delivering high-quality work and continuous improvement",
    },
  ];

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-800">About Me</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-600 mb-6">
              As a recent graduate with a degree in Computer Science, I've developed a strong foundation 
              in software engineering principles combined with specialized expertise in artificial intelligence 
              and data science. My journey into tech began with a fascination for how data can tell stories 
              and drive meaningful decisions.
            </p>
            <p className="text-slate-600 mb-6">
              Throughout my academic career, I've worked on various projects involving machine learning, 
              natural language processing, and computer vision. I'm particularly interested in the 
              intersection of AI and practical business applications, where technology meets real-world impact.
            </p>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-purple-200"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <value.icon className="text-purple-600" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="mb-2 text-slate-800">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
