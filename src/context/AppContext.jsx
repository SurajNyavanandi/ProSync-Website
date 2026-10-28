/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [activeSection, setActiveSection] = useState("top");
  const [mandateFilter, setMandateFilter] = useState("All");

  return (
    <AppContext.Provider
      value={{
        activeSection,
        setActiveSection,
        mandateFilter,
        setMandateFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
