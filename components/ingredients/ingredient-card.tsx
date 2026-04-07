import Link from "next/link";

export default function IngredientCard({ item }: any) {
  const name = item.strIngredient;
  const image = `https://www.themealdb.com/images/ingredients/${name}.png`;

  return (
    <Link href={`/ingredients/${name.toLowerCase()}`}>
      <div className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
        
        <div className="flex justify-center mb-3">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 object-contain group-hover:scale-110 transition"
          />
        </div>

        <p className="text-center text-sm font-semibold text-gray-800">
          {name}
        </p>

        <div className="absolute inset-0 rounded-3xl ring-1 ring-gray-100 group-hover:ring-gray-200 transition" />
      </div>
    </Link>
  );
}