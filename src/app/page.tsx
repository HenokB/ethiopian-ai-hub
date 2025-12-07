import Projects from "@/components/projects";
import Companies from "@/components/companies";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import AboutModal from "@/components/about-modal";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)] min-h-screen">
      <Sidebar />
      <AboutModal />
      
      <main className="lg:ml-64 min-h-screen">
      {/* Landing/Hero Section */}
      <div id="hero" className="w-full bg-gradient-to-b from-[#fafafa] to-white pt-16 lg:pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center space-y-8 mb-16">
            {/* Main Title */}
            <div className="flex flex-col items-center gap-6">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-5xl">
                <span className="text-[#800020]">Ethiopian AI/ML</span>{" "}
                <span className="text-[#1d1d1f]">Resource Hub</span>
              </h1>
              <div className="flex items-center gap-4">
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=HenokB&repo=ethiopian-ai-hub&type=star&count=true&size=large"
                  frameBorder="0"
                  scrolling="0"
                  width="140"
                  height="30"
                  title="GitHub"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                ></iframe>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-[#86868b] leading-relaxed font-light max-w-4xl mx-auto">
              Explore machine learning models and datasets across Ethiopian languages, built for everyone.
            </p>

            {/* Stats or Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="text-4xl font-semibold text-[#800020]">150+</div>
                <div className="text-[#86868b] text-lg">Projects & Models</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-semibold text-[#800020]">Multiple</div>
                <div className="text-[#86868b] text-lg">Ethiopian Languages</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-semibold text-[#800020]">Open</div>
                <div className="text-[#86868b] text-lg">Source Resources</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies & Organizations Section */}
      <div id="companies" className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-2 text-center">
              Ethiopian AI Companies & Organizations
            </h2>
            <p className="text-lg text-[#86868b] text-center max-w-2xl mx-auto">
              Discover the growing ecosystem of AI companies, research institutions, and organizations in Ethiopia
            </p>
          </div>

          <Companies />
        </div>
      </div>

      {/* Projects Section */}
      <div id="resources" className="w-full py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-2">
              Explore Resources
            </h2>
            <p className="text-lg text-[#86868b]">
              Discover datasets, models, and research papers
            </p>
          </div>

          <Suspense>
            <Projects />
          </Suspense>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      </main>
    </div>
  );
}
