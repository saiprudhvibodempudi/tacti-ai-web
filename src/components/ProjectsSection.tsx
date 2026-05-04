import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Zap, Target, Shield, Wrench, Brain, CircuitBoard, Lock } from "lucide-react";

const productCategories = [
  {
    id: "robotics",
    title: "Robotics – UGV / RCWS",
    icon: Wrench,
    products: [
      {
        title: "Multi Utility Unmanned Ground Vehicle (MU-UGV)",
        image: "/project-images/mugv.png",
        description: "Robotic Platform for Multi Utility application targeted towards Payload delivery, Ordnance Disposal and Cas Evac. Payload capability of 120 Kgs & speed of 9 kmph. Wireless Communication: Secure RF link and compatible for Connecting to Army Radio sets. Output Streams: Video and telemetry Data. Attachments: Robotic arm, Ground Penetrating RADAR, Tethered Drone Power Supply Unit. Supplied to Indian Army and Secured Joint development Partner Status For this Product with Indian Army",
        specs: ["Payload: 120 Kgs", "Speed: 9 kmph", "Secure RF Communication", "Video & Telemetry", "Robotic Arm", "Ground Penetrating RADAR"]
      },
      {
        title: "Tactical Combat Robot",
        image: "/project-images/tacticalcombatrobot.png",
        description: "Robots don't bleed. Offensive Robot used to gather intelligence and engage targets in case of Requirement & use in War Scenarios, Counter Terrorism and Counter Insurgency Operations where soldiers usually are under fire. Can Save Lives of Front-Line Soldiers.",
        specs: ["EO-IR System", "LMG & MMG Compatible", "Control Range: 3 Km", "Target Detection", "Payload Delivery: 60 kgs", "Smart Radio Link"]
      },
      {
        title: "Ground Control System (GCS)",
        image: "/project-images/tcsgcs.png",
        description: "Advanced Ground Control System for comprehensive command and control of Tactical Combat Robot operations. Features real-time video streaming, telemetry data monitoring, and intuitive control interfaces for seamless remote operation in tactical environments. Integrated with TCR for enhanced battlefield coordination.",
        specs: ["Real-time Video Feed", "Telemetry Monitoring", "Remote Control Interface", "TCR Integration", "Battlefield Coordination", "Secure Communication"]
      },
      {
        title: "Smart Target System",
        image: "/project-images/smarttargetsystem.png",
        description: "A cutting-edge mobile robotic target platform designed to simulate real combat scenarios in all terrains and weather conditions. Combines smart automation, robust design, and real-time feedback for enhanced firing range training and tactical evaluation.",
        specs: ["Mobile Platform", "Armour Protection (5.56/7.62/9mm)", "GPS Navigation", "Self-healing Mannequins", "1hr Battery Backup", "Real-time Mapping"]
      }
    ]
  },
  {
    id: "iot",
    title: "Internet of Things",
    icon: CircuitBoard,
    image: "/dti-images/internetofthings.png",
    products: [
      {
        title: "AI Based automated Target tracking NSVT for TK-90",
        image: "/project-images/nsvt.png",
        description: "An IP-65 rated autonomous drone detection and neutralization system using AI-powered vision, seamlessly integrated with the T-90 AA turret for real-time threat engagement comprising the EOIR and GCS.",
        specs: ["AI-Driven Detection", "Real-time Tracking", "Integrated Turret Control", "EO-IR System", "Ethernet & USB", "70m Range"]
      },
      {
        title: "Integrated Fire Detection and suppression System",
        image: "/project-images/firedetectionandsupression.png",
        description: "The primary objective of IFDSS is to provide a rapid, reliable, and automated fire detection and suppression solution for armored and military vehicles, ensuring the safety of personnel and protection of critical systems during combat or operational scenarios.",
        specs: ["IR Flame Sensors", "Thermal Detection", "Automated Suppression", "Audio-Visual Alerts", "Up to 8 Sensors", "IP65 Protection"]
      },
      {
        title: "Roads that Honk",
        image: "/project-images/roadsthathonk.png",
        description: "An innovative road-safety intervention deploying radar-enabled smart poles on hazardous hairpin bends (e.g. Jammu-Srinagar highway), one of the world's deadliest routes. These poles measure vehicle speed, communicate across bends, and emit a loud honking alert to oncoming drivers, prompting them to slow down before risk zones.",
        specs: ["Speed Sensing Radar", "180m Range", "P10 LED Traffic Light", "Solar Power Backup", "-40°C to +50°C", "30°×16° Field of View"]
      },
      {
        title: "81mm Mortar Telemetry Bomb",
        image: "/project-images/mortartelemetrybomb.png",
        description: "A telemetry-enabled 81mm mortar bomb designed for live tracking of projectile flight in real time. It transmits encrypted GNSS-based positional data to a receiver station for trajectory analysis and training support.",
        specs: ["GNSS Tracking", "≤5m Accuracy", "VHF/UHF Transmission", "5km LoS Range", "Telemetry Data Output", "IP65 Receiver"]
      },
    ]
  },
  {
    id: "simulators",
    title: "Simulators",
    icon: Brain,
    products: [
      {
        title: "Simple Driving Simulator",
        image: "/project-images/simpledrivingsimulator.png",
        description: "A portable, steel-framed driving simulator equipped with essential vehicle controls and a 32\" display. Designed to train learners in basic handling and maneuvering techniques in a controlled, fuel-free environment.",
        specs: ["Dimensions: 1800L×1000W×1800H mm", "Steel Frame", "32\" LED Display", "Steering, Gear, Accelerator", "Adjustable Seat", "1 KVA UPS"]
      },
      {
        title: "Universal Driving Simulator",
        image: "/project-images/universaltraining.png",
        description: "A full-scale simulator replicating military vehicle's cabins, designed to train drivers in diverse terrains, weather conditions, & tactical scenarios. Includes instructor control, real-time feedback, & customizable training modules.",
        specs: ["Full-scale Cabin", "Multiple Terrain Types", "Weather Simulation", "Instructor Control", "Performance Tracking", "Audio Effects"]
      },
      {
        title: "Recovery Training Simulator",
        image: "/project-images/armyvehicletrainingsimulators.png",
        description: "Advanced recovery training simulator for military vehicle operators, focusing on vehicle recovery techniques, towing operations, and emergency response procedures in various terrain conditions.",
        specs: ["Recovery Operations", "Towing Training", "Emergency Response", "Terrain Simulation", "Instructor Control", "Performance Metrics"]
      },
      {
        title: "Hill Driving Training Simulator",
        image: "/project-images/armyvehicletrainingsimulators.png",
        description: "Specialized simulator for hill driving training, designed to prepare military drivers for challenging mountain terrains, steep gradients, and adverse weather conditions encountered in high-altitude operations.",
        specs: ["Hill Terrain Simulation", "Gradient Training", "Weather Effects", "Altitude Simulation", "Safety Systems", "Real-time Feedback"]
      }
    ]
  },
  {
    id: "fire-control",
    title: "Fire Control Systems",
    icon: Lock,
    products: [
      {
        title: "ASTRA-E",
        image: "/project-images/astra.png",
        description: "ASTRA-E is a lightweight, AI-powered electro-optic module equipped with picatinny rail for easy mount. It integrates real-time human detection, laser range finding, and wireless communication to assist shooters with precision targeting and commander-level situational awareness.",
        specs: ["<800g Weight", "50mm Lens Camera", "10 TOPS AI Processor", "3.2\" Display", "Laser Range Finder", "Secure Wireless"]
      },
      {
        title: "EO-IR System",
        image: "/project-images/eoir system.png",
        description: "A compact EOIR payload combining HD day optical zoom camera, thermal imaging, and laser range finding for day/night surveillance and AI-based target tracking. Designed for turret, UGV, RCWS and perimeter security integration.",
        specs: ["1080p @ 60fps", "40x Optical Zoom", "LWIR Thermal", "Laser Range Finder", "AI Detection", "Ethernet & USB"]
      },
      {
        title: "Remote Controlled Weapon System – LMG/MMG",
        image: "/project-images/remotecontrolledweaponsystem.png",
        description: "Remote Controlled Weapon System (RCWS) is a modular, AI enabled enemy detection and tracking system that can be controlled and fired at the enemy via GCS from distance of up to 1 KM.",
        specs: ["Modular Platform", "LMG/MMG Compatible", "1 KM Range", "AI Detection", "Solar Power Compatible", "IP Compatible"]
      },
      {
        title: "Ten AI Weapon System (TAIWS)",
        image: "/project-images/taiws.png",
        description: "TAIWS is AI-based weapon system designed to enhance border surveillance and counter-infiltration operations. The system integrates advanced secondary vision technology (thermal and optical sensors) with a machine gun to enable target detection and engagement in low-visibility, rugged terrains like those along the LoC.",
        specs: ["AI Integration", "Thermal Camera (2km)", "Optical Camera", "LoC Surveillance", "IP65 Rating", "Machine Gun Integration"]
      }
    ]
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("robotics");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const selectedCategoryData = productCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-section-alt relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
            Our Product Offerings
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Defence Technology Solutions
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {productCategories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;

            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'bg-card border border-border hover:border-accent text-foreground hover:text-accent'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {category.title}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {selectedCategoryData?.products.map((product, i) => {
            const isHovered = hoveredProduct === i;

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative group cursor-pointer"
                onHoverStart={() => setHoveredProduct(i)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Main Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-card border border-border rounded-2xl p-6 group-hover:shadow-2xl group-hover:shadow-accent/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Product Image */}
                  {product.image && (
                    <div className="mb-4 h-40 overflow-hidden rounded-lg">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20"></div>
                  </div>

                  {/* Product Title */}
                  <motion.h3
                    className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors relative z-10"
                    animate={isHovered ? { x: 2 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-sm text-muted-foreground leading-relaxed mb-4 relative z-10"
                    animate={isHovered ? { opacity: 0.8 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.description}
                  </motion.p>

                  {/* Specifications */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-xs font-semibold text-accent uppercase tracking-widest">Key Specifications</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {product.specs.map((spec, specIndex) => (
                        <motion.div
                          key={specIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                          transition={{ duration: 0.3, delay: specIndex * 0.05 }}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 bg-accent rounded-full"></div>
                          <span>{spec}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Details */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 border-t border-border/50 overflow-hidden"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-accent">
                        <Target className="w-3 h-3" />
                        <span>Defence Ready</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        <Shield className="w-3 h-3" />
                        <span>Military Grade</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
