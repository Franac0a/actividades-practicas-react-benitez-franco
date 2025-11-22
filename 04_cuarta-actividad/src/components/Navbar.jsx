import { useNavigate } from "react-router";

export const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("isLogged");

    if (onLogout) onLogout();

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow-sm">
      <div className="container-fluid">
        <h2 className="navbar-brand text-primary fw-bold fs-5">
          Los Simpsons API
        </h2>

        <div className="d-flex ms-auto">
          <button
            onClick={() => navigate("/home")}
            className="btn btn-primary me-2"
          >
            Home
          </button>

          <button onClick={handleLogoutClick} className="btn btn-danger">
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
