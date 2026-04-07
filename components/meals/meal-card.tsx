import Link from "next/link";

export default function MealCard({ meal }: any) {
  return (
    <Link href={`/meals/${meal.idMeal}`}>
      <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* title */}
          <h3 className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm leading-tight">
            {meal.strMeal}
          </h3>
        </div>

        {/* info */}
        <div className="p-4 flex justify-between text-xs text-gray-500">
          <span>🍽 Food</span>
          <span>🔥 Popular</span>
        </div>
      </div>
    </Link>
  );
}