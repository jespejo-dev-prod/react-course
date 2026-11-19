import { heroes, type Hero, Owner } from "./data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  //   if (!hero) {
  //     throw new Error(`No existe un héroe con el id ${id}`);
  //   }

  return hero;
};

// console.log(getHeroById(9));

/**
 *
 * getHeroesByOwner => Hero[]
 * Filtra heroes por su propietario
 * @params Owner - El propietario por el cual filtrar (DC o Marvel), usar la enumeracion Owner
 * @returns Array de heroes pertenecientes al propietario
 *
 * console.log(getHeroesByOwner('Marvel')) //En main
 *
 *
 */

const getHeroesByOwner = (owner: Owner) => {
  const heroesByOwner = heroes.filter((hero) => {
    return hero.owner === owner;
  });

  return heroesByOwner;
};

console.log(getHeroesByOwner(Owner.DC));
