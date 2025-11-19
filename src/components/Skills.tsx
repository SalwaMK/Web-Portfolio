import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Brain, BarChart3, Users, Code, Database, TrendingUp } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 75 },
        { name: "NLP", level: 80 },
        { name: "Computer Vision", level: 70 },
      ],
    },
    {
      icon: BarChart3,
      title: "Data Science",
      skills: [
        { name: "Python (Pandas, NumPy)", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Statistical Analysis", level: 80 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      icon: Code,
      title: "Software Development",
      skills: [
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "React & Node.js", level: 80 },
        { name: "Git & CI/CD", level: 75 },
        { name: "API Development", level: 80 },
      ],
    },
    {
      icon: Users,
      title: "Project Management",
      skills: [
        { name: "Agile/Scrum", level: 80 },
        { name: "Team Collaboration", level: 90 },
        { name: "Documentation", level: 85 },
        { name: "Stakeholder Communication", level: 80 },
      ],
    },
  ];

  const tools = [
    { name: "TensorFlow", icon: Database },
    { name: "Scikit-learn", icon: TrendingUp },
    { name: "Jupyter", icon: Code },
    { name: "Git/ Github", icon: Users },
    { name: "SQL/ PLSQL", icon: BarChart3 },
    { name: "Linux", icon: Brain },
    { name: "Flask", icon: Code },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/30 backdrop-blur-sm" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-800">Skills & Expertise</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-purple-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center"
                >
                  <category.icon className="text-purple-600" size={24} />
                </motion.div>
                <h3 className="text-slate-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="mb-3">
                    <div className="relative h-12 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-purple-100" />

                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 + 0.04 * skillIndex, ease: "easeOut" }}
                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
                      >
                        <motion.div
                          aria-hidden
                          animate={{ x: [-120, 240] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 w-28 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60"
                        />
                      </motion.div>

                      <div className="relative z-10 flex items-center h-full px-4">
                        <span className="text-slate-800 font-medium drop-shadow-sm">{skill.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center mb-8 text-slate-800">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 + 0.05 * index }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              >
                <tool.icon size={18} className="text-purple-600" />
                <span className="text-slate-700">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
