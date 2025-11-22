export const CharacterInfo = ({ character }) => {
  console.log(character);
  return (
    <div className="card" style={{ maxWidth: "20rem" }}>
      <img
        className="card-img-top"
        style={{ height: "14rem", objectFit: "cover" }}
        src={character.portrait_path}
        alt={character.name}
      />

      <div className="card-body">
        <h3 className="card-title h5 text-dark mb-2">{character.name}</h3>

        <p className="card-text text-secondary mb-1">
          <span className="fw-semibold text-dark">Edad:</span> {character.age}
        </p>

        <p className="card-text text-secondary">
          <span className="fw-semibold text-dark">Ocupación:</span>{" "}
          {character.occupation}
        </p>
      </div>
    </div>
  );
};
