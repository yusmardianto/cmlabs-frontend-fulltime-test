import Input from "../ui/Input";

export default function IngredientSearch({ value, onChange }: any) {
  return (
    <div className="mb-8">
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search ingredient..."
      />
    </div>
  );
}