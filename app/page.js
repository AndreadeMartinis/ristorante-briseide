import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import About from "./components/About";
import MainHome from "./components/MainHome";

export default function Home() {
  return (
    <MainHome>
      <Hero />
      <Motto />
      <About />
      <Contacts />
    </MainHome>
  );
}
