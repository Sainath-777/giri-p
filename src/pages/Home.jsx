import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Download, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import avatarImg from '../assets/Sai.png';

// ─── Typing Effect Hook ──────────────────────────────────────────────────────
const useTypingEffect = (roles, speed = 90, pause = 1800) => {
  const [display, setDisplay] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timer;
    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % roles.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx, roles, speed, pause]);

  return display;
};

// ─── Hero Avatar ─────────────────────────────────────────────────────────────
const HeroAvatar = () => (
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto flex items-center justify-center">
    <div
      className="absolute inset-0 rounded-full border border-dashed border-primary/30 rotate-slow"
      style={{ margin: '-16px' }}
    />
    <div
      className="absolute inset-0 rounded-full border border-primary/20 rotate-reverse"
      style={{ margin: '-8px' }}
    />
    <div className="relative w-full h-full rounded-full glow-pulse overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #13132B 0%, #1A1A3E 100%)',
        border: '2px solid rgba(124,115,245,0.5)',
      }}
    >
      <img
        src={avatarImg}
        alt="Gayam Sainath Reddy"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,115,245,0.12) 0%, transparent 70%)' }}
      />
    </div>

    {/* Floating skill badges */}
    <motion.div
      className="absolute -right-4 top-8 bg-cardBg border border-borderColor rounded-lg px-3 py-1.5 text-xs font-mono text-textMuted shadow-lg"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="text-primary">RAG</span> Pipelines
    </motion.div>
    <motion.div
      className="absolute -left-6 bottom-12 bg-cardBg border border-borderColor rounded-lg px-3 py-1.5 text-xs font-mono text-textMuted shadow-lg"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    >
      <span className="text-green-400">▶</span> FastAPI
    </motion.div>
    <motion.div
      className="absolute left-4 -top-4 bg-cardBg border border-borderColor rounded-lg px-3 py-1.5 text-xs font-mono text-textMuted shadow-lg"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    >
      🧠 LLM Agents
    </motion.div>
  </div>
);

