import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Designing for a smarter, safer, future-ready tomorrow. Innovation happens by focusing on building the future — not refining the past.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To improve everyday life by delivering smarter, more efficient alternatives across sectors ranging from defence to consumer technology.",
  },
  {
    icon: Lightbulb,
    title: "Core Belief",
    text: "A safe nation enables progress. We're a future-ready, innovation-focused team driven by growth partnership — your growth is our growth.",
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="text-center p-8"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2, type: "spring" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center"
              >
                <item.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
