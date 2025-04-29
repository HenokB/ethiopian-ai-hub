import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[65%] p-6 space-y-8 font-[family-name:var(--font-geist-sans)] text-white">
      <div className="w-full pb-4 border-b border-gray-700 text-start">
        <h1 className="font-bold text-4xl tracking-tight">
          Ethiopian AI and ML Resource Hub
        </h1>
        <p className="mt-4 text-gray-400 text-base">
          Explore machine learning models and datasets across Ethiopian languages — built for developers, researchers, and the future.
        </p>
      </div>

      {/* Projects */}
      <Projects />
    </div>
  );
}
