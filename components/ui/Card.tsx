export default function Card({ children }: any) {
  return (
    <div className="shadow-md rounded-2xl p-4 bg-white">
      {children}
    </div>
  );
}