"use client";
import { useState } from "react";
import Link from "next/link";
import { getHuggingFaceModels, getHuggingFaceDatasets } from "@/utils/huggingface";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hfExpanded, setHfExpanded] = useState(false);

  const huggingFaceModels = getHuggingFaceModels();
  const huggingFaceDatasets = getHuggingFaceDatasets();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg border border-[#e5e5e7] shadow-sm hover:shadow-md transition-all"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-[#1d1d1f]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white border-r border-[#e5e5e7] z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:fixed lg:top-0 lg:h-screen
        `}
      >
        <div className="h-full flex flex-col pt-16 lg:pt-4">
          {/* Logo/Title */}
          <div className="px-6 py-4 border-b border-[#e5e5e7]">
            <Link href="/" className="block">
              <h2 className="text-xl font-bold text-[#800020]">Ethiopian AI/ML</h2>
              <p className="text-xs text-[#86868b] mt-1">Resource Hub</p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("companies")}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
                >
                  Companies & Organizations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("resources")}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
                >
                  Resources
                </button>
              </li>
              
              {/* Hugging Face Section */}
              <li className="pt-4 border-t border-[#e5e5e7] mt-4">
                <button
                  onClick={() => {
                    setHfExpanded(!hfExpanded);
                    scrollToSection("resources");
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-[#800020] hover:bg-[#f5f5f7] transition-colors flex items-center justify-between"
                >
                  <span>Hugging Face</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${hfExpanded ? "rotate-90" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                
                {hfExpanded && (
                  <ul className="ml-4 mt-2 space-y-1 border-l border-[#e5e5e7] pl-4">
                    {/* Models */}
                    {huggingFaceModels.length > 0 && (
                      <li className="pt-2">
                        <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-2 px-4">
                          Models ({huggingFaceModels.length})
                        </div>
                        <ul className="space-y-1">
                          {huggingFaceModels.slice(0, 20).map((model) => {
                            // Hugging Face items have a direct 'link' field
                            const hfLink = model.link || model.links?.find((l) => 
                              l.link?.includes('huggingface.co') || l.name?.toLowerCase().includes('huggingface') || l.name?.toLowerCase().includes('hugging face')
                            )?.link || "#";
                            return (
                              <li key={model.id}>
                                <a
                                  href={hfLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-1.5 rounded text-xs text-[#1d1d1f] hover:bg-[#f5f5f7] hover:text-[#800020] transition-colors truncate"
                                  title={model.title}
                                >
                                  {model.title}
                                </a>
                              </li>
                            );
                          })}
                          {huggingFaceModels.length > 20 && (
                            <li className="px-4 py-1.5 text-xs text-[#86868b]">
                              +{huggingFaceModels.length - 20} more...
                            </li>
                          )}
                        </ul>
                      </li>
                    )}
                    
                    {/* Datasets */}
                    {huggingFaceDatasets.length > 0 && (
                      <li className="pt-2">
                        <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-2 px-4">
                          Datasets ({huggingFaceDatasets.length})
                        </div>
                        <ul className="space-y-1">
                          {huggingFaceDatasets.slice(0, 20).map((dataset) => {
                            // Hugging Face items have a direct 'link' field
                            const hfLink = dataset.link || dataset.links?.find((l) => 
                              l.link?.includes('huggingface.co') || l.name?.toLowerCase().includes('huggingface') || l.name?.toLowerCase().includes('hugging face')
                            )?.link || "#";
                            return (
                              <li key={dataset.id}>
                                <a
                                  href={hfLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-1.5 rounded text-xs text-[#1d1d1f] hover:bg-[#f5f5f7] hover:text-[#800020] transition-colors truncate"
                                  title={dataset.title}
                                >
                                  {dataset.title}
                                </a>
                              </li>
                            );
                          })}
                          {huggingFaceDatasets.length > 20 && (
                            <li className="px-4 py-1.5 text-xs text-[#86868b]">
                              +{huggingFaceDatasets.length - 20} more...
                            </li>
                          )}
                        </ul>
                      </li>
                    )}
                  </ul>
                )}
              </li>

            </ul>
          </nav>

          {/* Footer in sidebar */}
          <div className="px-6 py-4 border-t border-[#e5e5e7]">
            <a
              href="https://github.com/HenokB/ethiopian-ai-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#86868b] hover:text-[#800020] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

