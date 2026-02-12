import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, FileCheck, ServerCrash, Eye } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "ISO 27001 Certified", desc: "Information security management aligned with international standards." },
  { icon: FileCheck, title: "ITAR / EAR Compliant", desc: "Full compliance with export control regulations for defence articles." },
  { icon: ServerCrash, title: "Disaster Recovery", desc: "Multi-region redundancy with sub-minute failover for critical systems." },
  { icon: Eye, title: "Continuous Monitoring", desc: "24/7 SOC with real-time threat detection and automated incident response." },
];

const SecuritySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 font-medium mb-4">
            Security & Compliance
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Trusted at the Highest Levels
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <item.icon className="h-8 w-8 text-primary-foreground/70 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">{item.title}</h3>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
