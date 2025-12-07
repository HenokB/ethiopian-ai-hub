"use client";
import { useState, useEffect } from "react";

const AboutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* About Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 lg:top-4 lg:right-6 z-50 px-4 py-2 bg-white rounded-lg border border-[#e5e5e7] shadow-sm hover:shadow-md hover:border-[#800020]/30 transition-all text-sm font-medium text-[#1d1d1f] hover:text-[#800020]"
        aria-label="About"
      >
        About
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-[#e5e5e7] px-6 py-4 flex items-center justify-between rounded-t-3xl">
                <h2 className="text-2xl font-bold text-[#800020]">About</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-[#f5f5f7] rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5 text-[#86868b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-6 space-y-6">
                {/* Project Info */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    Ethiopian AI/ML Resource Hub
                  </h3>
                  <p className="text-[#86868b] leading-relaxed">
                    A comprehensive resource hub for discovering machine learning models, datasets, and research papers
                    related to Ethiopian languages. This platform serves developers, researchers, and AI enthusiasts
                    working with Amharic, Tigrinya, Oromo, and other Ethiopian languages.
                  </p>
                </div>

                {/* Creator */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    Created By
                  </h3>
                  <p className="text-[#86868b] leading-relaxed">
                    This project is maintained by{" "}
                    <a
                      href="https://github.com/HenokB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#800020] hover:underline font-medium"
                    >
                      HenokB
                    </a>
                    {" "}and the community.
                  </p>
                </div>

                {/* Data Sources */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    Data Sources
                  </h3>
                  <ul className="space-y-2 text-[#86868b]">
                    <li>• Projects and datasets are collected from various open sources including Hugging Face, GitHub, and research papers</li>
                    <li>• Company information is gathered from publicly available sources and community contributions</li>
                    <li>• All data is maintained in the{" "}
                      <a
                        href="https://github.com/HenokB/ethiopian-ai-hub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#800020] hover:underline"
                      >
                        GitHub repository
                      </a>
                    </li>
                  </ul>
                </div>

                {/* How to Contribute */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    How to Contribute
                  </h3>
                  <ul className="space-y-2 text-[#86868b]">
                    <li>• <strong>Add Projects:</strong> Submit new AI/ML models or datasets by creating a pull request</li>
                    <li>• <strong>Add Companies:</strong> Suggest new Ethiopian AI companies or organizations</li>
                    <li>• <strong>Fix Issues:</strong> Report bugs or suggest improvements via GitHub Issues</li>
                    <li>• <strong>Improve Documentation:</strong> Help improve project descriptions and metadata</li>
                    <li>• <strong>Share:</strong> Spread the word about this resource hub</li>
                  </ul>
                  <p className="mt-3 text-[#86868b]">
                    Visit our{" "}
                    <a
                      href="https://github.com/HenokB/ethiopian-ai-hub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#800020] hover:underline font-medium"
                    >
                      GitHub repository
                    </a>
                    {" "}for detailed contribution guidelines.
                  </p>
                </div>

                {/* License */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    License
                  </h3>
                  <p className="text-[#86868b] leading-relaxed">
                    This project is open source. Please check the repository for specific licensing information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutModal;

