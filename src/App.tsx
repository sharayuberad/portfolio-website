/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Cpu, 
  Code, 
  Zap, 
  Terminal, 
  User, 
  GraduationCap, 
  Award, 
  MessageSquare, 
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Globe,
  Music,
  Palette,
  Sun,
  Moon,
  Wind
} from 'lucide-react';

// --- Types ---
type Theme = 'neon-core' | 'virtual-sun' | 'ghost-shell' | 'matrix-grid' | 'neon-pastel';
interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
  details: string;
}

// --- Data ---
const SKILLS: Skill[] = [
  { 
    name: 'C Programming', 
    level: 75, 
    category: 'technical',
    details: 'Proficient in memory management, data structures, and low-level system optimization.'
  },
  { 
    name: 'Python', 
    level: 70, 
    category: 'technical',
    details: 'Experienced in automation scripts, data analysis, and rapid prototyping of algorithms.'
  },
  { 
    name: 'Electronics Concepts', 
    level: 80, 
    category: 'technical',
    details: 'Strong grasp of circuit design, signal processing, and telecommunication protocols.'
  },
  { 
    name: 'MS Office Tools', 
    level: 90, 
    category: 'technical',
    details: 'Expert in advanced Excel functions, data visualization, and professional documentation.'
  },
  { 
    name: 'Public Speaking', 
    level: 85, 
    category: 'soft',
    details: 'Confident in delivering technical presentations and leading group discussions.'
  },
  { 
    name: 'Teamwork', 
    level: 95, 
    category: 'soft',
    details: 'Natural collaborator with a focus on collective goal achievement and conflict resolution.'
  },
  { 
    name: 'Leadership', 
    level: 80, 
    category: 'soft',
    details: 'Proven ability to guide teams, delegate tasks, and maintain project momentum.'
  },
  { 
    name: 'Event Coordination', 
    level: 85, 
    category: 'soft',
    details: 'Skilled in organizing large-scale college events, logistics, and resource management.'
  },
  { 
    name: 'Problem-Solving', 
    level: 80, 
    category: 'soft',
    details: 'Analytical thinker capable of debugging complex systems and finding creative solutions.'
  },
];

const STRENGTHS = [
  "Bold & Confident",
  "Quick Learner",
  "Responsible & Disciplined",
  "Positive Attitude",
  "Good Team Player"
];

// --- Components ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-cyber-cyan z-[100] origin-left border-glow-cyan"
      style={{ scaleX }}
    />
  );
};

const Background = () => (
  <div className="fixed inset-0 z-[-1] bg-[var(--bg-primary)] overflow-hidden">
    <div className="absolute inset-0 bg-grid-tron opacity-20" />
    <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-soft-lavender/10 via-cyber-cyan/5 to-transparent" />
    <div className="scanline" />
    
    {/* Animated particles/data streams */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[1px] bg-cyber-cyan/30"
        initial={{ height: 0, top: Math.random() * 100 + '%', left: Math.random() * 100 + '%' }}
        animate={{ 
          height: [0, 100, 0],
          top: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2 + Math.random() * 4, 
          repeat: Infinity, 
          ease: "linear",
          delay: Math.random() * 5
        }}
      />
    ))}
  </div>
);

