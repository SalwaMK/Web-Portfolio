import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Smart Stadium Dashboard",
      description: "Interactive dashboard for real-time stadium management and data visualization, built with React and modern web technologies.",
      image: "/images/stade.jpg",
      tags: ["ReactJs", "CSS", "vite"],
      github: "https://github.com/SalwaMK/SmartStadiumDashboard",
      demo: "https://example.com",
    },
    {
      title: "Football Prediction System",
      description: "ML model predicting football match outcomes using statistical analysis and historical data with Scikit-learn and PostgreSQL.",
      image: "/images/pred.jpg",
      tags: ["Python", "Flask", "Streamlit", "PostgreSQL", "Scikit-learn"],
      github: "https://github.com/SalwaMK/FootballPredictionSystem",
      demo: "https://example.com",
    },
    {
      title: "Football Recommendation Engine",
      description: "Personalized recommendation system suggesting football players and teams based on collaborative filtering and ML algorithms.",
      image: "/images/rec.jpg",
      tags: ["Python", "Flask", "Streamlit", "PostgreSQL"],
      github: "https://github.com/SalwaMK/FootballRecommendationSystem",
      demo: "https://example.com",
    },
    {
      title: "Lung Care AI",
      description: "Deep learning model for lung disease detection and diagnosis using CNN and TensorFlow medical imaging analysis.",
      image: "/images/lungs.jpg",
      tags: ["Python", "TensorFlow", "Scikit-learn"],
      github: "https://github.com/SalwaMK/LungCareAI",
    },
    {
      title: "Resume Recommendation System",
      description: "Intelligent system matching resumes to job opportunities using NLP and similarity analysis for recruitment optimization.",
      image: "/images/interview.jpg",
      tags: ["Python", "TensorFlow", "Flask", "Streamlit"],
      github: "ttps://github.com/SalwaMK/Resume-Rec-System",
    },
    {
      title: "Chatbot Multilingual Interactive",
      description: "Conversational AI chatbot supporting multiple languages using Google APIs and NLP for seamless user interactions.",
      image: "/images/chatbot.jpg",
      tags: ["Python", "Google", "Flask", "Streamlit"],
      github: "https://github.com/SalwaMK/Chatbot-Multilingual-Interactive",
    },
    {
      title: "Mapping Olive Crops",
      description: "Satellite imagery analysis and machine learning for precision agriculture, mapping and monitoring olive crop health.",
      image: "/images/olive.png",
      tags: ["Python", "Scikit-lear", "TensorFlow", "Streamlit", "Google Colab"],
      github: "https://github.com/SalwaMK/Mapping-Olive-Crops",
      demo: "https://example.com",
    },
    {
      title: "Plastic vs Jellyfish Classification",
      description: "Computer vision CNN model distinguishing between plastic pollution and jellyfish in ocean imagery for environmental monitoring.",
      image: "/images/turtle.jpg",
      tags: ["Python", "Scikit-lear", "TensorFlow", "Streamlit", "Google Colab"],
      github: "https://github.com/SalwaMK/Plastic-vs-Jellyfish-Classficiation",
    },
    {
      title: "Car Lease Platfrom",
      description: "Full-stack web application for car leasing management with booking, payment processing, and fleet inventory tracking.",
      image: "/images/car.jpg",
      tags: ["Reactjs", "PHP", "MySQL"],
      github: "https://github.com/SalwaMK/Car-Lease",
    },
    {
      title: "Bank Client Creditworthiness Prediction System",
      description: "ML predictive model assessing credit risk and client creditworthiness using financial data analysis and classification.",
      image: "/images/bank.jpg",
      tags: ["Python", "Google", "Flask", "Streamlit"],
      github: "https://github.com/SalwaMK/AI-Night-Challenge",
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-800">Featured Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden bg-white/70 backdrop-blur-sm border-purple-100 hover:shadow-2xl hover:border-purple-300 transition-all h-full group">
                <div className="aspect-video overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.1 * index + 0.1 * tagIndex, duration: 0.3 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-700 hover:bg-purple-200 hover:scale-110 transition-transform cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
