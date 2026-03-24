import { useState, FormEvent } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    problem: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // ✅ Validation
    if (!form.name || !form.phone || !form.date) {
      setError("Please fill all required fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Enter valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "appointments"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);

      // auto hide success
      setTimeout(() => setSuccess(false), 3000);

      setForm({
        name: "",
        phone: "",
        problem: "",
        date: "",
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="appointment"
      className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="w-full px-4 max-w-xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Book Appointment
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Get expert eye care from our specialists
        </p>

        {/* ✅ SUCCESS MESSAGE */}
        {success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-center shadow-sm animate-fade-in">
            ✅ Appointment booked successfully!
          </div>
        )}

        {/* ❌ ERROR MESSAGE */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-center">
            {error}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
        >

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* DATE */}
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
            className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* PROBLEM */}
          <textarea
            placeholder="Describe your problem (optional)"
            value={form.problem}
            onChange={(e) =>
              setForm({ ...form, problem: e.target.value })
            }
            className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 transition-all shadow-md"
          >
            {loading ? "Booking..." : "Submit Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}