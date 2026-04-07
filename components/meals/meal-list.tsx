"use client";

import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

import MealCard from "./meal-card";
import MealSearch from "./meal-search";
import MealPagination from "./meal-pagination";

const ITEMS_PER_PAGE = 12;
const MAX_PAGE = 10;

export default function MealList({ data }: any) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debounced = useDebounce(search);

  // 🔍 filter
  const filtered = data.filter((meal: any) =>
    meal.strMeal.toLowerCase().includes(debounced.toLowerCase())
  );

  // 🔥 limit data
  const limitedData = filtered.slice(0, MAX_PAGE * ITEMS_PER_PAGE);

  const totalPages = Math.ceil(limitedData.length / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = limitedData.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto">

      {/* 🔍 Search */}
      <MealSearch
        value={search}
        onChange={(e: any) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* 🍱 Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedData.map((meal: any) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {/* ❌ empty */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No meals found
        </p>
      )}

      {/* 🔢 pagination */}
      {totalPages > 1 && (
        <MealPagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      )}
    </div>
  );
}