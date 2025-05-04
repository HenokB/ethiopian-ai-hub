import Link from "next/link";
import { IconStart } from "@/utils/icons";
import { ProjectType } from "@/utils/types";
import { useState } from "react";
import IconMoniter from "../icons/IconMoniter";
import IconLink from "../icons/IconLink";

interface ProjectProps {
  project: ProjectType;
}

const Card = ({ project }: ProjectProps) => {
  const isHuggingFace = project.type !== undefined;
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse move handler for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className="group relative w-full z-0 rounded-2xl p-6 space-y-6 transition-all duration-500 overflow-hidden"
      style={{
        background: "rgba(10, 10, 15, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: isHovered 
          ? "0 20px 40px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.2), 0 0 20px rgba(78, 107, 255, 0.3)" 
          : "0 10px 30px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20 opacity-70 z-0"></div>
      
      {/* Glass border effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none z-0"></div>
      
      {/* Spotlight effect */}
      <div 
        className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 160, 255, 0.15), transparent)`,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      ></div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-4 gap-4">
          <div className="flex items-center space-x-3">
            {project.links?.[0]?.link ? (
              <Link
                target="_blank"
                href={project.links[0].link}
                className="flex items-center text-xl font-bold group/link"
              >
                <span className="mr-3 bg-gradient-to-br from-blue-400 to-purple-500 p-2 rounded-lg text-white shadow-lg transform group-hover/link:scale-110 transition-all duration-300">
                  <IconMoniter className="w-5 h-5" />
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300">
                  {project.title}
                </span>
              </Link>
            ) : (
              <div className="flex items-center text-xl font-bold">
                <span className="mr-3 bg-gradient-to-br from-blue-400 to-purple-500 p-2 rounded-lg text-white shadow-lg">
                  <IconMoniter className="w-5 h-5" />
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.category?.map((item, i) => (
              <span
                key={i}
                className="text-xs bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full font-medium backdrop-blur-sm shadow-blue-500/20 shadow-inner border border-blue-400/20 animate-pulse"
              >
                {item}
              </span>
            ))}
            {project.domain?.slice(0, 2).map((item, i) => (
              <span
                key={i}
                className="text-xs bg-green-600/30 text-green-200 px-3 py-1 rounded-full font-medium backdrop-blur-sm shadow-green-500/20 shadow-inner border border-green-400/20"
              >
                {item}
              </span>
            ))}
            {project.domain && project.domain.length > 2 && (
              <span className="text-xs text-gray-300 px-2 py-1 rounded-full backdrop-blur-sm bg-gray-500/20">
                +{project.domain.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Creators */}
        <div className="flex flex-wrap gap-2 mt-4">
  {project.creator?.map(
    (
      author: string | { name: string; profile?: string },
      i: number
    ) => (
      typeof author === "string" ? (
        <span
          key={`creator-${i}`}
          className="text-xs font-medium bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 px-4 py-2 rounded-full border border-gray-600/30 shadow-md transform hover:translate-y-px transition-all"
        >
          {author}
        </span>
      ) : (
        <Link
          key={`creator-${i}`}
          href={author.profile || "#"}
          target="_blank"
          className="text-xs font-medium bg-gradient-to-r from-blue-900/60 to-indigo-900/60 text-blue-200 px-4 py-2 rounded-full border border-blue-500/30 shadow-md transform hover:-translate-y-1 hover:shadow-blue-500/20 hover:shadow-lg transition-all"
        >
          {author.name}
        </Link>
      )
    )
  ) || (
    <p className="text-gray-400 text-xs">No authors listed.</p>
  )}
</div>


        {/* Languages */}
        {project.languages_used && project.languages_used.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {project.languages_used.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-xs font-medium text-purple-200 bg-purple-900/40 px-4 py-2 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                <IconStart className="w-4 h-4 text-purple-300" />
                <p>{item}</p>
              </div>
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
                className="flex items-center space-x-2 text-xs bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-white px-4 py-2 rounded-lg border border-white/10 hover:border-blue-400/30 shadow-md hover:shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                <IconLink className="w-4 h-4 text-blue-300" />
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
