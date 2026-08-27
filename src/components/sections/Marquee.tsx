const words = ["Speedramp", "Motion Graphics", "Cinematic", "Reels"];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {words.map((word) => (
        <span key={word} className="flex items-center">
          <span className="px-6 font-display text-2xl font-medium uppercase tracking-tight text-fg sm:text-3xl">
            {word}
          </span>
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-border bg-card py-5"
      aria-hidden="true"
    >
      <div className="flex w-fit animate-marquee motion-reduce:animate-none">
        <Track />
        <Track />
      </div>
    </div>
  );
}
