const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function getIngredients() {
  const res = await fetch(`${BASE_URL}/list.php?i=list`, {
    next: { revalidate: 3600 }, // ISR 🔥
  });

  if (!res.ok) throw new Error("Failed fetch ingredients");
  return res.json();
}

export async function getMealsByIngredient(name: string) {
  const res = await fetch(`${BASE_URL}/filter.php?i=${name}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed fetch meals");
  return res.json();
}

export async function getMealDetail(id: string) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);

  if (!res.ok) throw new Error("Failed fetch detail");
  return res.json();
}