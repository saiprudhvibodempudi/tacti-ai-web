import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Brain, FlaskConical, CheckCircle, Wrench, CircuitBoard, Radio } from "lucide-react";

const capabilities = [
  {
    icon: Lock,
    title: "Tactical Safety Systems",
    points: ["Border deployment ready", "Surveillance integration", "Defence-grade encryption"],
  },
  {
    icon: Brain,
    title: "AI-First Architecture",
    points: ["Real-time inference", "Edge computing support", "Adaptive learning models"],
  },
  {
    icon: FlaskConical,
    title: "Field-Tested Engineering",
    points: ["Extreme environment certified", "MIL-STD compliant", "Redundant fail-safes"],
  },
  {
    icon: Wrench,
    title: "Hardware Integration",
    points: ["Mechanical design", "Electronic design", "Manufacturing integration"],
  },
  {
    icon: CircuitBoard,
    title: "IoT & Embedded Systems",
    points: ["Smart sensor networks", "Connected devices", "Industrial automation"],
  },
  {
    icon: Radio,
    title: "Secure Communications",
    points: ["Encrypted channels", "Tactical networking", "Remote operations"],
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
            Built for Complex Problem-Solving
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="border-t-2 border-accent pt-8 group"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <cap.icon className="h-7 w-7 text-accent mb-4 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-4">{cap.title}</h3>
              <ul className="space-y-3">
                {cap.points.map((point, j) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.1 + j * 0.05 + 0.3 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {point}
                  </motion.li>
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
