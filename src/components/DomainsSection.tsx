import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Cpu, Settings, Zap } from "lucide-react";

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
    title: "Robotics Technology",
    description: "End-to-end product engineering with hardware integration, mechanical design, and robotics-ready prototyping.",
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
  const [hoveredDomain, setHoveredDomain] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="domains" className="py-16 bg-section-alt relative overflow-hidden">
      {/* Animated flowing background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ x: backgroundX }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-transparent to-primary/30" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accent rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4 inline-block"
            initial={{ opacity: 0, x: -40, rotateZ: -5 }}
            animate={inView ? { opacity: 1, x: 0, rotateZ: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
          >
            Core Domains
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Multi-Domain Expertise
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-8">
          <AnimatePresence>
            {domains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 80, scale: 0.7, rotateY: 45 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  rotateY: 0,
                  transition: { 
                    duration: 0.8, 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100
                  }
                } : {}}
                whileHover={{ 
                  y: -12, 
                  scale: 1.08,
                  rotateY: hoveredDomain === i ? 15 : 5,
                  boxShadow: "0 25px 50px -12px hsl(28 63% 44% / 0.25)",
                  transition: { type: "spring", stiffness: 400 }
                }}
                onHoverStart={() => setHoveredDomain(i)}
                onHoverEnd={() => setHoveredDomain(null)}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`bg-card border p-8 cursor-pointer transition-all duration-300 w-full h-full ${
                  hoveredDomain === i 
                    ? 'border-accent/60 shadow-2xl shadow-accent/30 bg-gradient-to-br from-card to-accent/5' 
                    : 'border-border hover:border-accent/40'
                }`}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: hoveredDomain === i ? [0, 10, -10, 0] : 0,
                    scale: hoveredDomain === i ? 1.2 : 1,
                  }}
                  transition={{ 
                    duration: hoveredDomain === i ? 0.6 : 0.3,
                    repeat: hoveredDomain === i ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                  className="mb-5"
                >
                  <domain.icon className={`h-10 w-10 transition-colors duration-300 ${
                    hoveredDomain === i ? 'text-primary' : 'text-accent'
                  }`} strokeWidth={1.5} />
                </motion.div>
                <motion.h3 
                  className="text-base font-serif font-bold text-foreground mb-3"
                  animate={{
                    scale: hoveredDomain === i ? 1.05 : 1,
                    color: hoveredDomain === i ? "hsl(var(--primary))" : "hsl(var(--foreground))"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {domain.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-muted-foreground leading-relaxed"
                  animate={{
                    y: hoveredDomain === i ? -2 : 0,
                    opacity: hoveredDomain === i ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {domain.description}
                </motion.p>
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredDomain === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
