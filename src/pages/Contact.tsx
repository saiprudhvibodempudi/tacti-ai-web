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
      toast.success("Message submitted securely. We will respond through verified channels.");
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
                Secure Contact
              </p>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Initiate Contact
              </h1>
              <p className="text-muted-foreground mb-10">
                All communications are processed through secure channels. 
                Provide your details below and our team will respond within 48 hours through verified means.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input required placeholder="Name" maxLength={100} className="bg-card" />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                      Organisation *
                    </label>
                    <Input required placeholder="Organisation" maxLength={100} className="bg-card" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                    Official Email *
                  </label>
                  <Input required type="email" placeholder="email@domain.gov" maxLength={255} className="bg-card" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                    Subject *
                  </label>
                  <Input required placeholder="Subject" maxLength={200} className="bg-card" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    required
                    placeholder="Describe your enquiry. Do not include classified information."
                    rows={5}
                    maxLength={2000}
                    className="bg-card resize-none"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Do not submit classified or sensitive national security information through this form.
                </p>
                <Button type="submit" variant="cta" size="lg" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Secure Message"}
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
