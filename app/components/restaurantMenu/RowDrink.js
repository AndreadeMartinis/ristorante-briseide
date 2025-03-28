import { capitalizeFirstLetter } from "@/app/utils/string";

export default function RowDrink({ name, details, language }) {
  const label = capitalizeFirstLetter(name);
  const price = details.prezzo;
  const quantity = details.quantita;

  return (
    <div className="flex justify-between">
      <h3 className="w-3/4">{label}</h3>
      <span>{quantity}</span>
      <span>{price}</span>
    </div>
  );
}
