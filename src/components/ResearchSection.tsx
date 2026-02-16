import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  {
    title: "Autonomous Systems",
    description: "Next-generation unmanned platforms with advanced perception and decision-making for defence and commercial applications.",
  },
  {
    title: "Predictive Intelligence",
    description: "Multi-source data fusion and predictive analytics for strategic threat assessment and operational planning.",
  },
  {
    title: "Electric Mobility",
    description: "Custom EV control systems, battery management, and regenerative technologies for sustainable transport.",
  },
  {
    title: "Healthcare Technology",
    description: "AI-powered diagnostic tools, smart wearables, and remote patient monitoring platforms.",
  },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
            Research & Innovation
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
            Building the Future, Not Refining the Past
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ scale: 1.02, borderColor: "hsl(28 63% 44% / 0.5)" }}
                className="bg-card border border-border p-6 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                    className="w-2.5 h-2.5 bg-accent rounded-full"
                  />
                  <h3 className="text-base font-serif font-bold text-foreground">{area.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
