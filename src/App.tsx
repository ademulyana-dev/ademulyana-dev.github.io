import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Search, Lightbulb, FileText, Database, Swords, Code, Server, Award, Briefcase, ChevronRight } from 'lucide-react';

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="marquee-container bg-neon text-dark py-4 border-y-4 border-white">
      <div className="marquee-content font-pixel text-4xl tracking-widest uppercase">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
};

const PixelButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <button 
      onClick={onClick}
      className="pixel-corners-border hover:bg-white transition-colors group"
    >
      <div className="pixel-corners-inner bg-dark px-6 py-3 flex items-center justify-center group-hover:bg-white group-hover:text-dark transition-colors">
        <span className="font-pixel text-xl uppercase tracking-widest">{children}</span>
      </div>
    </button>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { 
      name: 'Tech Research & Architecture', 
      icon: <Search size={32} />,
      desc: 'Conducting technical research and designing robust system architectures.'
    },
    { 
      name: 'Product Mindset', 
      icon: <Lightbulb size={32} />,
      desc: 'Experience in security product design and user-centric development.'
    },
    { 
      name: 'IT Security Architecture', 
      icon: <Shield size={32} />,
      desc: 'Expertise in information security projects and certified domain knowledge.'
    },
    { 
      name: 'Security Documentation', 
      icon: <FileText size={32} />,
      desc: 'Documenting data security and solution schemas based on strict standards.'
    },
    { 
      name: 'Data Governance & Lifecycle', 
      icon: <Database size={32} />,
      desc: 'Building governance systems and assessing data lifecycle security.'
    },
    { 
      name: 'Attack & Defense', 
      icon: <Swords size={32} />,
      desc: 'Building capabilities and running combat simulation drills for teams.'
    },
    { 
      name: 'Security Design & Coding', 
      icon: <Code size={32} />,
      desc: 'Designing and programming custom solutions for IT security needs.'
    },
    { 
      name: 'DevSecOps & SIEM', 
      icon: <Server size={32} />,
      desc: 'Building DevSecOps platforms, managing data security, and operating SIEM.'
    }
  ];

  const projects = [
    {
      title: 'Enterprise SIEM Deployment',
      role: 'Lead Security Architect',
      desc: 'Architected and deployed a centralized SIEM solution processing 10k+ EPS, improving threat detection by 40%.'
    },
    {
      title: 'Zero Trust Network Architecture',
      role: 'Security Engineer',
      desc: 'Designed and implemented a zero-trust model across hybrid cloud infrastructure, securing critical data lifecycles.'
    },
    {
      title: 'DevSecOps Pipeline Integration',
      role: 'DevSecOps Lead',
      desc: 'Automated security scanning (SAST/DAST) into CI/CD pipelines, reducing vulnerabilities in production by 60%.'
    }
  ];

  return (
    <div className="min-h-screen crt selection:bg-neon selection:text-dark">
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-full h-full border-2 border-white pixel-corners" />
      </motion.div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full p-6 z-40 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-dark border-b-4 border-white' : 'mix-blend-difference'}`}>
        <div className="font-pixel text-2xl tracking-widest text-neon">AM_SEC v2.0</div>
        <div className="hidden md:flex gap-8 font-pixel text-xl tracking-widest">
          <a href="#about" className="hover:text-neon transition-colors">ABOUT</a>
          <a href="#expertise" className="hover:text-neon transition-colors">EXPERTISE</a>
          <a href="#projects" className="hover:text-neon transition-colors">PROJECTS</a>
          <a href="#contact" className="hover:text-neon transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 w-full"
          >
            <h2 className="font-pixel text-neon text-2xl md:text-4xl mb-4 tracking-widest">
              &gt; WHOAMI
            </h2>
            <h1 className="text-[12vw] lg:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase mb-8">
              Ade <br />
              <span className="text-outline hover:text-white transition-colors duration-500">Mulyana</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12">
              <div className="pixel-box p-6 max-w-2xl">
                <p className="font-pixel text-xl leading-relaxed text-neon">
                  IT SECURITY ENGINEER & SECURITY ARCHITECT.
                </p>
                <p className="font-pixel text-lg leading-relaxed mt-2 text-gray-300">
                  SECURING SCALABLE SYSTEMS, ARCHITECTING RESILIENT INFRASTRUCTURES, AND NEUTRALIZING THREATS.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <PixelButton onClick={() => document.getElementById('contact')?.scrollIntoView()}>CONTACT ME</PixelButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee text="DEVSECOPS • SIEM • ZERO TRUST • PENETRATION TESTING • DATA GOVERNANCE • " />

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-pixel text-neon text-3xl mb-8 tracking-widest border-b-2 border-white/20 pb-4">
            // PROFILE.DAT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-2xl md:text-4xl font-medium leading-tight">
              Security Engineer with a product mindset, technical research capabilities, and hands-on experience in information security architecture.
            </p>
            <div className="font-pixel text-xl text-gray-400 leading-relaxed space-y-6">
              <p>
                I specialize in bridging the gap between robust security implementation and seamless product development. My approach combines deep technical research with practical application.
              </p>
              <p>
                From designing DevSecOps pipelines to executing advanced attack and defense simulations, I build resilient systems that protect data lifecycles without compromising innovation or performance.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Expertise / Skills Section */}
      <section id="expertise" className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-white/5 border-y-4 border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-pixel text-neon text-3xl mb-12 tracking-widest border-b-2 border-white/20 pb-4">
            // EXPERTISE.CFG
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div 
                key={skill.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="pixel-corners-border group h-full"
              >
                <div className="pixel-corners-inner bg-dark p-6 flex flex-col items-start gap-4 group-hover:bg-neon group-hover:text-dark transition-all duration-300 h-full">
                  <div className="p-3 bg-white/10 rounded-none group-hover:bg-dark group-hover:text-neon transition-colors">
                    {skill.icon}
                  </div>
                  <h4 className="font-pixel text-xl tracking-widest font-bold leading-tight">{skill.name}</h4>
                  <p className="font-sans text-sm opacity-80 leading-relaxed mt-auto">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-pixel text-neon text-3xl mb-12 tracking-widest border-b-2 border-white/20 pb-4">
            // ACTIVE_OPERATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="border-2 border-white/20 p-8 hover:border-neon transition-colors group relative overflow-hidden bg-dark">
                <div className="absolute top-0 left-0 w-full h-1 bg-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <Briefcase className="text-neon mb-6" size={32} />
                <h4 className="text-2xl font-bold mb-2 group-hover:text-neon transition-colors">{project.title}</h4>
                <p className="font-pixel text-neon mb-4 tracking-widest">{project.role}</p>
                <p className="text-gray-400 leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pixel-box p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-pixel text-neon text-3xl mb-4 tracking-widest flex items-center gap-4">
                <Award size={32} />
                // CREDENTIALS
              </h3>
              <p className="text-xl text-gray-300">
                Certified in industry-leading security domains. Continuous learning and adaptation to emerging threats.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {['CISSP (Placeholder)', 'CEH (Placeholder)', 'AWS Security'].map(cert => (
                <span key={cert} className="px-4 py-2 border border-neon text-neon font-pixel tracking-widest">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Big Typography Section */}
      <section className="py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-[12vw] leading-none font-bold tracking-tighter text-outline-neon opacity-50 hover:opacity-100 transition-opacity duration-500">
            SECURE
          </h2>
          <h2 className="text-[12vw] leading-none font-bold tracking-tighter">
            BY DESIGN
          </h2>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t-4 border-white p-6 md:p-12 bg-dark relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 max-w-7xl mx-auto">
          <div>
            <h3 className="font-pixel text-neon text-2xl mb-6 tracking-widest">
              INITIATE_CONTACT
            </h3>
            <a href="mailto:hello@ademulyana.com" className="text-4xl md:text-6xl font-bold hover:text-neon transition-colors flex items-center gap-4 group">
              LET'S TALK
              <ChevronRight className="transform group-hover:translate-x-4 transition-transform" size={48} />
            </a>
          </div>
          
          <div className="flex flex-col gap-4 font-pixel text-xl tracking-widest text-left md:text-right">
            <a href="https://github.com/ademulyana-dev" target="_blank" rel="noreferrer" className="hover:text-neon transition-colors flex items-center gap-2 md:justify-end">
              <span className="text-gray-500">//</span> GITHUB
            </a>
            <a href="https://x.com/konang_id" target="_blank" rel="noreferrer" className="hover:text-neon transition-colors flex items-center gap-2 md:justify-end">
              <span className="text-gray-500">//</span> TWITTER
            </a>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 font-pixel text-gray-500 max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} ADE MULYANA</p>
          <p>ENCRYPTED & SECURED // BASED IN INDONESIA</p>
        </div>
      </footer>
    </div>
  );
}
