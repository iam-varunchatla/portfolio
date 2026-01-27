import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: 'Kubernetes-Native MLOps Platform',
      description: 'End-to-end MLOps platform for automated ML model training and deployment with auto-scaling capabilities. Reduced model inference latency by 60% through optimization and caching.',
      tech: ['Kubernetes', 'Docker', 'MLflow', 'Python', 'Airflow', 'FastAPI'],
      achievements: [
        'Automated daily model retraining with drift detection',
        'Reduced deployment time from 2 weeks to 2 hours',
        '99.9% model serving availability'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Multi-Cloud Infrastructure Automation',
      description: 'Enterprise-grade infrastructure-as-code solution supporting seamless deployment across AWS and GCP with 150+ reusable Terraform modules.',
      tech: ['Terraform', 'Ansible', 'AWS', 'GCP', 'Python', 'Terratest'],
      achievements: [
        'Reduced environment setup time by 90%',
        'Eliminated manual configuration drift',
        '100% reproducible infrastructure deployments'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'CI/CD Pipeline for Data Science Teams',
      description: 'Comprehensive continuous integration and deployment pipeline with data quality checks, model validation, and automated deployment for ML models.',
      tech: ['Jenkins', 'GitHub Actions', 'Docker', 'Python', 'pytest', 'Great Expectations'],
      achievements: [
        'Reduced bugs reaching production by 85%',
        'Automated testing for ML model accuracy and performance',
        'Integrated with Slack for real-time notifications'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-Time Log Analytics Platform',
      description: 'Distributed log aggregation and analysis system processing 10M+ events per day with real-time alerting and visualization.',
      tech: ['ELK Stack', 'Kafka', 'Python', 'Grafana', 'Prometheus'],
      achievements: [
        'Processes 10M+ events daily',
        'Real-time anomaly detection',
        'Custom dashboards for different teams'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Serverless Microservices Architecture',
      description: 'Cloud-native serverless application with automated scaling, reducing operational costs by 60% while maintaining high availability.',
      tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFormation'],
      achievements: [
        '60% reduction in operational costs',
        'Auto-scaling based on demand',
        '99.99% uptime SLA achieved'
      ],
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-text mb-12">
            Featured Projects
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-white via-blue-50 to-white p-6 rounded-xl border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] hover:scale-[1.03] card-3d"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text mb-2">{project.title}</h3>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-text hover:text-accent transition-colors">
                      <FiGithub size={20} />
                    </a>
                    <a href={project.demo} className="text-text hover:text-accent transition-colors">
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-text mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-text text-sm">
                        <span className="text-accent mr-2">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-mono bg-primary text-accent rounded border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
