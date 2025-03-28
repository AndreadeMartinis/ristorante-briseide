import { capitalizeFirstLetter } from "@/app/utils/string";

export default function RowWine({ name, details, language }) {
  const label = capitalizeFirstLetter(name);
  const anno = details.anno;
  const prezzoBott = details.prezzoBottiglia;
  const prezzoCal = details.prezzoCalice;

  return (
    <div className="flex gap-2 text-sm md:text-base">
      <h3 className="w-3/5">{label}</h3>
      <div className="flex justify-between w-2/5">
        <p>{anno}</p>
        <p>{prezzoCal}</p>
        <p>{prezzoBott}</p>
      </div>
    </div>
  );
}
