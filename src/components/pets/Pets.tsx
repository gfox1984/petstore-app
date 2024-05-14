import { usePets } from "../../hooks/pet-hooks";

export function Pets() {
  const { data: pets } = usePets();

  return (
    <ul>
      {pets?.map((pet) => (
        <li key={pet.id}>{pet.name}</li>
      ))}
    </ul>
  );
}