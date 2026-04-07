export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealDetail extends Meal {
  strInstructions: string;
  strYoutube: string;
  strCategory: string;
}