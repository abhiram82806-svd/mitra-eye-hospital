import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { Star, Phone, Calendar, ShieldCheck, Award } from "lucide-react";
import hero from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50 -z-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/30 rounded-bl-[100px] -z-10 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted Eye Care in Paralakhemundi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Specialized Eye Care with{" "}
              <span className="text-primary">
                Advanced Technology
              </span>{" "}
              & Trusted Expertise
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Providing comprehensive eye care, cataract surgery, and retina
              treatment using modern ophthalmic technology and
              specialist-led clinical expertise.
            </p>

            {/* Trust */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                    >
                      <img
                        src={`https://picsum.photos/seed/patient${i}/100/100`}
                        alt="Patient"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-slate-900 font-bold text-sm ml-1">
                      4.8★
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    50+ Patient Reviews
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center text-accent">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Dr. Paidi Ram Mohanrao
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    MBBS, DNB – Ophthalmology
                  </p>
                </div>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* ✅ FIXED BOOK APPOINTMENT */}
              <Link
                to="/appointment"
                className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>

              {/* CALL BUTTON */}
              <a
                href="tel:+918247533346"
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Hospital</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-full"
          >
            <div className="relative w-full h-screen overflow-hidden rounded-2xl">
              <img
                src={hero}
                alt="Mitra Eye Hospital"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Advanced Technology
                  </p>
                  <p className="text-xs text-slate-600">
                    Precision diagnosis & treatment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}