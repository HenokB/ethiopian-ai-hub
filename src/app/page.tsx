import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[65%] p-6 space-y-8 font-[family-name:var(--font-geist-sans)] text-gray-900 dark:text-white">

      <div className="w-full pb-4 border-b border-gray-700 text-start">
        {/* Title + Star button */}
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-4xl tracking-tight">
            Ethiopian AI and ML Resource Hub
          </h1>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=HenokB&repo=ethiopian-ai-hub&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="120"
            height="30"
            title="GitHub"
          ></iframe>
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 text-base">
          Explore machine learning models and datasets across Ethiopian languages — built for developers, researchers, and the future.
        </p>
      </div>

      {/* Projects */}
      <Projects />
    </div>
  );
}
