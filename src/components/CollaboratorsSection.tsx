import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Titan",
  "Indian Army",
  "Tata Steel",
  "Drone Guru",
  "Aidin Technologies Pvt Ltd",
  "Govt of Telangana",
  "C-DAC",
];

const clientTypes = [
  { label: "Startups", desc: "Early-stage ventures scaling from prototype to product-market fit." },
  { label: "Large Enterprises", desc: "Established organisations modernising legacy systems with AI and automation." },
  { label: "Multi-Nationals", desc: "Global corporations seeking integrated hardware-software solutions." },
  { label: "Defence Organisations", desc: "Government agencies and defence bodies requiring mission-critical systems." },
];

const CollaboratorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 font-medium mb-4">
            Who We Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Our Collaborators & Clients
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
            We partner with organisations of all sizes — your growth is our growth.
          </p>
        </motion.div>

        {/* Client logos / names marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="bg-primary-foreground/10 border border-primary-foreground/15 px-5 py-3 text-sm font-medium tracking-wide text-primary-foreground/90 hover:bg-primary-foreground/15 transition-colors"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {clientTypes.map((ct, i) => (
            <motion.div
              key={ct.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 + 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="border border-primary-foreground/15 rounded-sm p-6 text-center hover:bg-primary-foreground/5 transition-colors"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.5, type: "spring" }}
                className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center"
              >
                <span className="text-xl font-serif font-bold text-primary-foreground/80">
                  {ct.label.charAt(0)}
                </span>
              </motion.div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">{ct.label}</h3>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">{ct.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
