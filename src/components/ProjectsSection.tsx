import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Reconnaissance Drone Platform",
    domain: "Defence",
    description: "Autonomous UAV system with AI-driven surveillance and real-time intelligence relay for border security operations.",
  },
  {
    title: "Smart Wearable Health Monitor",
    domain: "Consumer Electronics",
    description: "IoT-enabled wearable with continuous vital monitoring, anomaly detection, and emergency alert integration.",
  },
  {
    title: "Industrial Automation Suite",
    domain: "Manufacturing",
    description: "End-to-end factory automation system combining robotics, sensor networks, and predictive maintenance AI.",
  },
  {
    title: "Tactical Communication Hub",
    domain: "Defence",
    description: "Encrypted field communication system with mesh networking for deployed units in contested environments.",
  },
  {
    title: "Electric Vehicle Control Unit",
    domain: "Product Development",
    description: "Custom ECU design with battery management, regenerative braking logic, and OTA update capability.",
  },
  {
    title: "Agricultural Automation System",
    domain: "Emerging Tech",
    description: "Precision farming platform integrating drone imagery, soil sensors, and AI-driven crop management.",
  },
];

const domainColors: Record<string, string> = {
  Defence: "bg-primary text-primary-foreground",
  "Consumer Electronics": "bg-accent text-accent-foreground",
  Manufacturing: "bg-secondary text-secondary-foreground",
  "Product Development": "bg-primary text-primary-foreground",
  "Emerging Tech": "bg-accent text-accent-foreground",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
            What We've Built
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Projects & Deployments
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-border p-6 group cursor-default hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm font-medium ${domainColors[project.domain]}`}>
                  {project.domain}
                </span>
                <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-base font-serif font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
