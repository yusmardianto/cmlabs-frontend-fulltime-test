"use client";

import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

import IngredientCard from "./ingredient-card";
import IngredientSearch from "./ingredient-search";
import IngredientPagination from "./ingredient-pagination";

const ITEMS_PER_PAGE = 20;
const MAX_PAGE = 10;

export default function IngredientList({ data }: any) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debounced = useDebounce(search);

  // 🔍 Filter
  const filtered = data.filter((item: any) =>
    item.strIngredient.toLowerCase().includes(debounced.toLowerCase())
  );

  // 🔥 limit data
  const limitedData = filtered.slice(0, MAX_PAGE * ITEMS_PER_PAGE);

  const totalPages = Math.ceil(limitedData.length / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = limitedData.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto">

      {/* 🔍 Search */}
      <IngredientSearch
        value={search}
        onChange={(e: any) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* 🧩 Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {paginatedData.map((item: any) => (
          <IngredientCard key={item.idIngredient} item={item} />
        ))}
      </div>

      {/* ❌ Empty */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No ingredient found
        </p>
      )}

      {/* 🔢 Pagination */}
      {totalPages > 1 && (
        <IngredientPagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      )}
    </div>
  );
}