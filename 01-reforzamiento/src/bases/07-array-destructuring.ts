const characterNames = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = characterNames;

console.log({ p3 });

const returnsArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(numbers + 100);

// Tarea

const useState = (value: string) => {
  return [value, (newValue: string) => console.log(newValue)] as const;
};

const [name, setName] = useState("Goku");

console.log(name);

setName("Vegeta");
