import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  {
    title: "Autonomous Systems",
    description: "Next-generation unmanned platforms with advanced perception and decision-making capabilities for contested environments.",
  },
  {
    title: "Predictive Intelligence",
    description: "Multi-source data fusion and predictive analytics for strategic threat assessment and early-warning systems.",
  },
  {
    title: "Secure Communications",
    description: "Quantum-resistant encryption protocols and hardened communication frameworks for classified operations.",
  },
  {
    title: "Cyber Defence",
    description: "AI-powered threat hunting, network anomaly detection, and automated incident response for critical infrastructure.",
  },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 bg-section-alt">
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
            Advancing the Frontier of Defence Technology
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-card border border-border p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
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
