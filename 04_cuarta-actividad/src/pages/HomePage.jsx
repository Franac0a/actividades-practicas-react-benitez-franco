import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { CharacterInfo } from "../components/CharacterInfo";
import { useCounter } from "../hooks/useCounter";

export const HomePage = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  return (
    <div className="d-flex flex-column align-items-center bg-light text-dark p-5 min-vh-100">
      <h1 className="fw-bold mb-2 text-warning display-4">Los Simpsons API</h1>

      <h2 className="fw-semibold mb-4 h3 text-secondary">Personaje #{count}</h2>

      <div
        className="d-flex align-items-center justify-content-center mb-4"
        style={{ width: "100%", maxWidth: "20rem", minHeight: "24rem" }}
      >
        {isLoading ? <Loading /> : <CharacterInfo character={data} />}
      </div>

      <div
        className="d-flex justify-content-between w-100"
        style={{ maxWidth: "20rem" }}
      >
        <button
          onClick={() => handleDecrement(1)}
          disabled={count === 1 || isLoading}
          className="btn btn-secondary fw-semibold w-50 me-2"
        >
          Anterior
        </button>
        <button
          onClick={() => handleIncrement(1)}
          disabled={isLoading}
          className="btn btn-primary fw-semibold w-50 ms-2"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
