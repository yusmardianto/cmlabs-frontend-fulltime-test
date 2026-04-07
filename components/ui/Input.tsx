export default function Input({
  value,
  onChange,
  placeholder,
}: any) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-100 outline-none focus:ring-2 focus:ring-black/10"
    />
  );
}