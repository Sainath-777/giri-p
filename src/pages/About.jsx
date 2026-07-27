import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiTensorflow, SiOpencv, SiFlask, 
  SiFastapi, SiPostgresql, SiMysql, SiScikitlearn, 
  SiNumpy, SiPandas, SiStreamlit, SiDocker, SiGit
} from 'react-icons/si';

// Use a placeholder for LangChain/FAISS/HuggingFace if they don't have react-icons easily available, or similar icons
import { FaBrain, FaDatabase, FaRobot } from 'react-icons/fa'; 

const skills = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
  { name: 'Flask', icon: SiFlask, color: '#ffffff' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'LangChain', icon: FaRobot, color: '#121212' },
  { name: 'FAISS', icon: FaDatabase, color: '#0052CC' },
  { name: 'HuggingFace', icon: FaBrain, color: '#FFD21E' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

const About = () => {
  return (
    <div className="w-full flex flex-col justify-center h-full">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-2">About Me</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-lightText dark:text-textPrimary">
          Who I Am
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
        {/* Bio Text */}
        <div className="space-y-6 text-lightText dark:text-textMuted font-body text-base md:text-lg leading-relaxed">
          <p>
            I'm an AI/ML Engineer and Backend Developer based in Hyderabad, India.
          </p>
          <p>
            I build intelligent systems — from RAG pipelines and LLM agents to REST APIs and computer vision tools. I led an MSME-funded (₹9 Lakhs) healthcare teleconsultation platform as Team Lead, handling everything from system architecture to backend development.
          </p>
          <p>
            I learn by building real things, not just following tutorials.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div>
          <h4 className="text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">Tech Stack</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex flex-col items-center justify-center p-4 bg-lightCard dark:bg-cardBg border border-borderColor hover:border-primary rounded-xl transition-all hover:-translate-y-1 shadow-sm hover:shadow-md cursor-default group"
                >
                  <Icon size={32} className="mb-3 text-textMuted group-hover:text-primary transition-colors" />
                  <span className="text-xs font-mono font-medium text-lightText dark:text-textPrimary text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
