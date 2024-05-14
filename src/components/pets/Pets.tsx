import { usePets } from "../../hooks/pet-hooks";

export function Pets() {
  const { data: pets } = usePets();
  return (
    <ul className="grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 m-6">
      {pets?.map((pet) => (
        <li
          key={pet.id}
          aria-label={pet.name}
          className="group rounded-lg overflow-hidden relative shadow-md"
        >
          <img
            alt={pet.name}
            className="object-contain w-full aspect-[3/2] bg-slate-50"
            src={pet.photoUrls[0]}
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{pet.name}</h3>
            <p className="text-sm text-gray-500">{pet.category?.name}</p>
            <div className="flex gap-2 flex-wrap mt-4">
              {pet.tags?.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-lg bg-gray-100 px-2 py-1 text-xs"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}