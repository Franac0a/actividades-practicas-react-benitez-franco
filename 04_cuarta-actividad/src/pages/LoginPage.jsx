import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router";

export const LoginPage = ({ onLogin }) => {
  const { form, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form.username);
    handleReset();
    navigate("/home");
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-light p-4 min-vh-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded shadow-lg"
        style={{ maxWidth: "24rem", minWidth: "20rem", width: "100%" }}
      >
        <h2 className="text-center h3 fw-bold text-dark mb-4">
          Iniciar Sesion
        </h2>

        <div className="mb-4">
          <label htmlFor="username" className="form-label text-secondary">
            usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="tu-usuario"
            className="form-control"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label text-secondary">
            contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="*****"
            className="form-control"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 fw-semibold mb-3"
        >
          Iniciar sesion
        </button>

        <div className="text-center mt-3">
          <p className="text-secondary mb-1">¿No tienes cuenta?</p>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="btn btn-link fw-semibold"
          >
            Regístrate aquí
          </button>
        </div>
      </form>
    </div>
  );
};
