import Input from "../ui/Input";

export default function MealSearch({ value, onChange }: any) {
  return (
    <div className="mb-8">
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search meal..."
      />
    </div>
  );
}