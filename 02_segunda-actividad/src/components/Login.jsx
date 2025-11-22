import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const { form, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form.username);
    handleReset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button type="submit">Iniciar sesion</button>
      </form>
    </>
  );
};
