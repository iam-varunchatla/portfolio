import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #e8f4ff 50%, #f0f8ff 100%)'
    }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text mb-4">
            Get In Touch
          </h2>

          <p className="text-text text-lg mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether you have a question, 
            want to discuss a project, or just want to say hi, feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:translate-y-[-6px] card-3d"
            >
              <FiMail className="text-accent mb-4 mx-auto" size={32} />
              <h3 className="text-text font-semibold mb-2">Email</h3>
              <a 
                href="mailto:chatlavarun1618@gmail.com"
                className="text-text hover:text-accent transition-colors"
              >
                chatlavarun1618@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:translate-y-[-6px] card-3d"
            >
              <FiMapPin className="text-accent mb-4 mx-auto" size={32} />
              <h3 className="text-text font-semibold mb-2">Location</h3>
              <p className="text-text">India</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center gap-8 mb-12"
          >
            <a
              href="https://github.com/2025ab05279"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors transform hover:scale-110"
            >
              <FiGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/varun-chatla-3995871b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors transform hover:scale-110"
            >
              <FiLinkedin size={32} />
            </a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            href="mailto:chatlavarun1618@gmail.com"
            className="inline-block px-8 py-3 bg-transparent border-2 border-accent text-accent rounded hover:bg-accent/10 transition-all font-mono text-lg"
          >
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
