type GreetingProps = {
  name: string;
};

export default function Greeting({ name }: GreetingProps) {
  const today = new Date().toDateString();

  return (
    <div className="p-6 bg-slate-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-gray-600">Hello, {name}!</h2>
      <p className="text-gray-600">Today is {today}</p>
    </div>
  );
}
