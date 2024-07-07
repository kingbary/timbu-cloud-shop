import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="flex min-h-screen flex-col items-center justify-between px-[50px] pt-[108px] pb-16">
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}