// ─── Skills (from resume) ─────────────────────────────────────────────────────
const skills = [
  { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'FastAPI',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'LangChain',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TensorFlow',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'OpenCV',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  { name: 'PostgreSQL',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Next.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Docker',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Pinecone',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HuggingFace',  icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
  { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Flask',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

// ─── Animated section header ──────────────────────────────────────────────────
const SectionHeader = ({ tag, title, subtitle }) => (
  <div className="mb-8">
    <p className="text-xs font-mono text-primary tracking-[0.2em] uppercase mb-3">{tag}</p>
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary leading-tight">{title}</h2>
    {subtitle && <p className="text-textMuted font-body mt-3 max-w-xl">{subtitle}</p>}
  </div>
);

// ─── Stat Card ────────────────────────────────────────────────────────────────
const StatCard = ({ value, label }) => (
  <div className="bg-cardBg border border-borderColor rounded-xl p-5 text-center hover:border-primary/40 transition-colors">
    <div className="text-2xl font-heading font-bold gradient-text">{value}</div>
    <div className="text-xs font-mono text-textMuted mt-1">{label}</div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const ROLES = ['AI Engineer', 'AIML Engineer'];

const Home = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: '-80px' });
  const skillsInView = useInView(skillsRef, { once: true, margin: '-80px' });
  const typedRole = useTypingEffect(ROLES);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-80px)] flex items-center py-8 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 w-full items-center">

          {/* Left */}
          <motion.div
            className="space-y-7 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-2">
              <motion.p
                className="font-mono text-primary text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-textPrimary leading-[1.05]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Sainath Reddy
              </motion.h1>
              {/* Typing Effect Role */}
              <motion.div
                className="text-xl md:text-2xl font-heading font-semibold gradient-text h-8 flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <span>{typedRole}</span>
                <span className="ml-0.5 inline-block w-0.5 h-6 bg-primary animate-pulse" />
              </motion.div>
            </div>

            <motion.p
              className="font-body text-textMuted text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Team Lead of an MSME-funded live healthcare platform. Building and deploying production-grade AI systems —
              RAG pipelines, LLM agents, and scalable Python backends.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/Sainath_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-[#8e84f5] text-white rounded-lg font-medium text-sm transition-colors duration-300 shadow-lg shadow-primary/20 active:scale-95"
              >
                <Download size={16} /> Download Resume
              </a>
              <a href="https://github.com/Sainath-777" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-borderColor hover:border-primary/50 rounded-lg text-textMuted hover:text-textPrimary text-sm transition-all"
              >
                <FaGithub size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/sainath-reddy-g-3263b324b/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-borderColor hover:border-primary/50 rounded-lg text-textMuted hover:text-textPrimary text-sm transition-all"
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <Link to="/contact"
                className="flex items-center gap-2 px-4 py-2.5 border border-borderColor hover:border-primary/50 rounded-lg text-textMuted hover:text-textPrimary text-sm transition-all"
              >
                <Mail size={16} /> Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Avatar */}
          <motion.div
            className="flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroAvatar />
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────────── */}
      <section
        ref={aboutRef}
        className="py-14 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-borderColor/20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={aboutInView ? 'show' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <SectionHeader
              tag="About Me"
              title="Who I Am"
              subtitle="I don't just study AI — I ship it to production."
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-5 font-body text-textMuted leading-relaxed">
              <p>
                I'm <span className="text-textPrimary font-medium">Gayam Sainath Reddy</span> — an AI/ML Engineer and Python Backend Developer based in Hyderabad, India,
                specialising in building and deploying production-grade AI systems that solve real-world problems.
              </p>
              <p>
                As <span className="text-primary font-medium">Team Lead</span> of an{' '}
                <span className="text-textPrimary font-medium">MSME-funded (₹9 Lakhs) live healthcare platform</span>, I architected
                and shipped a full-stack AI teleconsultation system serving real doctors and patients — from system design to deployment.
              </p>
              <p>
                Beyond the team, I've independently built a{' '}
                <span className="text-primary">multi-tenant RAG SaaS platform</span> achieving{' '}
                <span className="text-textPrimary font-medium">sub-400ms hybrid retrieval</span>, and a{' '}
                <span className="text-primary">clinical decision support system</span> with{' '}
                <span className="text-textPrimary font-medium">93% Top-1 accuracy</span> on rare disease diagnosis using LLMs.
              </p>
              <p>
                My stack spans <span className="text-primary">LangChain, FAISS, Pinecone, FastAPI, Groq, and Gemini</span> — and I believe great AI engineering
                is half great models, half great systems.
              </p>

              <div className="pt-4">
                <Link to="/projects"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium text-sm"
                >
                  See what I've built <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <StatCard value="4+" label="Production AI Systems" />
                <StatCard value="₹9L" label="MSME Funded Platform" />
                <StatCard value="93%" label="RAG Diagnosis Accuracy" />
                <StatCard value="400ms" label="Sub-400ms RAG Retrieval" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────────────────── */}
      <section
        ref={skillsRef}
        className="py-14 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-borderColor/20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? 'show' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <SectionHeader
              tag="Tech Stack"
              title="What I Work With"
              subtitle="Production-tested tools across AI/ML, backend engineering, and data systems."
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
            variants={containerVariants}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 bg-cardBg border border-borderColor hover:border-primary/40 rounded-xl transition-colors shadow-sm group cursor-default"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-9 h-9 mb-2.5 object-contain transition-all duration-300"
                  style={{ filter: skill.name === 'Flask' || skill.name === 'Next.js' ? 'invert(1)' : 'none' }}
                  loading="lazy"
                />
                <span className="text-[10px] font-mono text-textMuted group-hover:text-textPrimary transition-colors text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── FEATURED PROJECTS PREVIEW ─────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-borderColor/20">
        <div className="flex items-end justify-between mb-8">
          <SectionHeader tag="Projects" title="Featured Work" />
          <Link
            to="/projects"
            className="hidden sm:flex items-center gap-2 text-sm text-textMuted hover:text-primary transition-colors font-mono"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'DocuMind Enterprise',
              tag: 'Multi-tenant RAG SaaS API',
              desc: 'Production-grade RAG SaaS with 3-stage hybrid retrieval (BM25 + Semantic + Cohere Rerank), achieving sub-400ms latency and semantic Redis caching.',
              stack: ['FastAPI', 'Pinecone', 'Redis', 'Celery', 'Gemini', 'Cohere'],
              status: 'Deployed',
            },
            {
              title: 'Doc2U — AI Healthcare Platform',
              tag: 'MSME Funded · ₹9 Lakhs · Team Lead',
              desc: 'Live teleconsultation platform with AI-driven triage, 25+ REST APIs, JWT multi-role auth, and appointment management — serving real doctors and patients.',
              stack: ['FastAPI', 'PostgreSQL', 'Next.js', 'SQLAlchemy', 'JWT'],
              status: 'Deployed',
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-cardBg border border-borderColor rounded-xl p-6 card-hover"
            >
              <div className="text-xs font-mono text-primary mb-2">{p.tag}</div>
              <h3 className="text-lg font-heading font-semibold text-textPrimary mb-3">{p.title}</h3>
              <p className="text-sm text-textMuted font-body mb-5 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map(t => (
                  <span key={t} className="text-[11px] font-mono bg-darkBg border border-borderColor text-textMuted px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <Link to="/projects" className="flex items-center gap-1.5 text-sm text-textMuted hover:text-primary transition-colors">
                View project <ExternalLink size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 sm:hidden text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-primary font-mono">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
