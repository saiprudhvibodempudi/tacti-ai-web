import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leaders = [
  { name: "Gen. R. Harmon (Ret.)", role: "Chief Executive Officer", bio: "35+ years in defence strategy and operations leadership." },
  { name: "Dr. S. Krishnamurti", role: "Chief Technology Officer", bio: "Pioneer in applied AI for autonomous military systems." },
  { name: "Col. M. Vasquez (Ret.)", role: "VP, Defence Programs", bio: "Former program director for multi-billion dollar weapon systems." },
  { name: "A. Chen, PhD", role: "Head of Research", bio: "Leading researcher in adversarial ML and signal processing." },
];

const LeadershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Experienced Command
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-section-alt border border-border rounded-full flex items-center justify-center">
                <span className="text-xl font-serif font-bold text-steel">
                  {leader.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground">{leader.name}</h3>
              <p className="text-xs uppercase tracking-wider text-accent mt-1">{leader.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
