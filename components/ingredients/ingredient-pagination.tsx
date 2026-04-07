export default function IngredientPagination({
  page,
  totalPages,
  setPage,
}: any) {
  return (
    <div className="flex justify-center mt-10 gap-2 flex-wrap">
      
      <button
        onClick={() => setPage((p: number) => p - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg bg-white shadow-sm border disabled:opacity-40"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1;
        return (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-4 py-2 rounded-lg border text-sm ${
              page === p
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => setPage((p: number) => p + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-lg bg-white shadow-sm border disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}