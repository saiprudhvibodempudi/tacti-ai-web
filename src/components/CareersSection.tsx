import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const positions = [
  { title: "Senior AI Engineer", team: "Autonomous Systems", location: "On-site" },
  { title: "Hardware Integration Lead", team: "Product Engineering", location: "On-site" },
  { title: "Embedded Systems Developer", team: "IoT & Electronics", location: "Hybrid" },
  { title: "Defence Systems Architect", team: "Defence Programs", location: "On-site" },
  { title: "Mechanical Design Engineer", team: "Manufacturing", location: "On-site" },
];

const CareersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
              Careers
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Join the Mission
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              We recruit exceptional engineers, researchers, and strategists committed to 
              building future-ready technology. A performance-driven culture where innovation matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { title: "Innovation-Focused", desc: "Work on technology that shapes defence, consumer electronics, and emerging tech." },
              { title: "Growth Partnership", desc: "Your growth is our growth — competitive compensation and career development." },
              { title: "Internships", desc: "Structured programs for top engineering and research students across all domains." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-card border border-border p-6"
              >
                <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              Open Positions
            </h3>
            <div className="space-y-3">
              {positions.map((pos, i) => (
                <motion.div
                  key={pos.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between bg-card border border-border p-4 hover:border-accent/40 transition-colors cursor-pointer group"
                >
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{pos.title}</h4>
                    <p className="text-xs text-muted-foreground">{pos.team} · {pos.location}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/contact">
                <Button variant="cta">Apply Now</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
