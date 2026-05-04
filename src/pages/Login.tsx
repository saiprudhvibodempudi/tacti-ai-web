import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Target, Zap, Eye, Cpu } from "lucide-react";

declare global {
  interface Window {
    google: any;
  }
}

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize Google Sign-In when the script loads
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: "183370807229-klrurvtlkkc92fmouc8le4b0mk93uiqr.apps.googleusercontent.com",
          callback: handleCredentialResponse,
          auto_select: false,
          cancel_on_tap_outside: true,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-button"),
          {
            type: "standard",
            size: "large",
            theme: "outline",
            text: "signin_with",
            shape: "rectangular",
            logo_alignment: "left",
            width: 320
          }
        );
      }
    };

    // Check if Google script is already loaded
    if (window.google) {
      initializeGoogleSignIn();
    } else {
      // Wait for the script to load
      const checkGoogle = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogle);
          initializeGoogleSignIn();
        }
      }, 100);

      // Clean up interval after 10 seconds
      setTimeout(() => clearInterval(checkGoogle), 10000);
    }
  }, []);

  const handleCredentialResponse = (response: any) => {
    setIsLoading(true);
    console.log("JWT Token:", response.credential);

    // Store the token in localStorage
    localStorage.setItem('auth_token', response.credential);
    localStorage.setItem('is_authenticated', 'true');

    // For demo purposes, create mock user data from JWT
    // In production, this would come from your backend
    const mockUserData = {
      email: "user@example.com", // You could decode the JWT to get actual user info
      name: "Authenticated User",
      picture: null,
      authenticated_at: new Date().toISOString()
    };

    localStorage.setItem('user_data', JSON.stringify(mockUserData));

    // Optional: Send token to backend (commented out for demo)
    // fetch("/auth/google", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ token: response.credential })
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log("Backend authentication successful:", data);
    //   localStorage.setItem('user_data', JSON.stringify(data));
    // })
    // .catch(error => {
    //   console.error("Backend authentication failed:", error);
    //   // Continue anyway for demo purposes
    // });

    // Redirect to careers page after successful authentication
    setTimeout(() => {
      window.location.href = "/careers";
    }, 1000); // Small delay for better UX
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>

        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary/20 rotate-45"
        />

        {/* Accent color orbs */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Militros Defence</h2>
                  <p className="text-slate-400">Technology Solutions</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Secure Access
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                    Portal
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Advanced defence technology requires elite access. Authenticate to explore cutting-edge military innovations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-accent" />
                  <span className="text-slate-300">Precision Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-accent" />
                  <span className="text-slate-300">Advanced Surveillance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-slate-300">AI Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-accent" />
                  <span className="text-slate-300">Smart Technology</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Login form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            {/* Mobile header */}
            <div className="lg:hidden text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-accent/20"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-3xl font-bold text-white mb-2">Militros Access</h1>
              <p className="text-slate-400">Defence Technology Portal</p>
            </div>

            {/* Login Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-3xl blur opacity-20"></div>

              <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                {/* Security badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center mb-6"
                >
                  <div className="flex items-center gap-3 px-4 py-2 bg-slate-700/50 rounded-full border border-slate-600/50">
                    <Lock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-slate-300">SECURE ACCESS</span>
                  </div>
                </motion.div>

                {/* Welcome text */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                  <p className="text-slate-400 text-sm">
                    Sign in to access defence technology systems
                  </p>
                </div>

                {/* Loading state */}
                {isLoading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 border-4 border-slate-600 rounded-full animate-spin"></div>
                      <div className="absolute inset-0 w-12 h-12 border-4 border-accent rounded-full animate-spin border-t-transparent"></div>
                    </div>
                    <p className="text-slate-300 mt-4 font-medium">Authenticating...</p>
                    <p className="text-slate-500 text-sm mt-1">Verifying credentials</p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-6"
                  >
                    {/* Google Sign-In Button */}
                    <div className="flex justify-center">
                      <div id="google-signin-button" className="transform hover:scale-105 transition-transform duration-200"></div>
                    </div>

                    {/* Security notice */}
                    <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Shield className="w-4 h-4 text-accent" />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium text-slate-200 mb-1">Military-Grade Security</p>
                          <p className="text-slate-400 leading-relaxed">
                            Your authentication is protected by advanced encryption and defence-grade security protocols.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer text */}
                    <div className="text-center pt-4 border-t border-slate-700/50">
                      <p className="text-xs text-slate-500">
                        Authorized personnel only • © 2024 Militros Defence Systems
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
