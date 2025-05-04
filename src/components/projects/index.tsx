"use client";
import { useEffect, useState } from "react";
import { projects as originalProjects } from "@/data/projects";
import Card from "@/utils/ui/Card";
import SearchBar from "../search-bar";
import { FilterOptionsTypes, ProjectType } from "@/utils/types";

const projects: ProjectType[] = originalProjects.map((project, index) => ({
  ...project,
  id: index + 1,
  links: project.links || [], // Ensure 'links' is always defined
  year: project.year || "", // Ensure 'year' is always defined
  field: Array.isArray(project.field) ? project.field.join(", ") : project.field || "", // Convert 'field' to a string
}));

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);
  const [checkedFilters, setCheckedFilters] = useState<FilterOptionsTypes>({
    contents: [],
    fields: [],
    domains: [],
  });

  const onChangeSearchQuery = (value: string) => {
    setSearchQuery(value);
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

      const matchesSearch =
        matchesTitle || matchesField || matchesCreator || matchesDomain || matchesCategory;

      const matchesContents = checkedFilters.contents.length
        ? checkedFilters.contents.some((content) =>
            project.category?.some((projectContent) =>
              projectContent.toLowerCase().includes(content.toLowerCase())
            )
          )
        : true;

      const matchesFields = checkedFilters.fields.length
        ? checkedFilters.fields.some((field) =>
            project.field?.toLowerCase().includes(field.toLowerCase())
          )
        : true;

      const matchesDomains = checkedFilters.domains.length
        ? checkedFilters.domains.some((domain) =>
            project.domain?.some((projectDomain) =>
              projectDomain.toLowerCase().includes(domain.toLowerCase())
            )
          )
        : true;

      return matchesSearch && matchesContents && matchesFields && matchesDomains;
    });

    setFilteredProjects(filtered);
  }, [searchQuery, checkedFilters]);

  return (
    <div className="w-full space-y-5">
      <SearchBar
        checkedFilters={checkedFilters}
        setCheckedFilters={setCheckedFilters}
        value={searchQuery}
        onChange={onChangeSearchQuery}
      />
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))
        ) : (
          <div className="w-full h-[50vh] flex items-center justify-center">
            <p className="text-2xl text-white/60">No results found!</p>
          </div>

        )}
      </div>
    </div>
  );
};

export default Projects;
