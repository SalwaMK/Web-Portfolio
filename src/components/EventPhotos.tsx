import React, { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Image } from "lucide-react";
import { eventPhotos } from "../data/eventPhotos";

export function EventPhotos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [failed, setFailed] = useState<Set<string>>(new Set());

  const photos = eventPhotos.map((photo) => ({
    ...photo,
    src: new URL(`../../assets/${photo.path}`, import.meta.url).href,
    date: photo.date ?? "",
  }));

  return (
    <section id="event-photos" className="py-20 px-6 bg-white/10 backdrop-blur-sm" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-slate-800">Event Photos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Photos from events, hackathons and competitions I participated in or organized.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
          {photos
            .filter((p) => !failed.has(p.path))
            .map((p) => (
            <motion.figure
              key={p.path}
              className="flex flex-col bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full bg-gray-100 aspect-square">
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover"
                  onError={() => {
                    // mark this photo as failed to prevent showing a generic placeholder
                    setFailed((prev) => {
                      const next = new Set(prev);
                      next.add(p.path);
                      return next;
                    });
                  }}
                />
              </div>
              <figcaption className="px-4 py-3 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-slate-800 font-medium">{p.caption}</div>
                    <div className="text-slate-500 text-xs">{p.date}</div>
                  </div>
                  <div className="text-purple-600">
                    <Image size={18} />
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
