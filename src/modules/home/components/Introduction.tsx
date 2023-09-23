export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1>Hi, I&apos;m Prastowo Adi</h1>{" "}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700">
          <li>Frontend Enginner</li>
          <li>
            Based in Jakarta <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800">
          Frontend Development enthusiast and highly experienced software
          engineer. Using NextJS and TypeScript as the technology, I am
          currently a Frontend Engineer. Collaboration-focused team members are
          dedicated to creating online apps that are useful, scalable, and
          aesthetically beautiful.
        </p>
      </div>
    </section>
  );
}
