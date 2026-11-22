import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Admin from "./pages/Admin";
import AdminShortcut from "./components/common/AdminShortcut";
import { initGTM } from "./utils/tracking";

export default function App() {
  useEffect(() => {
    initGTM();
  }, []);

  return (
    <BrowserRouter>
      <AppProvider>
        <AdminShortcut />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dpr-services" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
