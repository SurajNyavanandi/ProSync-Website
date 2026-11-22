import { useState, useEffect, useMemo, useCallback } from "react";
import { SEO } from "../components/common";
import { 
  Lock, 
  User, 
  LogOut, 
  RefreshCw, 
  Phone, 
  MessageSquare, 
  Building, 
  MapPin, 
  Calendar, 
  IndianRupee, 
  Layers, 
  Clock, 
  AlertCircle,
  FileSpreadsheet
} from "lucide-react";
import { companyData } from "../data/companyData";

const rawApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const API_BASE = rawApiUrl.endsWith("/api") ? rawApiUrl : `${rawApiUrl}/api`;
const TOKEN_KEY = "prosync_admin_token";

const STATUS_OPTIONS = [
  { value: "new", label: "New", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { value: "contacted", label: "Contacted", color: "bg-amber-100 text-amber-800 border-amber-200" },
  { value: "qualified", label: "Qualified", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { value: "closed", label: "Closed", color: "bg-gray-100 text-gray-700 border-gray-200" },
];

export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY) || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Dashboard states
  const [enquiries, setEnquiries] = useState([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [updatingId, setUpdatingId] = useState(null);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Login failed. Please check your credentials.");
      }

      sessionStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setPassword("");
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
    setEnquiries([]);
  };

  // Fetch Enquiries
  const fetchEnquiries = useCallback(async () => {
    if (!token) return;
    setLoadingEnquiries(true);
    setFetchError("");

    try {
      const res = await fetch(`${API_BASE}/admin/enquiries`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (res.status === 401) {
        handleLogout();
        throw new Error("Session expired. Please log in again.");
      }
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to load enquiries.");
      }

      setEnquiries(data.enquiries || []);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setLoadingEnquiries(false);
    }
  }, [token]);

  useEffect(() => {
    let ignore = false;
    if (token) {
      fetch(`${API_BASE}/admin/enquiries`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          if (res.status === 401) {
            handleLogout();
            throw new Error("Session expired. Please log in again.");
          }
          return res.json();
        })
        .then((data) => {
          if (!ignore) {
            if (data.ok) {
              setEnquiries(data.enquiries || []);
            } else {
              setFetchError(data.error || "Failed to load enquiries.");
            }
          }
        })
        .catch((err) => {
          if (!ignore) setFetchError(err.message);
        });
    }
    return () => {
      ignore = true;
    };
  }, [token]);

  // Update Status
  const handleStatusChange = async (id, newStatus) => {
    const previousEnquiries = [...enquiries];
    setUpdatingId(id);

    // Optimistic update
    setEnquiries((prev) =>
      prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item))
    );

    try {
      const res = await fetch(`${API_BASE}/admin/enquiries/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to update status");
      }
    } catch (err) {
      alert("Error updating status: " + err.message);
      // Revert on error
      setEnquiries(previousEnquiries);
    } finally {
      setUpdatingId(null);
    }
  };

  // Status Counts
  const counts = useMemo(() => {
    const c = { all: enquiries.length, new: 0, contacted: 0, qualified: 0, closed: 0 };
    enquiries.forEach((item) => {
      if (c[item.status] !== undefined) {
        c[item.status]++;
      }
    });
    return c;
  }, [enquiries]);

  // Filtered List
  const filteredEnquiries = useMemo(() => {
    if (activeFilter === "all") return enquiries;
    return enquiries.filter((item) => item.status === activeFilter);
  }, [enquiries, activeFilter]);

  // Number format helper (Indian Lakhs/Crores)
  const formatRupees = (amount) => {
    if (!amount && amount !== 0) return "N/A";
    const num = Number(amount);
    if (isNaN(num)) return amount;
    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)} Cr`;
    }
    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(2)} Lakh`;
    }
    return `₹${num.toLocaleString("en-IN")}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-brand-text-dark font-sans">
      <SEO
        title="Admin Portal | Prosync Consulting"
        description="Administrative portal for Prosync DPR inquiries."
        noindex={true}
      />

      {/* Top Header Bar */}
      <header className="bg-brand-navy text-white py-4 px-6 sm:px-10 shadow-md">
        <div className="max-w-350 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white p-0.5 flex items-center justify-center">
              <img src={companyData.monogramUrl || companyData.logoUrl} alt="Prosync" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-heading font-black tracking-wider uppercase text-sm sm:text-base">
                PROSYNC
              </span>
              <span className="text-brand-orange font-mono text-xs ml-1.5 font-bold">
                ADMIN
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-xs text-white/70 hover:text-white transition-colors hidden sm:inline-block"
            >
              Back to Website
            </a>

            {token && (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-350 mx-auto p-5 sm:p-8">
        {!token ? (
          /* LOGIN CARD */
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200/80 p-8 sm:p-10 w-full max-w-md">
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-brand-orange" />
                </div>
                <h1 className="text-2xl font-bold font-heading text-brand-navy">
                  Admin Sign In
                </h1>
                <p className="text-xs text-brand-text-light mt-1">
                  Enter your credentials to access enquiries
                </p>
              </div>

              {loginError && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Username
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Admin username"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full mt-2 py-3 rounded-xl bg-brand-navy hover:bg-brand-orange text-white font-heading font-bold text-sm tracking-wide transition-colors cursor-pointer disabled:opacity-50"
                >
                  {loginLoading ? "Authenticating..." : "Sign In"}
                </button>
              </form>

              <div className="mt-6 text-center text-xs text-zinc-500 font-mono">
                Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border text-gray-700">Ctrl+Shift+Z</kbd> anytime to open this panel
              </div>
            </div>
          </div>
        ) : (
          /* DASHBOARD VIEW */
          <div className="space-y-6">
            {/* Top Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl shadow-xs border border-gray-200">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                  DPR Enquiries Management
                </h1>
                <p className="text-xs text-brand-text-light mt-0.5">
                  Real-time database records from MongoDB `prosync_db.enquiries`
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={fetchEnquiries}
                  disabled={loadingEnquiries}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-xs font-semibold text-brand-navy transition-colors cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingEnquiries ? "animate-spin" : ""}`} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* Filter Tabs with Counts */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Enquiries", count: counts.all },
                { id: "new", label: "New", count: counts.new },
                { id: "contacted", label: "Contacted", count: counts.contacted },
                { id: "qualified", label: "Qualified", count: counts.qualified },
                { id: "closed", label: "Closed", count: counts.closed },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                    activeFilter === tab.id
                      ? "bg-brand-navy text-white shadow-xs"
                      : "bg-white text-slate-700 border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      activeFilter === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Error or Loading Banners */}
            {fetchError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{fetchError}</span>
              </div>
            )}

            {/* Enquiries Grid / List */}
            {loadingEnquiries && enquiries.length === 0 ? (
              <div className="min-h-[250px] flex items-center justify-center bg-white rounded-2xl border border-gray-200">
                <div className="flex items-center gap-2.5 text-xs font-mono text-brand-text-light">
                  <RefreshCw className="w-4 h-4 animate-spin text-brand-orange" />
                  <span>Loading enquiries from database...</span>
                </div>
              </div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="min-h-[250px] flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-200 p-8 text-center">
                <FileSpreadsheet className="w-10 h-10 text-gray-300 mb-3" />
                <h3 className="text-base font-bold font-heading text-brand-navy">
                  No Enquiries Found
                </h3>
                <p className="text-xs text-brand-text-light mt-1 max-w-sm">
                  {activeFilter === "all"
                    ? "Submissions from the homepage enquiry form will appear here in real-time."
                    : `There are currently no enquiries marked with status "${activeFilter}".`}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredEnquiries.map((enq) => (
                  <div
                    key={enq._id}
                    className="bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-md transition-shadow p-5 sm:p-6 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header of Card */}
                      <div className="flex items-start justify-between gap-3 pb-3 border-b border-gray-100">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold font-heading text-brand-navy text-base sm:text-lg">
                              {enq.projectName || "Untitled Project"}
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-navy/5 text-brand-navy font-semibold">
                              {enq.sector}
                            </span>
                          </div>
                          <div className="text-xs text-slate-600 font-medium mt-1">
                            Contact: <strong className="text-brand-navy">{enq.name}</strong>
                          </div>
                        </div>

                        {/* Status Select */}
                        <div className="shrink-0">
                          <select
                            value={enq.status || "new"}
                            disabled={updatingId === enq._id}
                            onChange={(e) => handleStatusChange(enq._id, e.target.value)}
                            aria-label={`Change status for enquiry ${enq.projectName || enq.name}`}
                            className="text-xs font-bold rounded-lg px-2.5 py-1.5 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-hidden focus:border-brand-navy cursor-pointer"
                          >
                            {STATUS_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Detail Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3.5 text-xs text-slate-700">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                          <span className="truncate" title={enq.location}>{enq.location}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <IndianRupee className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Cost: <strong>{formatRupees(enq.estimatedCost)}</strong></span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>Funding: <strong>{enq.fundingRequirement ? formatRupees(enq.fundingRequirement) : "N/A"}</strong></span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                          <span className="truncate" title={enq.projectStage}>{enq.projectStage}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>Start: <strong>{enq.expectedStartDate || "TBD"}</strong></span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="font-mono text-[11px] text-gray-500">
                            {enq.createdAt ? new Date(enq.createdAt).toLocaleDateString("en-IN") : "Recent"}
                          </span>
                        </div>
                      </div>

                      {/* Brief Details */}
                      {enq.briefDetails && (
                        <div className="mt-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-slate-600 leading-relaxed">
                          <strong className="text-brand-navy block mb-0.5">Project Scope / Notes:</strong>
                          {enq.briefDetails}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Buttons (Quick Call & WhatsApp) */}
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                      <div className="font-mono text-xs font-semibold text-brand-navy">
                        +91 {enq.mobile}
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:+91${enq.mobile}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-brand-navy hover:bg-brand-navy hover:text-white text-xs font-semibold text-brand-navy transition-colors"
                        >
                          <Phone className="w-3 h-3 text-brand-orange" />
                          <span>Call</span>
                        </a>

                        <a
                          href={`https://wa.me/91${enq.mobile}?text=${encodeURIComponent(
                            `Hello ${enq.name}, regarding your DPR enquiry for ${enq.projectName || "your project"} with Prosync Consulting.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
