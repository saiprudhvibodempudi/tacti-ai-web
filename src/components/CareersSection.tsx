import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const positions = [
  { title: "Senior AI Engineer", team: "Autonomous Systems", location: "Restricted" },
  { title: "Systems Architect", team: "Defence Platforms", location: "Restricted" },
  { title: "Cybersecurity Analyst", team: "Cyber Operations", location: "Restricted" },
  { title: "Hardware Engineer", team: "Product Engineering", location: "Restricted" },
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
              We recruit exceptional engineers, researchers, and strategists committed to national security. 
              Competitive compensation, security clearance support, and work that matters.
            </p>
          </motion.div>

          {/* Why Join */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { title: "Mission-Driven", desc: "Work on technology that protects lives and secures nations." },
              { title: "Top Clearance", desc: "Security clearance sponsorship and classified project access." },
              { title: "Internships", desc: "Structured programs for top engineering and research students." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border p-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              Open Positions
            </h3>
            <div className="space-y-3">
              {positions.map((pos) => (
                <div
                  key={pos.title}
                  className="flex items-center justify-between bg-card border border-border p-4 hover:border-accent/40 transition-colors cursor-pointer group"
                >
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{pos.title}</h4>
                    <p className="text-xs text-muted-foreground">{pos.team} · {pos.location}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/contact">
                <Button variant="cta">Submit Secure Application</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
