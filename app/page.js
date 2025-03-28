import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Motto />
      <About />
      <Contacts />
    </main>
  );
}
