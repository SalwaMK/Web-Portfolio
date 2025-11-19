import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, MapPin, Award } from "lucide-react";

export function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      title: "Microsoft ISSATSO Club",
      role: "President | AI I nstructor | Head of HR Department",
      date: "2022 - 2025",
      location: "ISSAT Sousse, Tunisia",
      description: "Actively participated in AI and cloud computing workshops. Organized seminars on emerging technologies and mentored junior members in software development practices.",
      highlights: ["AI/ML Training", "Mentorship Program", "Hackathons"],
      icon: Award,
    },
    {
      title: "Tunisia Dev Days",
      role: "Event Coordinator",
      date: "2024 - Present",
      location: "Tunis, Tunisia",
      description: "Presented on AI-powered solutions and participated in tech talks covering full-stack development, data science applications, and industry best practices.",
      highlights: ["Event Organization", "Networking", "Workshop Participation", "Industry Insights"],
      icon: Calendar,
    },
  ];

  return (
    <section id="events" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-800">Events & Experience</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-purple-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <event.icon className="text-purple-600" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-slate-800 mb-1">{event.title}</h3>
                  <p className="text-purple-600 font-medium text-sm">{event.role}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-purple-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-purple-500" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-slate-600 mb-4">{event.description}</p>

              <div className="flex flex-wrap gap-2">
                {event.highlights.map((highlight, hIndex) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.1 * index + 0.05 * hIndex, duration: 0.3 }}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                  >
                    {highlight}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
