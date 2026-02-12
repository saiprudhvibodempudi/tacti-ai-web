import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
            About militros.ai
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Engineering the Future of National Defence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-muted-foreground leading-relaxed">
              militros.ai is a defence technology company dedicated to developing AI-powered systems 
              that protect national security interests. We operate at the intersection of artificial 
              intelligence, military engineering, and strategic defence operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to deliver field-tested, mission-critical platforms that enable 
              governments and defence agencies to maintain strategic superiority. Every system 
              we build meets the highest standards of security, reliability, and operational readiness.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
            {[
              { value: "12+", label: "Active Programs" },
              { value: "99.9%", label: "System Uptime" },
              { value: "NATO", label: "Standards Compliant" },
              { value: "24/7", label: "Operations Centre" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-serif font-bold text-foreground">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
