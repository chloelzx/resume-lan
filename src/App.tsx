/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Workflow, 
  Layers, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Target,
  Users,
  BarChart3,
  Globe,
  BookOpen,
  Heart,
  Briefcase,
  Code,
  Share2
} from 'lucide-react';

// Import data and types
import { 
  INTERN_EXP, 
  CAMPUS_EXP, 
  INTEREST_EXP, 
  SKILLS, 
  CONTACT_INFO,
  Experience 
} from './data';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
    <div className="text-slate-900 font-bold tracking-tighter text-xl">
      ZI<span className="text-blue-600">XIN</span> LAN
    </div>
    <div className="hidden md:flex gap-8 text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">
      <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
      <a href="#journey" className="hover:text-blue-600 transition-colors">Journey</a>
      <a href="#skills" className="hover:text-blue-600 transition-colors">Capabilities</a>
      <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20 bg-white text-slate-900 overflow-hidden relative">
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60" />
    <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-slate-50 rounded-full blur-[120px] opacity-60" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl z-10"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
        <Zap size={14} /> 2026 Graduate | AI Product Manager
      </div>
      
      <h1 className="text-6xl md:text-[100px] font-extrabold tracking-tight leading-[0.85] mb-10 text-slate-900">
        DRIVING <span className="text-blue-600">CERTAINTY</span> <br />
        IN COMPLEX SYSTEMS.
      </h1>
      
      <p className="text-xl md:text-3xl text-slate-500 font-medium max-w-3xl leading-tight mb-14">
        深耕产业底座，连接 AI 前沿。<br />
        在<span className="text-slate-900">复杂环境</span>中交付<span className="text-blue-600">落地价值</span>。
      </p>
      
      <div className="flex flex-wrap gap-8">
        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest">
          <Cpu size={18} className="text-blue-600" /> 7年控制专业背景
        </div>
        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest">
          <Layers size={18} className="text-blue-600" /> 制造业数字化洞察
        </div>
        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest">
          <Globe size={18} className="text-blue-600" /> 硅谷 AI 实践
        </div>
      </div>
    </motion.div>
  </section>
);

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number; key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-10 pb-16 border-l-2 border-slate-100 last:pb-0"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
    
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
      <div>
        <h3 className="text-2xl font-black text-slate-900 mb-1">{exp.title}</h3>
        <p className="text-blue-600 font-bold text-base uppercase tracking-wider">{exp.subtitle}</p>
      </div>
      <span className="text-slate-400 text-xs font-bold mt-2 md:mt-0 bg-slate-50 px-3 py-1 rounded-full">{exp.period}</span>
    </div>
    
    <p className="text-slate-500 mb-6 text-base max-w-3xl leading-relaxed">{exp.description}</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {exp.impact.map((item, i) => (
        <div key={i} className="flex gap-3 text-slate-500 leading-relaxed">
          <ChevronRight size={16} className="text-blue-600 shrink-0 mt-1" />
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </div>
    
    <div className="flex flex-wrap gap-2">
      {exp.tags.map(tag => (
        <span key={tag} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[9px] font-black uppercase tracking-[0.1em] text-slate-400">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const JourneySection = () => {
  const [activeTab, setActiveTab] = useState<'intern' | 'campus' | 'interest'>('intern');

  const tabs = [
    { id: 'intern', label: '实习实战', icon: <Briefcase size={16} /> },
    { id: 'campus', label: '校园领导力', icon: <BookOpen size={16} /> },
    { id: 'interest', label: '兴趣与特质', icon: <Heart size={16} /> }
  ];

  const content = {
    intern: INTERN_EXP,
    campus: CAMPUS_EXP,
    interest: INTEREST_EXP
  };

  return (
    <section id="journey" className="py-32 px-6 md:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            THE <span className="text-slate-200 italic">JOURNEY</span>
          </h2>
          
          <div className="flex p-1 bg-slate-50 rounded-2xl border border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-white text-blue-600 shadow-sm border border-slate-100' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {content[activeTab].map((exp, i) => (
                <ExperienceCard key={exp.title} exp={exp} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-32 px-6 md:px-24 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-black mb-24 tracking-tighter text-right">
        CORE <span className="text-slate-700 italic">CAPABILITIES</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {SKILLS.map((cat, i) => (
          <div key={i} className="group">
            <h3 className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-10 pb-5 border-b border-slate-800 group-hover:border-blue-400 transition-colors">
              {cat.title}
            </h3>
            <ul className="space-y-6">
              {cat.skills.map(skill => (
                <li key={skill} className="text-slate-400 text-lg flex items-center gap-4 hover:text-white transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactFooter = () => (
  <footer id="contact" className="py-32 px-6 md:px-24 bg-white border-t border-slate-100">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
      <div>
        <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">LET'S CONNECT</h2>
        <p className="text-slate-500 text-xl max-w-md leading-relaxed">
          {CONTACT_INFO.slogan}
        </p>
        <div className="flex gap-6 mt-10">
          <a href="#" className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
            <Code size={24} />
          </a>
          <a href="#" className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
            <Share2 size={24} />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-5 text-slate-900 hover:text-blue-600 transition-all group">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email</p>
            <p className="font-bold text-lg">{CONTACT_INFO.email}</p>
          </div>
        </a>
        
        <div className="flex items-center gap-5 text-slate-900 group">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
            <Phone size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Phone</p>
            <p className="font-bold text-lg">{CONTACT_INFO.phone}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-5 text-slate-900 group">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Location</p>
            <p className="font-bold text-lg">{CONTACT_INFO.location}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="max-w-6xl mx-auto mt-32 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
      <p>© 2026 ZIXIN LAN. ALL RIGHTS RESERVED.</p>
      <p className="text-blue-600/30">PRECISION · LOGIC · IMPACT</p>
    </div>
  </footer>
);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-600">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <JourneySection />
              <SkillsSection />
            </main>
            <ContactFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
