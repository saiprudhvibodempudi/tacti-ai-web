import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Cpu, Settings, Smartphone, Zap } from "lucide-react";

const domains = [
  {
    icon: Shield,
    title: "Defence Systems",
    description: "Future-ready reconnaissance, intelligence, surveillance, and border deployment systems used by defence organisations.",
  },
  {
    icon: Cpu,
    title: "AI & Emerging Tech",
    description: "Machine learning platforms, autonomous decision-support systems, and predictive intelligence for mission-critical operations.",
  },
  {
    icon: Settings,
    title: "Manufacturing Technology",
    description: "End-to-end product engineering with hardware integration, mechanical design, and manufacturing-ready prototyping.",
  },
  {
    icon: Smartphone,
    title: "Consumer Electronics",
    description: "Smart wearables, IoT systems, and consumer devices designed for performance and everyday utility.",
  },
  {
    icon: Zap,
    title: "Product Development",
    description: "From concept to market — electric vehicles, healthcare tech, robotics, and industrial automation solutions.",
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

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsl(28 63% 44% / 0.15)" }}
              className="bg-card border border-border p-6 hover:border-accent/40 transition-colors cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <domain.icon className="h-8 w-8 text-accent mb-5" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-sm font-serif font-bold text-foreground mb-2">{domain.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{domain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
