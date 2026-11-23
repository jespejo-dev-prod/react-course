import type { CSSProperties } from "react";

const firstName = "Jorge";
const lastName = "Espejo";

const favoriteGames = ["Elden Ring", "Resident Evil", "Metal Gear"];
const isActive = true;

const address = {
  zipCode: "ABC123",
  country: "CL",
};

const myStyles: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: isActive ? 10 : 20,
  padding: 10,
  marginTop: 30,
};

export const MyAwesomeApp = () => {
  return (
    <div data-testid="div-app">
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>

      <p className="my-favorite-class">{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </div>
  );
};
