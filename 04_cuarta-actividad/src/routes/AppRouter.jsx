import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = ({ isLogged, onLogin, onLogout }) => {
  console.log("isLogged en AppRouter:", isLogged);
  return (
    <Routes>
      {/* {RUTAS PÚBLICAS} */}

      <Route element={<PublicRoutes isLogged={isLogged} />}>
        <Route path="/" element={<LoginPage onLogin={onLogin} />} />
        <Route path="login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* {RUTAS PRIVADAS} */}
      <Route
        element={<PrivateRoutes isLogged={isLogged} onLogout={onLogout} />}
      >
        <Route path="home" element={<HomePage />} />
      </Route>

      {/* {cualquier ruta} */}

      <Route
        path="*"
        element={isLogged ? <Navigate to="/home" /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};
