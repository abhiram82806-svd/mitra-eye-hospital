import { motion } from 'motion/react';
import { User, Award, CheckCircle2 } from 'lucide-react';
import doctor from "../assets/doc.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img 
                
                src={doctor}
                alt="Dr. Paidi Ram Mohanrao" 
                className="w-full h-full object-cover"
                
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl max-w-[260px] hidden sm:block border border-slate-100">

  <div className="flex items-center gap-3 mb-2">
    <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary">
      <Award className="w-5 h-5" />
    </div>

    <div>
      <h4 className="font-semibold text-slate-900 text-sm">
        15+ Years Experience
      </h4>
      <p className="text-xs text-slate-500">
        Cataract & Retina Specialist
      </p>
    </div>
  </div>

</div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
              <User className="w-4 h-4" />
              <span>About the Doctor</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Dr. Paidi Ram Mohanrao
            </h2>
            <p className="text-lg text-primary font-medium mb-6">
              MBBS, DNB (Ophthalmology)
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              Dr. Paidi Ram Mohanrao leads Mitra Eye Hospital with extensive clinical expertise in diagnosing and treating eye conditions. His specialization in modern cataract surgery (Phaco) and medical retina care allows patients to receive precise diagnosis and advanced treatment supported by modern ophthalmic equipment.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Chief Consultant Ophthalmologist",
                "Phaco Cataract Surgeon",
                "Medical Retina Specialist"
              ].map((role, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-slate-700 font-medium">{role}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors shadow-sm"
            >
              Consult Dr. Mohanrao
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
