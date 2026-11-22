import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Listens globally for Ctrl+Shift+Z (or Cmd+Shift+Z on macOS)
 * to open the Admin panel (/admin).
 * Does not trigger while typing in an input, textarea, select, or contenteditable element,
 * preserving native Redo functionality in form inputs.
 */
export default function AdminShortcut() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isModifier = e.ctrlKey || e.metaKey;
      if (isModifier && e.shiftKey && (e.key === "z" || e.key === "Z")) {
        const active = document.activeElement;
        const tagName = active ? active.tagName.toUpperCase() : "";
        const isTextInput =
          tagName === "INPUT" ||
          tagName === "TEXTAREA" ||
          tagName === "SELECT" ||
          (active && active.isContentEditable);

        // Keep native Redo intact inside inputs
        if (isTextInput) {
          return;
        }

        e.preventDefault();
        navigate("/admin");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return null;
}
