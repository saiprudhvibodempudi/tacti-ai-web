import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  {
    name: "Government of Telangana",
    logo: "/clients/government-of-telangana-logo-png_seeklogo-378992.png"
  },
  {
    name: "Indian Army",
    logo: "/clients/army.webp"
  },
  {
    name: "Indian Navy",
    logo: "/clients/navy.webp"
  },
  {
    name: "CDAC",
    logo: "/clients/cdac.webp"
  }
];

const clientTypes = [
  { label: "Government", desc: "State and central government agencies driving defence and technology initiatives." },
  { label: "Defence Forces", desc: "Indian Army, Navy, and Air Force requiring advanced defence technology solutions." },
  { label: "Research Labs", desc: "Government research institutions developing cutting-edge defence technologies." },
  { label: "Defence Industry", desc: "Defence manufacturing and technology partners in mission-critical operations." },
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex"
              >
                <div className="bg-primary-foreground/20 border border-primary-foreground/30 p-6 hover:bg-primary-foreground/30 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl flex-1 h-40 flex flex-col items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto object-contain max-w-[100px] mb-3"
                  />
                  <p className="text-primary-foreground text-sm font-medium text-center leading-tight">
                    {client.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CollaboratorsSection;
