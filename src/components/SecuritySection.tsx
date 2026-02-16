import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, FileCheck, ServerCrash, Eye } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Defence-Grade Security", desc: "End-to-end encryption and zero-trust architecture for all systems." },
  { icon: FileCheck, title: "Compliance Ready", desc: "Full compliance with defence export control and international security standards." },
  { icon: ServerCrash, title: "Disaster Recovery", desc: "Multi-region redundancy with rapid failover for mission-critical operations." },
  { icon: Eye, title: "Continuous Monitoring", desc: "24/7 real-time threat detection and automated incident response." },
];

const SecuritySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
            Security & Compliance
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            A Safe Nation Enables Progress
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="text-center p-6 bg-card border border-border hover:border-accent/30 transition-colors"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring" }}
              >
                <item.icon className="h-8 w-8 text-accent mx-auto mb-4" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2 text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
