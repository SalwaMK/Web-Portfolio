import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "National Engineering Diploma: Software Engineering",
      institution: "Higher Institute of Applied Sciences and Technology of Sousse",
      period: "2022 - 2025",
      description: "Graduated with Good Honors",
      highlights: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Research project on Deep Learning for Image Recognition",
        "President of AI & Data Science Club",
      ],
    },
    {
      degree: "Pre-engineering Preparatory Program: Mathematics, Physics, and Computer Science",
      institution: "Higher Institute of Applied Sciences and Technology of Sousse",
      period: "2020 - 2022",
      description: "Graduated with Good Honors",
      highlights: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Research project on Deep Learning for Image Recognition",
        "President of AI & Data Science Club",
      ],
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - DeepLearning.AI",
      year: "2024",
    },
    {
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2024",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white/30 backdrop-blur-sm" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-800">Education & Certifications</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-purple-600" size={24} />
              </div>
              <h3 className="text-slate-800">Education</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm mb-4 hover:shadow-lg transition-all border border-transparent hover:border-purple-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-slate-800">{edu.degree}</h4>
                  <span className="text-purple-600 px-3 py-1 bg-purple-100 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-700 mb-3">{edu.institution}</p>
                <p className="text-slate-600 mb-4">{edu.description}</p>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-slate-600">
                      <BookOpen size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="text-slate-800">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-purple-200 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-slate-800">{cert.title}</h4>
                    <span className="text-purple-600">{cert.year}</span>
                  </div>
                  <p className="text-slate-600">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
