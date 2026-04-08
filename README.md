# 🍽️ Meal App

Preview : https://cmlabs-frontend-fulltime-test-seven.vercel.app/

A modern web application to explore meals and ingredients using TheMealDB API.  
Built with Next.js, Tailwind CSS, and Atomic Design principles.

---

## 🚀 Features

- 🔍 Search ingredients and meals
- 🧾 View meals by ingredient
- 📖 Detailed meal information (recipe, instructions, video)
- 🎥 YouTube video tutorial integration
- 📱 Responsive & modern UI
- ⚡ Fast performance with Next.js App Router
- 🧩 Atomic component structure (scalable & reusable)

---

## 🛠 Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Language: TypeScript / JavaScript
- API: https://www.themealdb.com/api.php

---

## 📁 Project Structure

app/
  page.tsx
  ingredients/
    page.tsx
    [name]/page.tsx
  meals/
    [id]/page.tsx

components/
  ui/
    input.tsx

  ingredients/
    ingredient-card.tsx
    ingredient-search.tsx
    ingredient-pagination.tsx
    ingredient-list.tsx

  meals/
    meal-card.tsx
    meal-search.tsx
    meal-pagination.tsx
    meal-list.tsx

services/
  meal.service.ts

hooks/
  useDebounce.ts

---

## 🧠 Architecture

This project uses Atomic Design Pattern:

- Atom → Input component  
- Molecule → Card, Search, Pagination  
- Organism → IngredientList, MealList  

Benefits:
- Reusable components
- Scalable structure
- Clean separation of concerns

---

## 📌 Pages

### 🏠 Landing Page
- Modern hero section  
- Category highlight  
- Call-to-action  

### 🧂 Ingredients Page
- List of ingredients  
- Search by name  
- Pagination (max 10 pages)  

### 🍱 Meals Page (by Ingredient)
- List of meals based on selected ingredient  
- Search meal  
- Responsive grid layout  

### 🍲 Meal Detail Page
- Hero image  
- Ingredients list  
- Cooking instructions  
- YouTube video tutorial  

---

## ⚙️ Installation

Clone repository:

git clone https://github.com/yusmardianto/cmlabs-frontend-fulltime-test.git

Masuk ke project:

cd cmlabs-frontend-fulltime-test

Install dependencies:

npm install

Run project:

npm run dev

Buka di browser:

http://localhost:3000

---

## 🌐 API Endpoints

List Ingredients  
https://www.themealdb.com/api/json/v1/1/list.php?i=list  

Filter by Ingredient  
https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}  

Meal Detail  
https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}  

---

## 🎨 UI Highlights

- Modern & clean design  
- Glassmorphism & soft shadows  
- Responsive layout (mobile-first)  
- Smooth hover interactions  

---

## 📈 Future Improvements

- 🌙 Dark mode  
- ❤️ Favorite meals  
- 🔄 Infinite scroll  
- ⚡ Skeleton loading  
- 🚀 Deployment (Vercel)  

---

## 👨‍💻 Author

Yusmardianto 

---

## ⭐ Notes

This project is built as a frontend technical test and demonstrates:
- API integration  
- Component architecture (Atomic Design)  
- UI/UX design  
- State management (client-side)