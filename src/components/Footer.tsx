import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                M
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">Mitra Eye Hospital</h2>
                <p className="text-xs text-primary-light font-medium tracking-wide">SPECIALIZED EYE CARE</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Providing comprehensive eye care, cataract surgery, and retina treatment using modern ophthalmic technology and specialist-led clinical expertise.
            </p>
          </div>

          {/* Doctor Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Chief Consultant</h3>
            <p className="font-bold text-white mb-1">Dr. Paidi Ram Mohanrao</p>
            <p className="text-sm text-primary-light mb-4">MBBS, DNB (Ophthalmology)</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Phaco Cataract Surgeon</li>
              <li>• Medical Retina Specialist</li>
              <li>• Comprehensive Eye Care</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Doctor', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Facilities', href: '#facilities' },
                { name: 'Patient Reviews', href: '#reviews' },
                { name: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-primary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  Mitra Eye Hospital<br />
                  Paralakhemundi<br />
                  Odisha, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918247533346" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +91 +918247533346
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@mitraeyehospital.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@mitraeyehospital.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Mitra Eye Hospital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
