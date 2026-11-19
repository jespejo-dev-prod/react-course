const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

const { age: ironmanAge, key, name: ironmanName } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({ ironmanName, ironmanAge, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ key, rank = "Sin rango", name, age }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank: rank,
  };
};

const { keyName, rank, user } = useContext(person);

const { age, name } = user;

console.log({ keyName, rank, age, name });
