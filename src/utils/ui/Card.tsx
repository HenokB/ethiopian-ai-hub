import Link from "next/link";
import { IconStart } from "@/utils/icons";
import { ProjectType } from "@/utils/types";
import IconMoniter from "../icons/IconMoniter";
import IconLink from "../icons/IconLink";

interface ProjectProps {
  project: ProjectType;
}

const Card = ({ project }: ProjectProps) => {
  return (
    <div className="w-full z-0 border rounded-2xl p-5 space-y-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black shadow-md hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-4 gap-4">
        <div className="flex items-center space-x-3">
          {project.links?.[0]?.link ? (
            <Link
              target="_blank"
              href={project.links[0].link}
              className="flex items-center text-lg font-semibold text-white hover:underline"
            >
              <IconMoniter className="w-5 h-5 mr-2" />
              {project.title}
            </Link>
          ) : (
            <div className="flex items-center text-lg font-semibold text-white">
              <IconMoniter className="w-5 h-5 mr-2" />
              {project.title}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.category?.map((item, i) => (
            <span
              key={i}
              className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
          {project.domain?.slice(0, 2).map((item, i) => (
            <span
              key={i}
              className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
          {project.domain && project.domain.length > 2 && (
            <span className="text-xs text-gray-400">
              +{project.domain.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Authors */}
      <div className="flex flex-wrap gap-2">
        {project.creator?.map((author, i) => (
          <span
            key={`creator-${i}`}
            className="text-xs bg-gray-700 text-gray-200 px-3 py-1 rounded-full"
          >
            {author}
          </span>
        )) || (
          <p className="text-gray-400 text-xs">No authors listed.</p>
        )}
      </div>

      {/* Languages */}
      {project.languages_used && project.languages_used.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {project.languages_used.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="flex items-center space-x-1 text-xs text-purple-300 bg-purple-700/20 px-3 py-1 rounded-full"
            >
              <IconStart className="w-4 h-4" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-700 pt-4">
        <div className="flex flex-wrap gap-3">
          {project.links?.slice(0, 4).map((item, i) => (
            <Link
              key={i}
              target="_blank"
              href={item.link}
              className="flex items-center space-x-1 text-xs bg-gray-600/40 text-white px-3 py-1 rounded-md hover:bg-gray-500/70 transition"
            >
              <IconLink className="w-4 h-4" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="text-xs text-gray-400">{project.year}</div>
      </div>
    </div>
  );
};

export default Card;
