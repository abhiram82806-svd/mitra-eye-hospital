import { motion } from "motion/react";
import { MapPin, Phone, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Contact & Location</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Visit Mitra Eye Hospital
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Schedule your consultation with Dr. Paidi Ram Mohanrao for specialized eye care and advanced treatment options.
            </p>

            <div className="space-y-8 mb-10">

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Clinic Address</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Mitra Eye Hospital<br />
                    Paralakhemundi<br />
                    Odisha, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Contact Number</h4>
                  <p className="text-slate-600">
                    <a
                      href="tel:+918247533346"
                      className="hover:text-primary transition-colors"
                    >
                      +91 8247533346
                    </a>
                  </p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Consultation Hours</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Call Button */}
              <a
                href="tel:+918247533346"
                className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Hospital</span>
              </a>

              {/* ✅ FIXED BOOK APPOINTMENT */}
              <Link
                to="/appointment"
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>

            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative bg-slate-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.587781609094!2d84.09221397550384!3d18.771941082371107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3cf7e6f4c60abd%3A0x3f9b9001acedefe3!2sMITRA%20EYE%20HOSPITAL-%20PARALAKHEMUNDI!5e0!3m2!1sen!2sin!4v1773338371224!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}