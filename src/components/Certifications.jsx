import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const certifications = [
  { title: 'CKA', issuer: 'The Linux Foundation', detail: 'Certified Kubernetes Administrator', link: 'https://www.credly.com/badges/d3a823c3-b784-4824-9e82-e0140a72f780/linked_in_profile' },
  { title: 'Prompt Design in Vertex AI (Skill Badge)', issuer: 'Google Cloud', detail: 'Prompt engineering and multimodal generative techniques in Vertex AI', link: 'https://www.credly.com/badges/43561d5d-bb9c-4fd0-969b-e97905baee5f/linked_in_profile' },
  { title: 'Coursera Verified Certificate', issuer: 'Coursera', detail: 'View verified accomplishment', link: 'https://www.coursera.org/account/accomplishments/verify/8PKZ7UJES2GY' },
  { title: 'Coursera Verified Certificate', issuer: 'Coursera', detail: 'View verified accomplishment', link: 'https://www.coursera.org/account/accomplishments/verify/Z3KX5H1UBJJS' },
  { title: 'Python (Basic)', issuer: 'HackerRank', detail: 'HackerRank Skills Certification', link: 'https://www.hackerrank.com/certificates/d3f5f3f9e610' }
]

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-text mb-12">
            Certifications
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:translate-y-[-6px] hover:scale-105 card-3d"
              >
                <h3 className="text-text text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-accent font-mono mb-2">{cert.issuer}</p>
                <p className="text-text text-sm">{cert.detail}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-accent hover:underline font-mono text-sm"
                  >
                    Verify Badge
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
