"use client";
import { useEffect, useState } from "react";
import { projects as originalProjects } from "@/data/projects";
import Card from "@/utils/ui/Card";
import SearchBar from "../search-bar";
import { FilterOptionsTypes, ProjectType } from "@/utils/types";

const projects = originalProjects.map((project, index) => ({
  ...project,
  id: index + 1,
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
    const results = projects.filter((project) => {
      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesField = project.field?.toLowerCase().includes(query) ?? false;
      const matchesCreator = project.creator?.some((author) =>
        author.toLowerCase().includes(query)
      ) ?? false;
      const matchesDomain = project.domain?.some((domainItem) =>
        domainItem.toLowerCase().includes(query)
      ) ?? false;
      const matchesCategory = project.category?.some((categoryItem) =>
        categoryItem.toLowerCase().includes(query)
      ) ?? false;

      return (
        matchesTitle ||
        matchesField ||
        matchesCreator ||
        matchesDomain ||
        matchesCategory
      );
    });
    setFilteredProjects(results);
  }, [searchQuery]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const results = projects.filter((project) => {
      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesField = project.field?.toLowerCase().includes(query) ?? false;
      const matchesCreator = project.creator?.some((author) =>
        author.toLowerCase().includes(query)
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

    setFilteredProjects(results);
  }, [checkedFilters, searchQuery]);

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
          <div className="w-full py-24">
            <p className="opacity-65 text-2xl">No results found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
