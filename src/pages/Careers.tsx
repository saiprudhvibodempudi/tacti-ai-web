import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, Target, Zap, Eye, Cpu, Users, Award, Briefcase, MapPin, Plus, X, Edit, ExternalLink, Flame, Handshake, Lightbulb, BadgeCheck, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LINKEDIN_JOBS_URL = "https://www.linkedin.com/company/virinnovations/jobs/";

const Careers = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAddJobForm, setShowAddJobForm] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [jobs, setJobs] = useState<any[]>([]);

  // New job form state
  const [newJob, setNewJob] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    jdFile: null as File | null,
    requirements: [''],
    applyLink: ''
  });

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('is_authenticated') === 'true';
    const userRole = localStorage.getItem('user_role');
    
    console.log('Careers - Auth Status:', authStatus);
    console.log('Careers - User Role:', userRole);
    
    setIsAuthenticated(authStatus);
    setIsAdmin(authStatus && userRole === 'admin');

    // Load jobs from localStorage or set default jobs
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
      try {
        const parsedJobs = JSON.parse(storedJobs);
        setJobs(parsedJobs || []);
      } catch (error) {
        console.error('Error parsing jobs from localStorage:', error);
        setJobs([]);
      }
    } else {
      // Set default sample jobs if no jobs exist
      const defaultJobs = [
        {
          title: 'Senior Software Engineer',
          department: 'Engineering',
          location: 'Hyderabad',
          type: 'Full-time',
          description: 'We are looking for a skilled software engineer to join our defence technology team.',
          requirements: ['5+ years of experience', 'Strong programming skills', 'Security clearance'],
          applyLink: '#'
        },
        {
          title: 'Defence Systems Analyst',
          department: 'Operations',
          location: 'Bangalore',
          type: 'Full-time',
          description: 'Analyze and optimize defence systems for maximum efficiency and reliability.',
          requirements: ['3+ years of experience', 'Defense industry knowledge', 'Analytical skills'],
          applyLink: '#'
        }
      ];
      setJobs(defaultJobs);
      localStorage.setItem('jobs', JSON.stringify(defaultJobs));
    }
  }, []);

  // Listen for storage changes to sync with navbar
  useEffect(() => {
    const handleStorageChange = () => {
      const authStatus = localStorage.getItem('is_authenticated') === 'true';
      const userRole = localStorage.getItem('user_role');
      
      console.log('Careers - Storage Change - Auth Status:', authStatus);
      console.log('Careers - Storage Change - User Role:', userRole);
      
      setIsAuthenticated(authStatus);
      setIsAdmin(authStatus && userRole === 'admin');
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically for auth changes
    const interval = setInterval(handleStorageChange, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleAdminLogin = () => {
    if (adminUsername === 'admin' && adminPassword === 'admin123') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleAddJob = async () => {
    // For new jobs, require JD file. For editing jobs, JD file is optional
    const isNewJob = editingIndex === null;
    if (newJob.title && newJob.department && (isNewJob ? newJob.jdFile : true)) {
      let jdFileData = null;
      
      // Convert file to base64 if it exists
      if (newJob.jdFile) {
        jdFileData = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve({
            name: newJob.jdFile?.name,
            type: newJob.jdFile?.type,
            data: reader.result
          });
          reader.readAsDataURL(newJob.jdFile as File);
        });
      }
      
      const jobData = { 
        ...newJob, 
        requirements: newJob.requirements.filter(req => req.trim() !== ''),
        jdFile: jdFileData || (editingIndex !== null ? jobs[editingIndex].jdFile : null)
      };
      
      let updatedJobs;
      if (editingIndex !== null) {
        // Edit existing job
        updatedJobs = [...jobs];
        updatedJobs[editingIndex] = jobData;
      } else {
        // Add new job
        updatedJobs = [...jobs, jobData];
      }
      
      setJobs(updatedJobs);
      localStorage.setItem('jobs', JSON.stringify(updatedJobs));
      setNewJob({
        title: '',
        department: '',
        location: '',
        type: 'Full-time',
        jdFile: null,
        requirements: [''],
        applyLink: ''
      });
      setEditingIndex(null);
      setShowAddJobForm(false);
    }
  };

  const handleEditJob = (index: number) => {
    const jobToEdit = jobs[index];
    setNewJob({
      title: jobToEdit.title,
      department: jobToEdit.department,
      location: jobToEdit.location,
      type: jobToEdit.type,
      jdFile: null, // Reset file input when editing
      requirements: [...jobToEdit.requirements],
      applyLink: jobToEdit.applyLink || ''
    });
    setEditingIndex(index);
    setShowAddJobForm(true);
  };

  const handleDeleteJob = (index: number) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  };

  const addRequirement = () => {
    setNewJob({ ...newJob, requirements: [...newJob.requirements, ''] });
  };

  const updateRequirement = (index: number, value: string) => {
    const updatedReqs = [...newJob.requirements];
    updatedReqs[index] = value;
    setNewJob({ ...newJob, requirements: updatedReqs });
  };

  const removeRequirement = (index: number) => {
    setNewJob({ ...newJob, requirements: newJob.requirements.filter((_, i) => i !== index) });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Why Join Us */}
      <section className="pt-24 pb-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">Careers</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Why Join Us?</h1>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                whileHover={{ y: -4 }}
                className="lg:col-span-3 bg-card border border-border rounded-2xl p-7"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">About Militros</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Militros, we are a team of driven pioneers working together to create meaningful impact. Our diverse professionals, brought together from different cultures and backgrounds across the country, share a common goal: to innovate and contribute to national security through cutting-edge technology.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                whileHover={{ y: -4 }}
                className="lg:col-span-3 bg-card border border-border rounded-2xl p-7"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
                  <motion.div whileHover={{ y: -3, scale: 1.01 }} className="rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                    <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2"><Flame className="w-4 h-4 text-accent" />Passion</h3>
                    <p className="text-sm text-muted-foreground">Driven energy to solve meaningful problems with commitment and purpose.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -3, scale: 1.01 }} className="rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                    <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2"><Handshake className="w-4 h-4 text-accent" />Integrity</h3>
                    <p className="text-sm text-muted-foreground">Honest actions, accountability, and trust in every decision we make.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -3, scale: 1.01 }} className="rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                    <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-accent" />Innovation</h3>
                    <p className="text-sm text-muted-foreground">Creative thinking and bold engineering to build next-generation solutions.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -3, scale: 1.01 }} className="rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                    <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-accent" />Quality</h3>
                    <p className="text-sm text-muted-foreground">High standards in design, execution, reliability, and performance.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -3, scale: 1.01 }} className="rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                    <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-accent" />Growth</h3>
                    <p className="text-sm text-muted-foreground">Continuous learning, skill-building, and long-term career progression.</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-7"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Learn and Grow</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gain new skills and knowledge while working on projects that challenge and inspire.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-7"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Innovate and Lead</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Contribute to cutting-edge advancements in robotics, automation, and defence technologies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.36 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-7"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Make an Impact</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Be part of something bigger. Your work here directly or indirectly strengthens national security.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="mt-6 bg-gradient-to-r from-accent/10 to-primary/10 border border-border rounded-2xl p-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                We believe in providing equal opportunities to talented individuals from all backgrounds and experiences. If someone is passionate about technology, innovation, and making a difference, Militros is the place for him. Shape the future of technology with us. Join our team and embark on a career that truly matters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings - Main Content */}
      <section className="pt-12 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Open Positions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Current opportunities to join our defence technology mission. Use admin login in the header to manage jobs.
            </p>
            {isAdmin && (
              <div className="mt-6">
                <button
                  onClick={() => setShowAddJobForm(true)}
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Add New Job Opening
                </button>
              </div>
            )}
          </motion.div>

          {(!jobs || jobs.length === 0) ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">No Open Positions</h3>
              <p className="text-muted-foreground mb-6">
                We're not currently hiring, but check back soon for exciting opportunities in defence technology.
              </p>
              {!isAdmin && (
                <p className="text-sm text-muted-foreground">
                  Admin login required to add job openings
                </p>
              )}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {jobs && jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{job.title}</h3>
                      <p className="text-accent font-medium">{job.department}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      {isAdmin && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditJob(index)}
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                            title="Edit job"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteJob(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            title="Delete job"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {job.description && (
                    <p className="text-muted-foreground mb-6">{job.description}</p>
                  )}

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                    <ul className="space-y-1">
                      {(job.requirements || []).map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                    <div className="flex items-center gap-3">
                      {job.jdFile && (
                        <button
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = job.jdFile.data;
                            link.download = job.jdFile.name;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                          className="border border-border hover:bg-accent/5 text-foreground px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                        >
                          Download JD
                        </button>
                      )}
                      <button
                        onClick={() => job.applyLink && window.open(job.applyLink, '_blank')}
                        className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LinkedIn Jobs Callout */}
      <section className="pt-0 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center bg-card border border-border rounded-2xl p-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Check Out Our Job Openings On LinkedIn
            </h1>
            <p className="text-muted-foreground mb-6">
              Browse current opportunities and apply directly through our official LinkedIn jobs page.
            </p>
            <a
              href={LINKEDIN_JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View LinkedIn Jobs
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      
      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-card p-8 rounded-2xl border border-border max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Admin Login</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Username</label>
                <input
                  type="text"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                  placeholder="Enter password"
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-sm text-center">{loginError}</p>
              )}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleAdminLogin}
                  className="flex-1 bg-accent hover:bg-accent/90 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowAdminLogin(false)}
                  className="flex-1 border border-border hover:bg-accent/5 text-foreground py-2 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Job Form Modal */}
      {isAdmin && showAddJobForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-card p-8 rounded-2xl border border-border max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {editingIndex !== null ? 'Edit Job Opening' : 'Add New Job Opening'}
              </h3>
              <button
                onClick={() => {
                  setShowAddJobForm(false);
                  setEditingIndex(null);
                  setNewJob({
                    title: '',
                    department: '',
                    location: '',
                    type: 'Full-time',
                    jdFile: null,
                    requirements: [''],
                    applyLink: ''
                  });
                }}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Job Title</label>
                  <input
                    type="text"
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                    placeholder="e.g. Senior Software Engineer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Department</label>
                  <input
                    type="text"
                    value={newJob.department}
                    onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                    placeholder="e.g. Engineering"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                  <select
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                  >
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Type</label>
                  <select
                    value={newJob.type}
                    onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                Job Description (JD) File {editingIndex === null ? '*' : '(optional - leave empty to keep current)'}
              </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setNewJob({ ...newJob, jdFile: file });
                      }
                    }}
                    className="hidden"
                    id="jd-file-upload"
                  />
                  <label
                    htmlFor="jd-file-upload"
                    className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none cursor-pointer hover:border-accent/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {newJob.jdFile ? newJob.jdFile.name : 'Choose JD file (PDF, DOC, DOCX)'}
                    </span>
                  </label>
                  {newJob.jdFile && (
                    <button
                      type="button"
                      onClick={() => setNewJob({ ...newJob, jdFile: null })}
                      className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {editingIndex === null ? 'Upload a detailed job description file (required)' : 'Upload new JD file or leave empty to keep current file'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Apply Link</label>
                <input
                  type="url"
                  value={newJob.applyLink}
                  onChange={(e) => setNewJob({ ...newJob, applyLink: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                  placeholder="https://example.com/apply/job-title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Requirements</label>
                {newJob.requirements.map((req, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => updateRequirement(index, e.target.value)}
                      className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:border-accent outline-none"
                      placeholder={`Requirement ${index + 1}`}
                    />
                    {newJob.requirements.length > 1 && (
                      <button
                        onClick={() => removeRequirement(index)}
                        className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={addRequirement}
                  className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Requirement
                </button>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleAddJob}
                  className="flex-1 bg-accent hover:bg-accent/90 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  {editingIndex !== null ? 'Update Job' : 'Add Job'}
                </button>
                <button
                  onClick={() => {
                    setShowAddJobForm(false);
                    setEditingIndex(null);
                    setNewJob({
                      title: '',
                      department: '',
                      location: '',
                      type: 'Full-time',
                      jdFile: null,
                      requirements: [''],
                      applyLink: ''
                    });
                  }}
                  className="flex-1 border border-border hover:bg-accent/5 text-foreground py-2 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Careers;
