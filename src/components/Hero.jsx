import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaAws, FaGoogle, FaWindows } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="hero-bg" />
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-text text-xl mb-2"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-text leading-tight mb-2 text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            Varun Chatla
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-accent text-2xl font-semibold mb-6"
          >
            Cloud DevOps & MLOps Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-text text-lg mb-8 leading-relaxed"
          >
            I help teams ship reliable cloud and ML systems faster. I design and build scalable cloud infrastructure, automate CI/CD pipelines, and deliver production-ready machine learning platforms.
          </motion.p>

          {/* Cloud Provider Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-6 mb-8"
          >
            <FaAws size={40} className="text-gray-600 hover:text-accent transition-colors" />
            <FaGoogle size={40} className="text-gray-600 hover:text-accent transition-colors" />
            <FaWindows size={40} className="text-gray-600 hover:text-accent transition-colors" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6"
          >
            <a href="https://github.com/2025ab05279" target="_blank" rel="noopener noreferrer" 
               className="text-text hover:text-accent transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/varun-chatla-3995871b7" target="_blank" rel="noopener noreferrer"
               className="text-text hover:text-accent transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:chatlavarun1618@gmail.com"
               className="text-text hover:text-accent transition-colors">
              <FiMail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative flex justify-center perspective"
        >
          <style>{`
            @keyframes zoomFromBottom {
              0% {
                transform: scaleY(1);
                transform-origin: bottom center;
              }
              50% {
                transform: scaleY(1.05);
                transform-origin: bottom center;
              }
              100% {
                transform: scaleY(1);
                transform-origin: bottom center;
              }
            }
            .zoom-image {
              animation: zoomFromBottom 4s ease-in-out infinite;
            }
          `}</style>
          <div className="relative rounded-3xl overflow-hidden border-2 border-gray-300/60 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-3d"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d'
            }}>
            <img
              src="/profile.jpg"
              alt="Varun Chatla - Cloud DevOps & MLOps Engineer"
              className="w-full h-full max-h-[520px] object-cover relative z-10 zoom-image"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
