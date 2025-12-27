import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useAuthStore } from "./store/authStore";

export default function App() {
  const checkAuth = useAuthStore((s) => s.checkAuth);
  const isLoading = useAuthStore((s) => s.isLoading);

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return <AppRoutes />;
}
