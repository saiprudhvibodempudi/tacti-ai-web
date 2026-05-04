import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "1", label: "Industry Domain" },
  { value: "50+", label: "Products Delivered" },
  { value: "Global", label: "Client Reach" },
  { value: "24/7", label: "Operations" },
];

const segments = [
  { value: "Defence", label: "Primary Sector" },
  { value: "Manufacturing", label: "Core Capability" },
  { value: "AI & Tech", label: "Innovation Focus" },
  { value: "IoT", label: "Smart Solutions" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p 
            className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4 inline-block"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            About Militros
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Performance-Driven Innovation Across Sectors
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: 15 }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              whileHover={{ x: 10, rotateY: 5 }}
              className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <p className="text-muted-foreground leading-relaxed">
                We specialize in developing cutting-edge defence technology solutions that address critical security challenges. Our expertise spans autonomous systems, AI-driven platforms, and advanced manufacturing processes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: -15 }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              whileHover={{ x: -10, rotateY: -5 }}
              className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <p className="text-muted-foreground leading-relaxed">
                Through strategic partnerships and continuous innovation, we deliver mission-critical systems that enhance operational capabilities and ensure technological superiority for our clients.
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="text-2xl md:text-3xl font-serif font-bold text-accent mb-2"
                  whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Segments Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <motion.h3 
              className="text-lg font-serif font-bold text-foreground mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Key Segments
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            >
              {segments.map((segment, i) => (
                <motion.div
                  key={segment.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.1 + i * 0.1,
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="text-center p-3 sm:p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 group cursor-pointer min-w-0"
                >
                  <motion.div 
                    className="text-lg sm:text-xl font-serif font-bold text-primary mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {segment.value}
                  </motion.div>
                  <div className="text-xs sm:text-xs uppercase tracking-normal sm:tracking-widest text-muted-foreground group-hover:text-foreground transition-colors break-words">
                    {segment.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
