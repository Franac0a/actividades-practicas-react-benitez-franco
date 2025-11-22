import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router";

export const RegisterPage = () => {
  const { form, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
    navigate("/login");
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-light p-4 min-vh-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded shadow-lg"
        style={{ maxWidth: "24rem", minWidth: "20rem", width: "100%" }}
      >
        <h2 className="text-center h3 fw-bold text-dark mb-4">Crear Cuenta</h2>

        <div className="mb-3">
          <label htmlFor="username" className="form-label text-secondary">
            usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="tu-usuario"
            value={form.username}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-secondary">
            correo electronico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="correo@ejemplo.com"
            value={form.email}
            onChange={handleChange}
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
            placeholder="*******"
            value={form.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-semibold">
          Registrarse
        </button>
      </form>
    </div>
  );
};
