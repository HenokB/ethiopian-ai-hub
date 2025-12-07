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
      className={`group relative w-full z-0 rounded-3xl p-7 md:p-9 space-y-7 transition-all duration-300 overflow-hidden 
          bg-white
          border border-[#e5e5e7]
          shadow-sm
          hover:shadow-xl
          hover:border-[#800020]/30
          hover:-translate-y-1`}
    >

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col justify-between items-start border-b border-[#e5e5e7] pb-7 gap-5">
          <div className="flex flex-row justify-between items-start w-full gap-6">
            <div className="flex items-center space-x-3 flex-1">
              {project.links?.[0]?.link ? (
                <Link
                  target="_blank"
                  href={project.links[0].link}
                  className="flex items-center text-2xl md:text-3xl font-bold group/link text-[#800020] hover:text-[#900024] transition-colors duration-200 leading-tight"
                >
                  {project.title}
                </Link>
              ) : (
                <h3 className="flex items-center text-2xl md:text-3xl font-bold text-[#800020] leading-tight">
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
                  className="flex items-center justify-center bg-[#800020]/10 p-3 rounded-full hover:bg-[#800020]/20 transition-colors duration-200 active:scale-95 group-hover:bg-[#800020]/15"
                >
                  <svg
                    className="w-4 h-4 text-[#800020]"
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

          <div className="flex gap-2.5 flex-wrap">
            {project.category?.map((item, i) => (
              <BadgeButton
                key={i}
                field={"category"}
                value={item}
                selectedClassName="bg-[#800020] text-white border-[#800020] shadow-sm"
                unselectedClassName="bg-[#f5f5f7] text-[#1d1d1f] border-[#d2d2d7] hover:bg-[#e8e8ed] hover:border-[#800020]/30"
              />
            ))}
            {project.domain?.slice(0, 2).map((item, i) => (
              <BadgeButton
                key={i}
                field={"domain"}
                value={item}
                selectedClassName="bg-[#34c759] text-white border-[#34c759] shadow-sm"
                unselectedClassName="bg-[#f5f5f7] text-[#1d1d1f] border-[#d2d2d7] hover:bg-[#e8e8ed]"
              />
            ))}
          </div>
        </div>

        {/* Description if available */}
        {project.description && (
          <div className="pt-2">
            <p className="text-[#86868b] text-base leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        )}

        {/* Creators */}
        <div className="flex flex-wrap gap-2.5 mt-5">
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
                    selectedClassName="bg-[#800020] text-white border-[#800020] shadow-sm"
                    unselectedClassName="bg-[#f5f5f7] text-[#1d1d1f] border-[#d2d2d7] hover:bg-[#e8e8ed] hover:border-[#800020]/30"
                  >
                      <svg
                        className="w-4 h-4 text-[#86868b]"
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
                          className="text-[#1d1d1f] hover:text-[#800020] transition-colors"
                        >
                          {name}
                        </Link>
                      ) : (
                        <span
                          className="text-[#1d1d1f]"
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
            <p className="text-[#86868b] text-sm">No authors listed.</p>
          )}
        </div>

        {/* Languages */}
        {project.languages_used && project.languages_used.length > 0 && (
          <div className="flex flex-wrap gap-2.5 pt-5">
            {project.languages_used.slice(0, 3).map((item, i) => (
              <BadgeButton
                key={i}
                field={"language"}
                value={item}
                selectedClassName="bg-[#af52de] text-white border-[#af52de] shadow-sm"
                unselectedClassName="bg-[#f5f5f7] text-[#1d1d1f] border-[#d2d2d7] hover:bg-[#e8e8ed]"
              >
                  <IconStart className="w-4 h-4 text-[#86868b]" />
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
                className="text-xs font-medium bg-[#ff9500]/10 text-[#ff9500] px-3 py-1 rounded-full border border-[#ff9500]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 border-t border-[#e5e5e7] pt-7 mt-6">
          <div className="flex flex-wrap gap-3">
            {project.links?.slice(0, 4).map((item, i) => (
              <Link
                key={i}
                target="_blank"
                href={item.link}
                className="flex items-center space-x-2 text-sm bg-[#f5f5f7] text-[#1d1d1f] px-4 py-2.5 rounded-full hover:bg-[#800020]/10 hover:text-[#800020] transition-colors duration-200 active:scale-95 font-medium"
              >
                <svg
                  className="w-4 h-4"
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

          <div className="flex flex-col text-sm text-[#86868b] space-y-1.5 bg-[#f5f5f7] px-5 py-2.5 rounded-full">
            <span className="font-semibold text-[#800020]">{project.year}</span>
            {isHuggingFace && project.downloads_total !== undefined && (
              <span className="flex items-center text-xs">
                <span className="inline-block w-2 h-2 bg-[#34c759] rounded-full mr-2"></span>
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
