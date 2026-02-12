import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="font-serif text-xl font-bold tracking-tight">
              militros<span className="text-primary-foreground/50">.ai</span>
            </Link>
            <p className="text-xs text-primary-foreground/50 mt-3 leading-relaxed">
              AI-powered defence systems for modern security operations.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-primary-foreground/70">Company</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/50">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#research" className="hover:text-primary-foreground transition-colors">Research</a></li>
              <li><a href="#careers" className="hover:text-primary-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-primary-foreground/70">Expertise</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/50">
              <li><a href="#domains" className="hover:text-primary-foreground transition-colors">Defence Systems</a></li>
              <li><a href="#domains" className="hover:text-primary-foreground transition-colors">AI Technologies</a></li>
              <li><a href="#capabilities" className="hover:text-primary-foreground transition-colors">Capabilities</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-primary-foreground/70">Contact</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/50">
              <li>info@militros.ai</li>
              <li>Secure Communications Only</li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Form</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} militros.ai — All rights reserved. Classified information policy applies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
