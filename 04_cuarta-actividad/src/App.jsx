import { useState } from "react";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("isLogged", "true");
    setIsLogged(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
  };

  return (
    <AppRouter
      isLogged={isLogged}
      onLogin={handleLogin}
      onLogout={handleLogout}
    />
  );
};
