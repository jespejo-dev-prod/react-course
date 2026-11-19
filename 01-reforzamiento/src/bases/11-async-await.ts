import type { GiphyRandomResponse, Gif } from "./data/giphy.response";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

if (!API_KEY) {
  throw new Error(
    "Configura VITE_GIPHY_API_KEY en .env.local para ejecutar este ejemplo.",
  );
}

const createImageInsideDom = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`,
  );

  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDom);
