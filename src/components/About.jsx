import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #e8f4ff 50%, #f0f8ff 100%)'
    }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-text mb-8">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-text">
              <p>
                I'm a passionate Cloud DevOps and MLOps engineer with expertise in designing and 
                deploying scalable infrastructure solutions across AWS, GCP, and Azure. Currently 
                pursuing my MTech at BITS Pilani, I combine academic knowledge with practical 
                experience to solve complex engineering challenges.
              </p>

              <p>
                My journey in technology has led me to work with cutting-edge tools and platforms, 
                from containerization with Kubernetes and Docker to building comprehensive MLOps 
                pipelines with Kubeflow and MLflow. I'm particularly interested in the intersection 
                of DevOps practices and machine learning operations.
              </p>

              <p>
                I specialize in:
              </p>

              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                <li className="flex items-center">
                  <span className="text-accent mr-2">▹</span> AWS, GCP, Azure
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▹</span> Kubernetes & Docker
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▹</span> Terraform & IaC
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▹</span> CI/CD Pipelines
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▹</span> MLOps & ML Platforms
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">▹</span> Python & Automation
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border-2 border-accent/30 shadow-lg hover:shadow-2xl hover:border-accent/60 transition-all duration-500 transform hover:translate-y-[-4px] hover:scale-105 card-3d">
                <h3 className="text-xl font-semibold text-text mb-3">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-accent font-mono">MTech - BITS Pilani</h4>
                    <p className="text-text text-sm">(Pursuing)</p>
                    <p className="text-text text-sm">M.Tech in AI & ML SPECIALIZATION</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border-2 border-accent/30 shadow-lg hover:shadow-2xl hover:border-accent/60 transition-all duration-500 transform hover:translate-y-[-4px] hover:scale-105 card-3d">
                <h3 className="text-xl font-semibold text-text mb-3">Core Expertise</h3>
                <div className="space-y-2 text-sm text-text">
                  <div className="flex justify-between">
                    <span>Cloud Infrastructure</span>
                    <span className="text-accent">Expert</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kubernetes & Containers</span>
                    <span className="text-accent">Expert</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CI/CD & Automation</span>
                    <span className="text-accent">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MLOps</span>
                    <span className="text-accent">Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
