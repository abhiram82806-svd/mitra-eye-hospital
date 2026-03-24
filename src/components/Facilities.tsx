import { motion } from "motion/react";

import equipment from "../assets/equipment.jpeg";
import surgery from "../assets/surgery.jpeg";
import eyeExam from "../assets/eye-exam.jpeg";

export default function Facilities() {
  const facilities = [
    {
      title: "Advanced Equipment",
      image: equipment,
      description:
        "Modern diagnostic and surgical equipment for accurate treatment.",
    },
    {
      title: "Surgery Room",
      image: surgery,
      description:
        "State-of-the-art operation theatre for safe eye surgeries.",
    },
    {
      title: "Eye Examination",
      image: eyeExam,
      description:
        "Comprehensive eye checkups with latest technology.",
    },
  ];

  return (
    <section
      id="facilities"
      className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 scroll-mt-24"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Our Facilities
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We provide world-class eye care using modern equipment and advanced technology.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {facilities.map((item, index) => (
          <motion.div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* ✅ IMAGE FIXED */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}