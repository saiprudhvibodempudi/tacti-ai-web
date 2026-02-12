import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Brain, FlaskConical, CheckCircle } from "lucide-react";

const capabilities = [
  {
    icon: Lock,
    title: "Military-Grade Security",
    points: ["End-to-end encryption", "Zero-trust architecture", "Air-gapped deployments"],
  },
  {
    icon: Brain,
    title: "AI-First Architecture",
    points: ["Real-time inference", "Edge computing support", "Adaptive learning models"],
  },
  {
    icon: FlaskConical,
    title: "Field-Tested Systems",
    points: ["Extreme environment certified", "MIL-STD compliant", "Redundant fail-safes"],
  },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Built for the Most Demanding Operations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border-t-2 border-accent pt-8"
            >
              <cap.icon className="h-7 w-7 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-serif font-bold text-foreground mb-4">{cap.title}</h3>
              <ul className="space-y-3">
                {cap.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-olive mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
