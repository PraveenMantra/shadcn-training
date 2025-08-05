import Greeting from "@/components/Greeting";
import Counter from "@/components/Counter";
import Tagline from "@/components/Tagline";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark flex flex-col items-center justify-center gap-8 px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">👋 Welcome to Shadcn Training</h1>
        <Tagline />
      </section>

      <section className="flex flex-col md:flex-row gap-6">
        <Greeting name="Praveen" />
        <Greeting name="Amit" />
        <Greeting name="Sonal" />
      </section>

      <Counter />
    </main>
  );
}
