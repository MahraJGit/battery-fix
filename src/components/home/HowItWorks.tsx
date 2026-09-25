const steps = [
  { id: "01", title: "Call or WhatsApp", description: "Tell us what happened." },
  { id: "02", title: "Share Your Location", description: "Let us know where your vehicle is." },
  {
    id: "03",
    title: "Battery Tested & Replaced",
    description: "Our technician checks and installs the right battery.",
  },
  {
    id: "04",
    title: "Back On The Road",
    description: "Drive away with confidence and warranty-backed service.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden px-5 py-[72px] text-white md:px-10 md:py-[112px] lg:px-20"
      style={{
        backgroundImage:
          "linear-gradient(246deg, rgb(2,4,15) 47%, rgb(0,4,32) 60.5%, rgb(0,0,0) 61%, rgb(0,0,0) 166%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14">
        <div className="w-full max-w-[672px] md:max-w-[760px]">
          <h2 className="font-accent text-[22px] leading-[1.05] tracking-[-0.02em] md:text-[56px] md:leading-[55px]">
            <span className="text-white">From Breakdown To </span>
            <span className="text-[#f07828]">Back On</span>
            <span className="block text-[#f07828]">The Road.</span>
          </h2>
          <p className="mt-4 text-lg leading-7 text-white/60">
            Getting help is simple. Contact us, share your location and we&apos;ll take care of the rest.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-1 rounded-full bg-gradient-to-r from-[rgba(26,38,101,0.4)] from-[2%] to-[#f0782a] to-[70%] md:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <li key={step.id} className="relative flex flex-col gap-2">
                <span className="relative z-[1] flex size-12 items-center justify-center rounded-full border-4 border-[#f07828] bg-[#f07828] font-display text-base font-bold text-white">
                  {step.id}
                </span>
                <h3 className="pt-3 font-display text-xl font-semibold leading-7 text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-[22.75px] text-white/55">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
