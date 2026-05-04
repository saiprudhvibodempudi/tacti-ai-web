import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Target, Eye, Lightbulb, Heart } from "lucide-react";

const values = [
];

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section className="py-24 bg-section-alt relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ rotateY }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse delay-150" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateZ: 5 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                rotateZ: 0,
                transition: { 
                  duration: 0.8, 
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 80
                }
              } : {}}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateZ: activeIndex === i ? 2 : 0,
                transition: { type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setActiveIndex(i)}
              onHoverEnd={() => setActiveIndex(null)}
              className={`text-center p-8 rounded-2xl cursor-pointer transition-all duration-300 w-full md:w-80 lg:w-96 ${
                activeIndex === i 
                  ? 'bg-card shadow-2xl shadow-accent/20 border border-accent/30' 
                  : 'bg-card/50 backdrop-blur-sm border border-border/30'
              }`}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={inView ? { 
                  scale: 1, 
                  rotate: 0, 
                  opacity: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: i * 0.2 + 0.3, 
                    type: "spring",
                    stiffness: 100
                  }
                } : {}}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: activeIndex === i ? 15 : 0,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === i 
                    ? 'bg-gradient-to-br from-accent to-primary shadow-lg' 
                    : 'bg-accent/10'
                }`}
              >
                <motion.div
                  animate={{
                    rotate: activeIndex === i ? 360 : 0,
                    scale: activeIndex === i ? [1, 1.2, 1] : 1
                  }}
                  transition={{ 
                    duration: activeIndex === i ? 0.6 : 0,
                    repeat: activeIndex === i ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                >
                  <item.icon className={`h-7 w-7 transition-colors ${
                    activeIndex === i ? 'text-white' : 'text-accent'
                  }`} strokeWidth={1.5} />
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-lg font-serif font-bold text-foreground mb-3"
                animate={{
                  scale: activeIndex === i ? 1.05 : 1,
                  color: activeIndex === i ? "hsl(var(--primary))" : "hsl(var(--foreground))"
                }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-sm text-muted-foreground leading-relaxed"
                animate={{
                  y: activeIndex === i ? -2 : 0,
                  color: activeIndex === i ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"
                }}
                transition={{ duration: 0.3 }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
