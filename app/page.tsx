import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50">

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-sm text-gray-500 mb-3">
              🍽️ Meal App
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Discover Delicious Meals From Around The World
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Explore thousands of recipes, ingredients, and cooking ideas
              in one place.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="/ingredients"
                className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Explore Ingredients
              </Link>

              <Link
                href="/ingredients"
                className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Browse Meals
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="/top-view-table-full-food.jpg"
              alt="food"
              className="rounded-3xl shadow-lg object-cover h-[320px] w-full"
            />

            <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-xl shadow text-sm">
              ⭐ 1000+ Recipes
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Beef",
            "Chicken",
            "Eggs",
            "Tuna",
          ].map((item) => (
            <Link
              key={item}
              href={`/ingredients/${item.toLowerCase()}`}
            >
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                
                <img
                  src={`https://www.themealdb.com/images/ingredients/${item}.png`}
                  alt={item}
                  className="w-full h-32 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40" />

                <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                  {item}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Start Exploring Recipes Today
          </h2>

          <p className="text-gray-300 mt-3">
            Find your next favorite meal in seconds
          </p>

          <Link
            href="/ingredients"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

    </main>
  );
}