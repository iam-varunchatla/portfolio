import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      role: 'Cloud DevOps & MLOps Specialist',
      company: 'Current Role',
      period: 'Present',
      achievements: [
        'Architected and deployed Kubernetes clusters across AWS and GCP handling 100K+ requests/day',
        'Implemented automated CI/CD pipelines using GitHub Actions and Jenkins, reducing deployment time by 70%',
        'Designed infrastructure-as-code solutions using Terraform, managing 500+ cloud resources',
        'Optimized infrastructure costs by 40% through resource planning and cloud cost management'
      ]
    },
    {
      role: 'MLOps Engineer',
      company: 'Previous Experience',
      period: '2023 - 2024',
      achievements: [
        'Developed MLOps pipelines for ML model training, validation, and deployment using Kubeflow',
        'Built automated model versioning and registry system using MLflow for reproducibility',
        'Created data pipelines using Apache Airflow for ETL and feature engineering workflows',
        'Accelerated model deployment cycle from weeks to hours through containerization and automation'
      ]
    },
    {
      role: 'DevOps & Cloud Engineer',
      company: 'Previous Experience',
      period: '2021 - 2023',
      achievements: [
        'Designed and implemented multi-environment infrastructure on AWS (dev, staging, production)',
        'Automated infrastructure provisioning and configuration management using Terraform and Ansible',
        'Established monitoring, logging, and alerting systems using ELK Stack and Grafana',
        'Led DevOps practices and tooling initiatives across engineering teams'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-text mb-12">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.8, ease: 'easeOut' }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-6px] md:left-[26px] top-2 w-3 h-3 bg-accent rounded-full border-4 border-secondary"></div>

                  <div className="bg-gradient-to-br from-white via-blue-50 to-white p-6 rounded-xl border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:translate-y-[-6px] card-3d">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-text">{exp.role}</h3>
                        <p className="text-accent font-mono">{exp.company}</p>
                      </div>
                      <span className="text-text text-sm font-mono mt-2 md:mt-0">{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-text">
                          <span className="text-accent mr-2 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
