import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { CharacterInfo } from "../components/CharacterInfo";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  return (
    <>
      <h1>Los Simpsons API</h1>
      <h2>Personaje #{count}</h2>

      {isLoading ? <Loading /> : <CharacterInfo character={data} />}

      <button
        onClick={() => handleDecrement(1)}
        disabled={count === 1 || isLoading}
      >
        Anterior
      </button>
      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>
    </>
  );
};
