import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowUpRight, ExternalLink } from "lucide-react";

const newsItems = [];

const categoryColors = {
  "Company News": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Technology": "bg-green-500/10 text-green-400 border-green-500/20",
  "Awards": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Partnerships": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Research": "bg-red-500/10 text-red-400 border-red-500/20"
};

const NewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Achievements
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              & Milestones
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our breakthrough innovations, successful partnerships, and recognition in defence technology excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full">
                {news.image && (
                  <div className="mb-6">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-contain rounded-lg border border-border"
                    />
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[news.category as keyof typeof categoryColors]}`}>
                    {news.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {news.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {news.excerpt}
                </p>

                <div className="flex items-center justify-end mt-auto">
                  <a 
                    href={news.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all hover:text-accent/80"
                  >
                    <span className="font-medium">Read More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 max-w-2xl mx-auto border border-accent/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with Defence Technology
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest industry insights and Militros innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
