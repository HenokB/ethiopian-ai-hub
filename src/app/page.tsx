import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="w-full sm:w-[90%] md:w-[85] lg:w-[80%] xl:w-[65%] p-5 space-y-5 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full pb-2 border-b text-start">
        <p className="w-full font-bold text-3xl">
          Ethiopian AI Research Hub
        </p>
        <p className="mt-6 opacity-70">
          Explore Ethiopic machine learning related models and datasets for various Ethiopian languages.
        </p>
      </div>

      {/* Projects */}
      <Projects />
    </div>
  );
}
