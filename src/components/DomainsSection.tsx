import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Cpu, Settings } from "lucide-react";

const domains = [
  {
    icon: Shield,
    title: "Defence & Military Systems",
    description: "Integrated command-and-control platforms, threat detection systems, and force-multiplying technologies designed for modern battlefields.",
  },
  {
    icon: Cpu,
    title: "AI & Autonomous Technologies",
    description: "Machine learning models, autonomous decision-support systems, and predictive intelligence platforms built for defence-grade operations.",
  },
  {
    icon: Settings,
    title: "Product Engineering",
    description: "End-to-end engineering of ruggedised hardware, embedded software, and sensor systems that operate in the most demanding environments.",
  },
];

const DomainsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="domains" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
            Core Domains
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Multi-Domain Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border p-8 hover:shadow-lg transition-shadow"
            >
              <domain.icon className="h-8 w-8 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">{domain.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{domain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
