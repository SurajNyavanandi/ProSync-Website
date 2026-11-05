import { Reveal } from "../common/Motion";

export default function ClientsSection() {
  const clientNames = [
    "MEIL",
    "DRN Infra",
    "HUSORO Robotics",
    "Rasavardhana Foods",
    "Chrome Silicon",
    "AR Petro",
    "AARA Group",
    "Joist Group"
  ];

  // Quadruple the array for a seamless infinite marquee loop (-50% translation)
  const infiniteClients = [
    ...clientNames,
    ...clientNames,
    ...clientNames,
    ...clientNames
  ];

  return (
    <section id="clients" className="py-14 md:py-16 relative bg-[#F5F5F7] border-y border-black/[0.05] overflow-hidden">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 mb-8 text-center">
        {/* Minimalist Section Header */}
        <Reveal className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#1D1D1F]">
            CLIENTS &amp; SPONSORS
          </h2>
        </Reveal>
      </div>

      {/* Minimalist Text-Only Marquee Track */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft gradient edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center whitespace-nowrap hover:[animation-play-state:paused]">
          {infiniteClients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="inline-flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12"
            >
              <span className="text-lg sm:text-xl font-medium tracking-tight text-[#1D1D1F] hover:text-[#FF5500] transition-colors cursor-default select-none">
                {client}
              </span>
              <span className="text-black/15 font-mono text-base font-light select-none">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
