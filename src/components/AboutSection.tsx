import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "4+", label: "Industry Domains" },
  { value: "50+", label: "Products Delivered" },
  { value: "Global", label: "Client Reach" },
  { value: "24/7", label: "Operations" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
            About Militros
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Performance-Driven Innovation Across Sectors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed"
            >
              Militros is a performance-driven team focused on solving complex problems across 
              manufacturing, defence, and consumer electronics. We create innovative products 
              aligned with accelerated technological advancement.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              Our vision is to improve everyday life by delivering smarter, more efficient 
              alternatives across sectors — from defence to consumer technology. Your growth 
              is our growth.
            </motion.p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-serif font-bold text-accent">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
