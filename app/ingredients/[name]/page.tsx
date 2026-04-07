import { getMealsByIngredient } from "@/services/meal.service";
import MealList from "@/components/meals/meal-list";
import Link from "next/link";

export default async function Page({ params }: any) {
  // 🔥 FIX: handle params async
  const resolvedParams = await params;

  const rawName = resolvedParams?.name;

  if (!rawName) {
    return (
      <main className="p-6">
        <h1>Invalid ingredient</h1>
      </main>
    );
  }

  const decoded = decodeURIComponent(rawName).toLowerCase();

  const data = await getMealsByIngredient(decoded);

  return (
    <main className="pb-10">
      
      {/* 📍 Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 mt-6 text-sm text-gray-500">
        <Link href="/">Home</Link> /{" "}
        <Link href="/ingredients">Ingredients</Link> /{" "}
        <span className="text-gray-800 font-medium capitalize">
          {decoded}
        </span>
      </div>

      {/* 🎯 Hero */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl py-14 text-center">
          <p className="text-sm text-gray-500 mb-2">
            mealapp API website
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Meals with "{decoded}"
          </h1>
        </div>
      </div>

      {/* 🍱 Content */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        {!data?.meals ? (
          <p className="text-center text-gray-500">
            No meals found
          </p>
        ) : (
          <MealList data={data.meals} />
        )}
      </div>
    </main>
  );
}