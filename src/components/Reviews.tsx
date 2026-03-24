import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      text: "Very professional doctor and excellent treatment. Highly recommended.",
      author: "M. Panvi Mohan",
      rating: 5,
    },
    {
      text: "Advanced equipment and caring staff. Best eye hospital in Paralakhemundi.",
      author: "D. Abhay",
      rating: 5,
    },
    {
      text: "Dr. Mohanrao explained everything clearly. The cataract surgery was smooth and successful.",
      author: "Baddu Rohit",
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-24"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Patient Reviews
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Trusted by hundreds of patients for quality eye care and successful treatments.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ y: -6 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Quote className="text-gray-300 mb-3" />

            <p className="text-gray-700 mb-4 leading-relaxed">
              {review.text}
            </p>

            <div className="flex gap-1 mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#facc15" stroke="#facc15" />
              ))}
            </div>

            <h4 className="font-semibold text-gray-900">
              {review.author}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}