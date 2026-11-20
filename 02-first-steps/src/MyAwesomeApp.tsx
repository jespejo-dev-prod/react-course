const firstName = "Jorge";
const lastName = "Espejo";

const favoriteGames = ["Elden Ring", "Resident Evil", "Metal Gear"];
const isActive = false;

const address = {
  zipCode: "ABC123",
  country: "CL",
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p>{JSON.stringify(address)}</p>
    </>
  );
};
