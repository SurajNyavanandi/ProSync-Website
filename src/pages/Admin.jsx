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
  FileSpreadsheet,
  Mail,
  Search,
  Briefcase,
  FileText
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
  const [formTypeFilter, setFormTypeFilter] = useState("all"); // 'all' | 'dpr' | 'corporate'
  const [statusFilter, setStatusFilter] = useState("all"); // 'all' | 'new' | 'contacted' | 'qualified' | 'closed'
  const [searchQuery, setSearchQuery] = useState("");
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

  // Form Type Counts
  const formTypeCounts = useMemo(() => {
    const counts = { all: enquiries.length, dpr: 0, corporate: 0 };
    enquiries.forEach((item) => {
      const type = item.formType === "corporate" ? "corporate" : "dpr";
      counts[type]++;
    });
    return counts;
  }, [enquiries]);

  // Status Counts (based on current formTypeFilter)
  const statusCounts = useMemo(() => {
    const c = { all: 0, new: 0, contacted: 0, qualified: 0, closed: 0 };
    const relevant = formTypeFilter === "all" 
      ? enquiries 
      : enquiries.filter((item) => (item.formType === "corporate" ? "corporate" : "dpr") === formTypeFilter);
    
    c.all = relevant.length;
    relevant.forEach((item) => {
      const s = item.status || "new";
      if (c[s] !== undefined) {
        c[s]++;
      }
    });
    return c;
  }, [enquiries, formTypeFilter]);

  // Filtered List
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      // 1. Form Type filter
      const type = item.formType === "corporate" ? "corporate" : "dpr";
      if (formTypeFilter !== "all" && type !== formTypeFilter) return false;

      // 2. Status filter
      const status = item.status || "new";
      if (statusFilter !== "all" && status !== statusFilter) return false;

      // 3. Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const nameMatch = (item.name || "").toLowerCase().includes(query);
        const projectMatch = (item.projectName || "").toLowerCase().includes(query);
        const orgMatch = (item.organisation || "").toLowerCase().includes(query);
        const emailMatch = (item.email || "").toLowerCase().includes(query);
        const mobileMatch = (item.mobile || item.phone || "").toLowerCase().includes(query);
        const sectorMatch = (item.sector || "").toLowerCase().includes(query);
        const serviceMatch = (item.serviceRequired || "").toLowerCase().includes(query);
        const locationMatch = (item.location || "").toLowerCase().includes(query);
        if (!nameMatch && !projectMatch && !orgMatch && !emailMatch && !mobileMatch && !sectorMatch && !serviceMatch && !locationMatch) {
          return false;
        }
      }

      return true;
    });
  }, [enquiries, formTypeFilter, statusFilter, searchQuery]);

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

  const sanitizePhone = (val) => String(val || "").replace(/\D/g, "");

  return (
    <div className="min-h-screen bg-slate-50 text-brand-text-dark font-sans">
      <SEO
        title="Admin Portal | Prosync Consulting"
        description="Administrative portal for Prosync DPR and corporate mandate enquiries."
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
                Prosync
              </span>
              <span className="text-[10px] text-brand-orange uppercase tracking-widest font-mono ml-2">
                Unified Lead Management
              </span>
            </div>
          </div>

          {token && (
            <div className="flex items-center gap-3">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-block text-xs text-slate-300 hover:text-white transition-colors"
              >
                Homepage ↗
              </a>
              <a
                href="/dpr-services"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-block text-xs text-slate-300 hover:text-white transition-colors"
              >
                DPR Page ↗
              </a>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-slate-200 font-medium transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-350 mx-auto py-8 px-5 sm:px-10">
        {!token ? (
          /* LOGIN FORM */
          <div className="max-w-md mx-auto mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl">
            <div className="text-center mb-6 space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6 text-brand-orange" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-brand-navy">
                Admin Authentication
              </h2>
              <p className="text-xs text-brand-text-light">
                Sign in to view real-time DPR and Corporate Mandate submissions.
              </p>
            </div>

            {loginError && (
              <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-semibold font-heading text-brand-navy block mb-1">
                  Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter admin username"
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:bg-white focus:border-brand-navy transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold font-heading text-brand-navy block mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full bg-slate-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:bg-white focus:border-brand-navy transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full mt-2 py-3 rounded-xl bg-brand-navy hover:bg-brand-orange text-white font-bold font-heading text-xs sm:text-sm transition-colors shadow-md disabled:opacity-70 cursor-pointer"
              >
                {loginLoading ? "Authenticating..." : "Sign In to Dashboard"}
              </button>
            </form>
          </div>
        ) : (
          /* DASHBOARD INTERFACE */
          <div className="space-y-6">
            
            {/* Top Bar: Title & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                  Unified Enquiries Dashboard
                </h1>
                <p className="text-xs text-brand-text-light mt-0.5">
                  Real-time database records from MongoDB (`prosync_db.enquiries`)
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Search Bar */}
                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search leads, name, org..."
                    className="w-full bg-white border border-gray-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-brand-navy focus:outline-hidden focus:border-brand-navy"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-2 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      ×
                    </button>
                  )}
                </div>

                <button
                  onClick={fetchEnquiries}
                  disabled={loadingEnquiries}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-xs font-semibold text-brand-navy transition-colors cursor-pointer shrink-0"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingEnquiries ? "animate-spin" : ""}`} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* 1. FORM TYPE FILTER TABS */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-semibold block">
                Filter by Submission Source:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: "All Form Submissions", icon: FileText, count: formTypeCounts.all },
                  { id: "dpr", label: "DPR Landing Page (/dpr-services)", icon: FileSpreadsheet, count: formTypeCounts.dpr },
                  { id: "corporate", label: "Corporate Mandates (Homepage /)", icon: Briefcase, count: formTypeCounts.corporate },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = formTypeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setFormTypeFilter(tab.id)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 border ${
                        isActive
                          ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                          : "bg-white text-slate-700 border-gray-200 hover:border-gray-300 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-brand-orange" : "text-gray-500"}`} />
                      <span>{tab.label}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. STATUS FILTER TABS */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-semibold block">
                Filter by Status:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: "All Statuses", count: statusCounts.all },
                  { id: "new", label: "New", count: statusCounts.new },
                  { id: "contacted", label: "Contacted", count: statusCounts.contacted },
                  { id: "qualified", label: "Qualified", count: statusCounts.qualified },
                  { id: "closed", label: "Closed", count: statusCounts.closed },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setStatusFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 border ${
                      statusFilter === tab.id
                        ? "bg-slate-800 text-white border-slate-800"
                        : "bg-white text-slate-600 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                        statusFilter === tab.id
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Error Banner */}
            {fetchError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{fetchError}</span>
              </div>
            )}

            {/* Enquiries Grid / List */}
            {loadingEnquiries && enquiries.length === 0 ? (
              <div className="min-h-62.5 flex items-center justify-center bg-white rounded-2xl border border-gray-200">
                <div className="flex items-center gap-2.5 text-xs font-mono text-brand-text-light">
                  <RefreshCw className="w-4 h-4 animate-spin text-brand-orange" />
                  <span>Loading enquiries from database...</span>
                </div>
              </div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="min-h-62.5 flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-200 p-8 text-center">
                <FileSpreadsheet className="w-10 h-10 text-gray-300 mb-3" />
                <h3 className="text-base font-bold font-heading text-brand-navy">
                  No Enquiries Found
                </h3>
                <p className="text-xs text-brand-text-light mt-1 max-w-sm">
                  {searchQuery 
                    ? `No submissions match "${searchQuery}".`
                    : "No submissions found for the selected source and status filters."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredEnquiries.map((enq) => {
                  const isCorporate = enq.formType === "corporate";
                  const contactPhone = enq.phone || enq.mobile || "";
                  const cleanPhone = sanitizePhone(contactPhone);

                  return (
                    <div
                      key={enq._id}
                      className="bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-md transition-shadow p-5 sm:p-6 flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Tag & Status Header */}
                        <div className="flex items-start justify-between gap-3 pb-3 border-b border-gray-100">
                          <div>
                            {/* Source Visual Badge */}
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                              {isCorporate ? (
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                                  Corporate Mandate (Homepage /)
                                </span>
                              ) : (
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-blue-900 border border-blue-300">
                                  DPR Services (/dpr-services)
                                </span>
                              )}

                              {isCorporate ? (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-navy text-white font-semibold">
                                  {enq.serviceRequired || "General Advisory"}
                                </span>
                              ) : (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-navy/5 text-brand-navy font-semibold">
                                  {enq.sector || "Unspecified Sector"}
                                </span>
                              )}
                            </div>

                            {/* Card Title */}
                            <h3 className="font-bold font-heading text-brand-navy text-base sm:text-lg">
                              {isCorporate 
                                ? (enq.organisation || enq.name || "Corporate Enterprise Lead")
                                : (enq.projectName || "DPR Project")}
                            </h3>

                            <div className="text-xs text-slate-600 font-medium mt-0.5">
                              Promoter / Contact: <strong className="text-brand-navy">{enq.name}</strong>
                            </div>
                          </div>

                          {/* Status Dropdown */}
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

                        {/* Adaptive Detail Metrics */}
                        {isCorporate ? (
                          /* CORPORATE FORM METRICS */
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3.5 text-xs text-slate-700">
                            <div className="flex items-center gap-1.5 truncate">
                              <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                              <span className="truncate">
                                Email: <strong>{enq.email || "N/A"}</strong>
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>Phone: <strong>{enq.phone || enq.mobile || "N/A"}</strong></span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <Briefcase className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span className="truncate" title={enq.serviceRequired}>
                                Service: <strong>{enq.serviceRequired || "Advisory"}</strong>
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span className="font-mono text-[11px] text-gray-500">
                                Received: {enq.createdAt ? new Date(enq.createdAt).toLocaleDateString("en-IN") : "Recent"}
                              </span>
                            </div>
                          </div>
                        ) : (
                          /* DPR FORM METRICS */
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3.5 text-xs text-slate-700">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                              <span className="truncate" title={enq.location}>{enq.location}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <IndianRupee className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>Cost: <strong>{enq.estimatedCost ? formatRupees(enq.estimatedCost) : "Not Specified"}</strong></span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <Building className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span>Funding: <strong>{enq.fundingRequirement ? formatRupees(enq.fundingRequirement) : "N/A"}</strong></span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                              <span className="truncate" title={enq.projectStage}>{enq.projectStage || "N/A"}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              <span>Start: <strong>{enq.expectedStartDate || "TBD"}</strong></span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span className="font-mono text-[11px] text-gray-500">
                                Received: {enq.createdAt ? new Date(enq.createdAt).toLocaleDateString("en-IN") : "Recent"}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Details / Scope Box */}
                        {(isCorporate ? enq.requirementDescription : enq.briefDetails) && (
                          <div className="mt-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-slate-600 leading-relaxed">
                            <strong className="text-brand-navy block mb-0.5">
                              {isCorporate ? "Requirement Description:" : "Project Scope / Notes:"}
                            </strong>
                            {isCorporate ? enq.requirementDescription : enq.briefDetails}
                          </div>
                        )}
                      </div>

                      {/* Bottom Quick Contact Actions */}
                      <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                        <div className="font-mono text-xs font-semibold text-brand-navy">
                          {contactPhone ? `+91 ${cleanPhone.slice(-10)}` : "No phone provided"}
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Call Button */}
                          {contactPhone && (
                            <a
                              href={`tel:${cleanPhone.startsWith("91") ? `+${cleanPhone}` : `+91${cleanPhone}`}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-brand-navy hover:bg-brand-navy hover:text-white text-xs font-semibold text-brand-navy transition-colors"
                            >
                              <Phone className="w-3 h-3 text-brand-orange" />
                              <span>Call</span>
                            </a>
                          )}

                          {/* WhatsApp Button */}
                          {contactPhone && (
                            <a
                              href={`https://wa.me/${cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`}?text=${encodeURIComponent(
                                isCorporate
                                  ? `Hello ${enq.name}, regarding your corporate enquiry for ${enq.serviceRequired || "advisory services"} with Prosync Consulting.`
                                  : `Hello ${enq.name}, regarding your DPR enquiry for ${enq.projectName || "your project"} with Prosync Consulting.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          )}

                          {/* Email Button (Especially for Corporate Leads) */}
                          {enq.email && (
                            <a
                              href={`mailto:${enq.email}?subject=${encodeURIComponent(
                                isCorporate
                                  ? `Prosync Consulting — Discussion: ${enq.serviceRequired || "Advisory Mandate"}`
                                  : `Prosync Consulting — DPR Discussion: ${enq.projectName || "Project"}`
                              )}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-brand-navy hover:bg-slate-100 text-xs font-semibold text-brand-navy transition-colors"
                            >
                              <Mail className="w-3 h-3 text-blue-600" />
                              <span>Email</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
