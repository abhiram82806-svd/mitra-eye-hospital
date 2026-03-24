import { motion } from 'motion/react';
import { Eye, Activity, Microscope } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Comprehensive Eye Care",
      icon: <Eye className="w-8 h-8" />,
      description: "Complete diagnostic evaluations and general ophthalmology consultations for all age groups.",
      features: [
        "Eye examinations and diagnostic evaluations",
        "General ophthalmology consultations",
        "Vision assessment and screening"
      ]
    },
    {
      title: "Cataract & Surgical Care",
      icon: <Microscope className="w-8 h-8" />,
      description: "Advanced surgical interventions including modern Phacoemulsification for cataract removal.",
      features: [
        "Cataract evaluation",
        "Phaco (modern cataract) surgery",
        "Pre-operative and post-operative care"
      ]
    },
    {
      title: "Retina & Medical Eye Treatment",
      icon: <Activity className="w-8 h-8" />,
      description: "Specialized care for retinal conditions and complex vision-related disorders.",
      features: [
        "Medical retina consultation",
        "Diagnosis and treatment of retinal conditions",
        "Management of vision-related disorders"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Specialized Medical Services
          </h2>
          <p className="text-lg text-slate-600">
            Organized clinical care clusters designed to provide precise diagnosis and advanced treatment for various eye conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
