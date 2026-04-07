import Link from "next/link";

async function getMealDetail(id: string) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Page({ params }: any) {
  const { id } = await params;
  const data = await getMealDetail(id);
  const meal = data.meals?.[0];

  if (!meal) return <p className="p-6">Meal not found</p>;

  // ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const meas = meal[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push({ ing, meas });
    }
  }

  const youtubeId = meal.strYoutube?.split("v=")[1];

  return (
    <main className="pb-20 bg-gray-50">
      
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-6 text-sm text-gray-400">
        <Link href="/">Home</Link> /{" "}
        <Link href="/ingredients">Ingredients</Link> /{" "}
        <span className="text-gray-700">{meal.strMeal}</span>
      </div>

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <div className="relative h-[380px] md:h-[460px] rounded-[28px] overflow-hidden shadow-lg">
          
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="flex gap-2 mb-3">
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs">
                {meal.strCategory}
              </span>
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs">
                {meal.strArea}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold">
              {meal.strMeal}
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 mt-12 grid md:grid-cols-3 gap-10">
        
        {/* Ingredients */}
        <div className="bg-white rounded-3xl p-6 shadow-md shadow-gray-100">
          <h2 className="font-semibold text-lg mb-5">
            Ingredients
          </h2>

          <div className="space-y-3">
            {ingredients.map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-sm py-2 border-b border-gray-100"
              >
                <span className="text-gray-800 font-medium">
                  {item.ing}
                </span>
                <span className="text-gray-400">
                  {item.meas}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="md:col-span-2 bg-white rounded-3xl p-6 shadow-md shadow-gray-100">
          <h2 className="font-semibold text-lg mb-5">
            Instructions
          </h2>

          <p className="text-gray-600 leading-7 text-[15px] whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>
      </div>

      {/* VIDEO */}
      {youtubeId && (
        <div className="max-w-6xl mx-auto px-4 mt-14">
          <div className="bg-white rounded-3xl p-6 shadow-md shadow-gray-100">
            <h2 className="font-semibold text-lg mb-5">
              Video Tutorial
            </h2>

            <div className="overflow-hidden rounded-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                className="w-full h-[250px] md:h-[420px]"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}