const SectionHeader = ({ title, subtitle, icon: Icon, currentTheme }: { title: string, subtitle?: string, icon: any, currentTheme?: Theme }) => (
  <div className="mb-12 relative">
    <div className="flex items-center gap-4 mb-2">
      <div className={`p-2 border border-cyber-cyan/30 rounded-sm ${currentTheme === 'neon-pastel' ? 'bg-accent-gradient' : 'bg-cyber-cyan/10'}`}>
        <Icon className={`w-6 h-6 ${currentTheme === 'neon-pastel' ? 'text-black' : 'text-cyber-cyan'}`} />
      </div>
      <h2 className={`text-4xl font-serif font-bold tracking-tight uppercase italic text-heading-gradient`}>
        {title}
      </h2>
    </div>
    {subtitle && <p className="text-white/50 text-sm ml-12 font-sans uppercase tracking-[0.2em]">{subtitle}</p>}
    <div className={`absolute -left-4 top-0 bottom-0 w-[2px] opacity-50 ${currentTheme === 'neon-pastel' ? 'bg-accent-gradient' : 'bg-gradient-to-b from-cyber-cyan to-transparent'}`} />
  </div>
);

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-6 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-2">
        <span className={`text-sm font-bold tracking-wider uppercase group-hover:text-cyber-cyan transition-colors ${skill.category === 'soft' ? 'group-hover:text-soft-lavender' : ''}`}>{skill.name}</span>
        <span className={`text-xs font-mono ${skill.category === 'soft' ? 'text-soft-lavender/60' : 'text-cyber-cyan/60'}`}>{skill.level}%</span>
      </div>
      <div className="h-1 w-full bg-white/5 border border-white/10 relative overflow-hidden">
        <motion.div 
          className={`h-full border-glow-cyan ${skill.category === 'soft' ? 'bg-soft-lavender' : 'bg-cyber-cyan'}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-20 animate-[move_2s_linear_infinite]" />
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-20 bottom-full mb-4 left-0 right-0 p-4 bg-black/90 border border-cyber-cyan/30 backdrop-blur-md tron-border pointer-events-none"
          >
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-3 h-3 text-cyber-cyan" />
              <span className="text-[10px] font-mono text-cyber-cyan/60 tracking-widest uppercase">Skill_Details</span>
            </div>
            <p className="text-xs font-mono leading-relaxed text-white/80">
              {skill.details}
            </p>
            <div className="absolute -bottom-2 left-4 w-4 h-4 bg-black border-r border-b border-cyber-cyan/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Nav = ({ currentTheme, onThemeChange }: { currentTheme: Theme, onThemeChange: (t: Theme) => void }) => {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const themes: { id: Theme, name: string, color: string }[] = [
    { id: 'neon-core', name: 'NEON-CORE', color: '#00f3ff' },
    { id: 'virtual-sun', name: 'VIRTUAL-SUN', color: '#f3f315' },
    { id: 'ghost-shell', name: 'GHOST-SHELL', color: '#b794f4' },
    { id: 'matrix-grid', name: 'MATRIX-GRID', color: '#00ff00' },
    { id: 'neon-pastel', name: 'NEON-PASTEL', color: '#b794f4' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyber-cyan flex items-center justify-center rounded-sm rotate-45 transition-colors duration-500">
            <Cpu className="w-5 h-5 text-black -rotate-45" />
          </div>
          <span className="font-serif font-black tracking-tighter text-2xl text-glow-cyan">NEON-CORE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
          {['About', 'Skills', 'Education', 'Activities'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-cyber-cyan transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-cyan transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="p-2 border border-white/10 hover:border-cyber-cyan transition-colors group"
            >
              <Palette className="w-4 h-4 group-hover:text-cyber-cyan transition-colors" />
            </button>
            
            <AnimatePresence>
              {isThemeMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-black border border-white/10 p-2 shadow-2xl backdrop-blur-xl"
                >
                  <div className="text-[10px] font-mono text-white/40 mb-2 px-2 uppercase tracking-widest">Select_Theme</div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        onThemeChange(t.id);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-2 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors hover:bg-white/5 ${currentTheme === t.id ? 'text-cyber-cyan' : 'text-white/60'}`}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                      {t.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="px-4 py-2 border border-cyber-cyan text-cyber-cyan text-xs font-bold uppercase tracking-widest hover:bg-cyber-cyan hover:text-black transition-all tron-border">
            Contact_Init
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'technical' | 'soft'>('technical');
  const [theme, setTheme] = useState<Theme>('neon-core');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen selection:bg-cyber-cyan selection:text-black">
      <ScrollProgress />
      <Background />
      <Nav currentTheme={theme} onThemeChange={setTheme} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-columns-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              System Status: Operational // User_ID: SB-2026
            </div>
            <h1 className="text-7xl md:text-9xl font-serif font-black tracking-tighter leading-none mb-6">
              SHARAYU <br />
              <span className={`italic text-heading-gradient`}>
                BERAD
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl font-sans leading-relaxed mb-8">
              <span className="text-highlight-teal">Electronics & Telecommunication</span> Engineer in training. Bridging the gap between <span className="text-highlight-pink">hardware precision</span> and <span className="text-highlight-teal">software innovation</span>.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className={`px-8 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 ${theme === 'neon-pastel' ? 'bg-accent-gradient text-black' : 'bg-cyber-cyan text-black'}`}>
                View Dossier <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-4 px-4">
                <Github className="w-5 h-5 text-white/40 hover:text-cyber-cyan cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-white/40 hover:text-cyber-cyan cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 text-white/40 hover:text-cyber-cyan cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Futuristic HUD Element */}
              <div className="absolute inset-0 border-2 border-cyber-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-cyber-magenta/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 border-4 border-cyber-cyan/10 rounded-full" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Cpu className="w-24 h-24 text-cyber-cyan mb-4 mx-auto animate-pulse" />
                  <div className="text-xs font-mono text-cyber-cyan/60 tracking-widest uppercase">Core_Processing</div>
                </div>
              </div>

              {/* Floating Data Points */}
              <motion.div 
                className="absolute top-0 right-0 p-4 bg-black/80 border border-soft-mint/30 backdrop-blur-sm tron-border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-[10px] text-soft-mint mb-1">LATENCY</div>
                <div className="text-xl font-bold">0.02ms</div>
              </motion.div>

              <motion.div 
                className="absolute bottom-10 left-0 p-4 bg-black/80 border border-soft-peach/30 backdrop-blur-sm tron-border"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="text-[10px] text-soft-peach mb-1">UPTIME</div>
                <div className="text-xl font-bold">99.9%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Bio-Data" subtitle="Personal Profile & Strengths" icon={User} currentTheme={theme} />
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="p-8 bg-white/5 border border-white/10 backdrop-blur-sm relative group tron-border"
              whileHover={{ borderColor: 'rgba(0, 243, 255, 0.5)' }}
            >
              <div className="absolute top-0 right-0 p-2 text-[10px] text-white/20 font-mono">ID: 001_BIO</div>
              <Terminal className="w-8 h-8 text-cyber-cyan mb-6" />
              <p className="text-xl leading-relaxed text-gray-300 font-sans">
                <span className="text-cyber-cyan font-mono">{">"}</span> Enthusiastic <span className="text-highlight-teal">Electronics & Telecommunication</span> student with a passion for learning and <span className="text-highlight-pink">teamwork</span>. 
                <span className="text-highlight-teal">Disciplined</span>, <span className="text-highlight-pink">confident</span>, and always ready to take initiative in high-pressure environments.
              </p>
              <div className="mt-8 pt-8 border-t border-white/10 flex gap-6">
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-sm font-bold">Maharashtra, India</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Status</div>
                  <div className="text-sm font-bold text-cyber-cyan">Active_Student</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STRENGTHS.map((strength, idx) => {
                const colors = ['text-soft-lavender border-soft-lavender/20 bg-soft-lavender/5', 'text-soft-mint border-soft-mint/20 bg-soft-mint/5', 'text-soft-peach border-soft-peach/20 bg-soft-peach/5', 'text-soft-rose border-soft-rose/20 bg-soft-rose/5'];
                const colorClass = colors[idx % colors.length];
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-4 border flex items-center gap-3 transition-colors group ${colorClass} hover:bg-opacity-10`}
                  >
                    <Zap className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-wider">{strength}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Skill_Matrix" subtitle="Technical & Cognitive Capabilities" icon={Code} currentTheme={theme} />
          
          <div className="flex gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'technical' ? 'bg-cyber-cyan text-black' : 'bg-white/5 text-white/40 hover:text-white'}`}
            >
              Technical_Core
            </button>
            <button 
              onClick={() => setActiveTab('soft')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'soft' ? 'bg-cyber-magenta text-black' : 'bg-white/5 text-white/40 hover:text-white'}`}
            >
              Soft_Protocol
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
            <AnimatePresence mode="wait">
              {SKILLS.filter(s => s.category === activeTab).map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <SkillBar skill={skill} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Education & Activities */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <SectionHeader title="Education" subtitle="Academic Trajectory" icon={GraduationCap} currentTheme={theme} />
            <div className={`relative pl-8 border-l ${theme === 'neon-pastel' ? 'border-accent-primary/30' : 'border-cyber-cyan/30'}`}>
              <div className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full shadow-[0_0_10px_var(--accent-primary)] ${theme === 'neon-pastel' ? 'bg-accent-gradient' : 'bg-cyber-cyan'}`} />
              <div className="mb-10">
                <div className="text-cyber-cyan font-mono text-xs mb-2">2024 - PRESENT</div>
                <h3 className="text-2xl font-serif font-bold mb-1 uppercase tracking-tight text-heading-gradient">Bachelor of Engineering</h3>
                <p className="text-gray-400 text-sm mb-2 font-sans italic">Electronics & Telecommunication</p>
                <p className="text-sm font-bold text-gray-300 font-sans"><span className="text-highlight-pink">PVPIT College</span>, First Year</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader title="Extra_Curricular" subtitle="Beyond the Classroom" icon={Award} currentTheme={theme} />
            <div className="space-y-4">
              {[
                { title: "Passionate Dancer", desc: "Active participation in cultural activities and performances.", icon: Music, color: 'text-soft-rose' },
                { title: "Debater", desc: "Interested in debates and complex group discussions.", icon: MessageSquare, color: 'text-soft-lavender' },
                { title: "Communicator", desc: "Regularly practicing and refining English communication.", icon: Globe, color: 'text-soft-mint' },
                { title: "Team Player", desc: "Enjoy participating in college events and collaborative tasks.", icon: User, color: 'text-soft-peach' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="p-4 bg-white/5 border border-white/10 flex gap-4 items-start group hover:border-white/30 transition-colors"
                >
                  <div className={`p-2 bg-white/5 rounded-sm transition-colors ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-mono">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-20 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className={`text-5xl font-serif font-black tracking-tighter mb-4 italic uppercase text-heading-gradient`}>
              Ready to Collaborate?
            </h2>
            <p className="text-gray-400 font-sans text-sm max-w-md mx-auto">
              Currently seeking opportunities to apply <span className="text-highlight-teal">ENTC skills</span> in real-world scenarios. Let's build the future.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 group cursor-pointer">
              <Mail className="w-5 h-5 text-cyber-cyan group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold tracking-widest uppercase group-hover:text-cyber-cyan transition-colors">Email_Me</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <Smartphone className="w-5 h-5 text-fuchsia-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold tracking-widest uppercase group-hover:text-fuchsia-400 transition-colors">Comm_Link</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <Linkedin className="w-5 h-5 text-cyber-yellow group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold tracking-widest uppercase group-hover:text-cyber-yellow transition-colors">Net_Profile</span>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase">
              © 2026 NEON-CORE // SHARAYU BERAD // ALL RIGHTS RESERVED
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-cyber-cyan/40">
              <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
              SYSTEM_ONLINE
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button 
        className="fixed bottom-8 right-8 w-14 h-14 bg-cyber-cyan text-black flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)] z-50 hover:scale-110 transition-transform"
        whileHover={{ rotate: 90 }}
      >
        <Zap className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
