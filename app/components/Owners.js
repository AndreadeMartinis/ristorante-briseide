export default function Owners() {
  return (
    <div className="bordered-box text-center md:h-[400px] flex flex-col justify-center items-center gap-3 mt-10 py-10 md:py-20 px-14 md:px-28 text-textColor">
      <h3 className="text-xl md:text-3xl mb-8">Owners</h3>
      <cite className="font-cursive text-3xl md:text-5xl text-primary">
        Alessio Severini
      </cite>
      <cite className="font-cursive text-3xl md:text-5xl text-primary">
        {" "}
        Sabatino Mancini
      </cite>
    </div>
  );
}
