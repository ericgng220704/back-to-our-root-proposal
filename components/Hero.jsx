export default function Hero() {
  return (
    <section className="w-full">
      <div className="h-[200px] w-full bg-gradient-to-r from-[#fde68a]  to-[#f59e0b] flex flex-col gap-2 items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-900">
          BACK TO OUR ROOT
        </h1>
        <span className="text-2xl md:text-3xl text-center text-yellow-950 font-bold">
          PROPOSAL
        </span>
        <span className="mt-8 italic">Eric Nguyen - May 17 2025</span>
      </div>
    </section>
  );
}
