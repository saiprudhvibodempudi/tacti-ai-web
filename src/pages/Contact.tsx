import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message submitted successfully. We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-4">
                Contact Us
              </p>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground mb-10">
                Interested in collaborating? Reach out and our team will respond within 48 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input required placeholder="Your name" maxLength={100} className="bg-card" />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                      Organisation
                    </label>
                    <Input placeholder="Company / Organisation" maxLength={100} className="bg-card" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input required type="email" placeholder="you@company.com" maxLength={255} className="bg-card" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                    Subject *
                  </label>
                  <Input required placeholder="What's this about?" maxLength={200} className="bg-card" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us about your project or enquiry..."
                    rows={5}
                    maxLength={2000}
                    className="bg-card resize-none"
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
