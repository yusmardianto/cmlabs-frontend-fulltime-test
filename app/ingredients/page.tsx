import { getIngredients } from "@/services/meal.service";
import IngredientList from "@/components/ingredients/ingredient-list";

export default async function Page() {
  const data = await getIngredients();

  return (
    <main className="bg-gray-50 pb-16">

      <section className="relative h-[260px] md:h-[320px] overflow-hidden">
        
        <img
          src="/top-view-table-full-food.jpg"
          alt="food"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <p className="text-sm opacity-80 mb-2">
            mealapp collection
          </p>

          <h1 className="text-2xl md:text-4xl font-bold">
            Explore Ingredients
          </h1>

          <p className="text-sm md:text-base mt-2 opacity-80">
            Find meals based on your favorite ingredients
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-10">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            All Ingredients
          </h2>
          <span className="text-sm text-gray-400">
            {data.meals.length} items
          </span>
        </div>

        <IngredientList data={data.meals} />
      </section>

    </main>
  );
}