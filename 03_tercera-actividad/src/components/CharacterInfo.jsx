export const CharacterInfo = ({ character }) => {
  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.portrait_path} alt={character.name} />
      <p>Edad: {character.age}</p>
      <p>Ocupación: {character.occupation}</p>
    </>
  );
};
