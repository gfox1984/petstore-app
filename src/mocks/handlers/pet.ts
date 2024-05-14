import { HttpResponse, http } from "msw";
import { Category, Pet, Tag } from "../../api/petstore";

// mock categories
export const pokemon: Category = { id: 1, name: "Pokemon" };

// mock tags
export const electric: Tag = { id: 1, name: "Electric" };
export const fire: Tag = { id: 2, name: "Fire" };
export const fyling: Tag = { id: 3, name: "Flying" };

// mock pets
export const pikachu: Pet = {
  id: 1,
  name: "Pikachu",
  photoUrls: ["https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png"],
  category: pokemon,
  tags: [electric],
};
export const charizard: Pet = {
  id: 2,
  name: "Charizard",
  photoUrls: ["https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png"],
  category: pokemon,
  tags: [fire, fyling],
};

// mock handlers
export const handlers = [
  http.get<never, never, Pet[]>("*/pet/findByStatus", () =>
    HttpResponse.json([pikachu, charizard])
  ),
];