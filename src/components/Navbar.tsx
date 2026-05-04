import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Domains", href: "#domains" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('is_authenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      // Store authentication
      localStorage.setItem('is_authenticated', 'true');
      localStorage.setItem('user_role', 'admin');

      // Close modal and update state
      setLoginModalOpen(false);
      setIsAuthenticated(true);
      setLoginError('');
      setUsername('');
      setPassword('');
      
      // Redirect to careers page
      if (location.pathname !== '/careers') {
        navigate('/careers');
      }
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('is_authenticated');
    localStorage.removeItem('user_role');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // If on a different route, navigate to home first
      if (window.location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleLogoClick = () => {
    // Scroll to top and navigate to home page
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  // Check if we're on careers page or related pages
  const isCareersRelated = location.pathname === '/careers';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={handleLogoClick} className="flex items-center gap-2 bg-transparent border-none cursor-pointer">
          <span className="text-2xl font-bold" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            Militros
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            )
          )}

          {/* Conditional login/logout or get in touch */}
          {isCareersRelated ? (
            isAuthenticated ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut size={14} />
                Logout
              </Button>
            ) : (
              <Dialog open={loginModalOpen} onOpenChange={setLoginModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="cta" size="sm" className="flex items-center gap-2">
                    <LogIn size={14} />
                    Admin Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Admin Login</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Username</label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                        placeholder="Enter username"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                        placeholder="Enter password"
                      />
                    </div>
                    {loginError && (
                      <p className="text-red-500 text-sm text-center">{loginError}</p>
                    )}
                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={handleLogin}
                        className="flex-1 bg-accent hover:bg-accent/90 text-white py-2 rounded-lg font-medium transition-colors"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => {
                          setLoginModalOpen(false);
                          setUsername('');
                          setPassword('');
                          setLoginError('');
                        }}
                        className="flex-1 border border-border hover:bg-accent/5 text-foreground py-2 rounded-lg font-medium transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )
          ) : (
            <Link to="/contact">
              <Button variant="cta" size="sm">Get in Touch</Button>
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-6 pt-2">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground border-b border-border last:border-0"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => {
                  handleNavClick(link.href);
                  setOpen(false);
                }}
                className="block py-3 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground border-b border-border last:border-0 bg-transparent border-none cursor-pointer text-left w-full"
              >
                {link.label}
              </button>
            )
          )}

          {/* Mobile login/logout or get in touch */}
          {isCareersRelated ? (
            isAuthenticated ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="mt-4 w-full flex items-center gap-2"
              >
                <LogOut size={14} />
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setLoginModalOpen(true);
                  setOpen(false);
                }}
                variant="cta"
                size="sm"
                className="mt-4 w-full flex items-center gap-2"
              >
                <LogIn size={14} />
                Admin Login
              </Button>
            )
          ) : (
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button variant="cta" size="sm" className="mt-4 w-full">Get in Touch</Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
