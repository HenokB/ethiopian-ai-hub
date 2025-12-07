"use client";
import { useEffect, useState } from "react";
import { projects as originalProjects } from "@/data/projects";
import Card from "@/utils/ui/Card";
import SearchBar from "../search-bar";
import { ProjectType } from "@/utils/types";

const projects: ProjectType[] = originalProjects
  .map((project, index) => ({
    ...project,
    id: index + 1,
    links: project.links || [], // Ensure 'links' is always defined
    year: project.year || "", // Ensure 'year' is always defined
    field: Array.isArray(project.field) ? project.field.join(", ") : project.field || "", // Convert 'field' to a string
  }))
  .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title

const ITEMS_PER_PAGE = 10;

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);
  const [displayedProjects, setDisplayedProjects] = useState<ProjectType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onChangeSearchQuery = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1); // Reset to first page on search
  };

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = projects.filter((project) => {
      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesField = project.field?.toLowerCase().includes(query) ?? false;
      const matchesCreator = project.creator?.some((author) =>
        typeof author === "string"
          ? author.toLowerCase().includes(query)
          : author.name.toLowerCase().includes(query)
      ) ?? false;
      const matchesDomain = project.domain?.some((domainItem) =>
        domainItem.toLowerCase().includes(query)
      ) ?? false;
      const matchesCategory = project.category?.some((categoryItem) =>
        categoryItem.toLowerCase().includes(query)
      ) ?? false;

      return matchesTitle || matchesField || matchesCreator || matchesDomain || matchesCategory;
    });

    setFilteredProjects(filtered);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchQuery]);

  useEffect(() => {
    const endIndex = currentPage * ITEMS_PER_PAGE;
    setDisplayedProjects(filteredProjects.slice(0, endIndex));
  }, [filteredProjects, currentPage]);

  const hasMore = displayedProjects.length < filteredProjects.length;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="w-full space-y-8">
      <SearchBar
        value={searchQuery}
        onChange={onChangeSearchQuery}
      />
      <div className="w-full grid gap-6">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))
        ) : (
          <div className="w-full h-[50vh] flex items-center justify-center">
            <p className="text-2xl text-[#86868b] font-light">No results found</p>
          </div>
        )}
      </div>
      
      {hasMore && displayedProjects.length > 0 && (
        <div className="w-full flex justify-center pt-4">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3.5 bg-[#800020] text-white rounded-full text-base font-medium hover:bg-[#900024] transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
          >
            Load More
          </button>
        </div>
      )}
      
      {displayedProjects.length > 0 && (
        <div className="w-full text-center text-sm text-[#86868b] pt-2">
          Showing {displayedProjects.length} of {filteredProjects.length} results
        </div>
      )}
    </div>
  );
};

export default Projects;
