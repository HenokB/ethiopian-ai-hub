"use client";
import Link from "next/link";
import { IconStart } from "@/utils/icons";
import { ProjectType } from "@/utils/types";
import BadgeButton from "./BadgeButton";

interface ProjectProps {
  project: ProjectType;
}

const Card = ({ project }: ProjectProps) => {
  const isHuggingFace = project.type !== undefined;

  return (
    <div
      className={`group relative w-full z-0 rounded-2xl p-6 space-y-6 transition-all duration-500 overflow-hidden 
          
          bg-[#080818] 
          backdrop-blur-lg 
          shadow-[0 10px 30px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1))] 
          hover:shadow-[0 10px 30px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)]`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20 opacity-70 z-0" />

      {/* Glass border effect */}
      <div className="absolute inset-0 rounded-2xl bg-[#181828] border border-white/10 pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col justify-between items-start  border-b border-white/10 pb-4 gap-4">
          <div className="flex flex-row justify-between items-start w-full gap-8">
            <div className="flex items-center space-x-3">
              {project.links?.[0]?.link ? (
                <Link
                  target="_blank"
                  href={project.links[0].link}
                  className="flex items-center text-xl font-bold group/link text-white "
                >
                  {project.title}
                </Link>
              ) : (
                <h3 className="flex items-center text-xl font-bold">
                  {project.title}
                </h3>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {/* first External Link button icon  */}
              {project.links?.slice(0, 1).map((item, i) => (
                <Link
                  key={i}
                  target="_blank"
                  href={item.link}
                  className="flex items-center justify-center bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-3 rounded-full border border-white/10 hover:border-blue-400/30 shadow-md hover:shadow-blue-500/20 "
                >
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            {project.category?.map((item, i) => (
              <BadgeButton
                key={i}
                field={"category"}
                value={item}
                selectedClassName="bg-blue-700/70 text-white border-blue-400 shadow-blue-500/40 ring-2 ring-blue-400"
                unselectedClassName="bg-blue-600/30 text-blue-200 border-blue-400/20 shadow-blue-500/20 hover:bg-blue-700/40"
              />
            ))}
            {project.domain?.slice(0, 2).map((item, i) => (
              <BadgeButton
                key={i}
                field={"domain"}
                value={item}
                selectedClassName="bg-green-700/70 text-white border-green-400 shadow-green-500/40 ring-2 ring-green-400"
                unselectedClassName="bg-green-600/30 text-green-200 border-green-400/20 shadow-green-500/20 hover:bg-green-700/40"
              />
            ))}
          </div>
        </div>

        {/* Creators */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.creator && project.creator.length > 0 ? (
            project.creator.map(
              (
                author: string | { name: string; profile?: string },
                i: number
              ) => {
                const name = typeof author === "string" ? author : author.name;
                const profile =
                  typeof author === "string" ? undefined : author.profile;

                return (
                  <BadgeButton
                    key={i}
                    field={"author"}
                    value={name}
                    selectedClassName="bg-gray-700/70 text-white border-gray-400 shadow-gray-500/40 ring-2 ring-gray-400"
                    unselectedClassName="bg-gray-600/30 text-gray-200 border-gray-400/20 shadow-gray-500/20 hover:bg-gray-700/40"
                  >
                      <svg
                        className="w-4 h-4 text-gray-300 "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                      </svg>
                      {profile ? (
                        <Link
                          href={profile}
                          target="_blank"
                          aria-label={name}
                          title={name}
                          className=" text-gray-300"
                        >
                          {name}
                        </Link>
                      ) : (
                        <span
                          className=" text-gray-300"
                          title={name}
                        >
                          {name}
                        </span>
                      )}
                  </BadgeButton>
                );
              }
            )
          ) : (
            <p className="text-gray-400 text-xs">No authors listed.</p>
          )}
        </div>

        {/* Languages */}
        {project.languages_used && project.languages_used.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {project.languages_used.slice(0, 3).map((item, i) => (
              <BadgeButton
                key={i}
                field={"language"}
                value={item}
                selectedClassName="bg-purple-700/70 text-white border-purple-400 shadow-purple-500/40 ring-2 ring-purple-400 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 transform  transition-all duration-300"
                unselectedClassName="bg-purple-600/30 text-purple-200 border-purple-400/20 shadow-purple-500/20 hover:bg-purple-700/40 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 transform  transition-all duration-300"
              >
                  <IconStart className="w-4 h-4 text-purple-300" />
                  <p>{item}</p>
              </BadgeButton>
            ))}
          </div>
        )}

        {/* HuggingFace Tags */}
        {isHuggingFace && (
          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags?.slice(0, 5).map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium bg-yellow-700/30 text-yellow-200 px-3 py-1 rounded-full border border-yellow-500/30 shadow-inner transform hover:scale-105 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-white/10 pt-4 mt-4">
          <div className="flex flex-wrap gap-3">
            {project.links?.slice(0, 4).map((item, i) => (
              <Link
                key={i}
                target="_blank"
                href={item.link}
                className="flex items-center space-x-2 text-xs bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-white px-4 py-2 rounded-lg border border-white/10 hover:border-blue-400/30 shadow-md hover:shadow-blue-500/20 transform  transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col text-xs text-gray-300 space-y-1 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm">
            <span className="font-medium">{project.year}</span>
            {isHuggingFace && project.downloads_total !== undefined && (
              <span className="flex items-center">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {project.downloads_total.toLocaleString()} downloads
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
