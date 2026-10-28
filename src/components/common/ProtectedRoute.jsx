/**
 * ProtectedRoute: Route guard for modular scalable applications,
 * allowing conditional rendering based on authentication or authorization flags.
 */
export default function ProtectedRoute({
  isAuthenticated = true,
  children,
  fallback = null
}) {
  if (!isAuthenticated) {
    return fallback;
  }

  return children;
}
