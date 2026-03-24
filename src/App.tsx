import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./components/Appointment";
import Admin from "./pages/Admin.tsx";
import { MessageCircle } from "lucide-react";

export default function App() {
  return (
    <>
      {/* ROUTES */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>

      {/* ✅ WHATSAPP BUTTON */}
     <a
  href="https://wa.me/918280670007?text=Hello%20I%20want%20to%20book%20an%20appointment"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center gap-2 z-50"
>
  <MessageCircle className="w-5 h-5" />
  <span className="hidden md:inline">Chat</span>
</a>
    </>
  );
}