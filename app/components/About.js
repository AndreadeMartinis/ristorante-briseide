import Owners from "./Owners";
import Gallery from "./Gallery";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center bg-secondary pb-8">
      <Gallery />
      <Owners />
    </div>
  );
}
