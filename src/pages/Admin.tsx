import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

type Appointment = {
  id: string;
  name: string;
  phone: string;
  problem: string;
  date: string;
};

export default function Admin() {
  const [data, setData] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔐 AUTH STATE
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ FIXED

  const ADMIN_PASSWORD = "mitra123";

  // 🔐 LOGIN
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("Wrong password");
    }
  };

  // 🗑 DELETE
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "appointments", id));
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const downloadCSV = () => {
  const headers = ["Name", "Phone", "Problem", "Date"];

  const rows = data.map((item) => [
    item.name,
    item.phone,
    item.problem,
    item.date,
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map((e) => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");

  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "appointments.csv");
  document.body.appendChild(link);

  link.click();
};

const handleLogout = () => {
  setIsAuth(false);
  setPassword("");
};

  // 📦 FETCH DATA
  useEffect(() => {
    if (!isAuth) return;

    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "appointments"));

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }));

      setData(list.reverse());
      setLoading(false);
    };

    fetchData();
  }, [isAuth]);

  // 🔐 LOGIN UI
  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4 text-center">
            Admin Login
          </h2>

          {/* INPUT */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded mb-2"
          />

          {/* SHOW/HIDE */}
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="text-sm text-blue-600 mb-4"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // 📊 DASHBOARD
  return (
    <section className="min-h-screen p-6 bg-slate-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-6">
  <h1 className="text-3xl font-bold">
    Admin Dashboard
  </h1>

  <div className="flex gap-3">
    {/* ✅ CSV BUTTON */}
    <button
      onClick={downloadCSV}
      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
    >
      Download CSV
    </button>

    {/* LOGOUT */}
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
    >
      Logout
    </button>
  </div>
</div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : data.length === 0 ? (
        <p className="text-center">No appointments found</p>
      ) : (
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">

            {/* HEADER */}
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Problem</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.problem}</td>
                  <td className="p-3">{item.date}</td>

                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </section>
  );
}