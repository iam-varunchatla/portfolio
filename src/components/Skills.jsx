import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'Amazon Web Services (AWS)', level: 'Expert' },
        { name: 'Google Cloud Platform (GCP)', level: 'Advanced' },
        { name: 'Microsoft Azure', level: 'Intermediate-Advanced' }
      ]
    },
    {
      title: 'Container & Orchestration',
      skills: [
        { name: 'Kubernetes', level: 'Expert' },
        { name: 'Docker', level: 'Expert' },
        { name: 'Helm', level: 'Advanced' },
        { name: 'Istio', level: 'Intermediate' }
      ]
    },
    {
      title: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', level: 'Expert' },
        { name: 'CloudFormation', level: 'Advanced' },
        { name: 'Ansible', level: 'Advanced' },
        { name: 'Pulumi', level: 'Intermediate' }
      ]
    },
    {
      title: 'CI/CD & DevOps',
      skills: [
        { name: 'Jenkins', level: 'Expert' },
        { name: 'GitHub Actions', level: 'Advanced' },
        { name: 'GitLab CI/CD', level: 'Advanced' },
        { name: 'AWS CodePipeline', level: 'Advanced' }
      ]
    },
    {
      title: 'MLOps & AI/ML',
      skills: [
        { name: 'MLflow', level: 'Advanced' },
        { name: 'Kubeflow', level: 'Advanced' },
        { name: 'SageMaker', level: 'Advanced' },
        { name: 'TensorFlow', level: 'Intermediate' },
        { name: 'PyTorch', level: 'Intermediate' }
      ]
    },
    {
      title: 'Monitoring & Observability',
      skills: [
        { name: 'Prometheus', level: 'Expert' },
        { name: 'Grafana', level: 'Expert' },
        { name: 'ELK Stack', level: 'Advanced' },
        { name: 'CloudWatch', level: 'Advanced' },
        { name: 'Datadog', level: 'Intermediate' }
      ]
    },
    {
      title: 'Programming & Scripting',
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'Bash', level: 'Advanced' },
        { name: 'Go', level: 'Intermediate' },
        { name: 'YAML/JSON', level: 'Expert' }
      ]
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Redis', level: 'Advanced' },
        { name: 'S3/Cloud Storage', level: 'Expert' }
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'text-green-400'
      case 'Advanced': return 'text-accent'
      case 'Intermediate-Advanced': return 'text-blue-400'
      case 'Intermediate': return 'text-yellow-400'
      default: return 'text-text'
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #e8f4ff 50%, #f0f8ff 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-text mb-12">
            Technical Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:translate-y-[-6px] card-3d"
              >
                <h3 className="text-lg font-semibold text-accent mb-4 font-mono">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <span className="text-text text-sm">{skill.name}</span>
                      <span className={`text-xs font-mono ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
