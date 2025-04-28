"use client";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import Card from "@/utils/ui/Card";
import SearchBar from "../search-bar";
import { FilterOptionsTypes, ProjectType } from "@/utils/types";

const initialCardsToShow = 10;
const Projects = () => {
  const [searchQuesry, setSearchQuery] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);
  const [checkedFilters, setCheckedFilters] = useState<FilterOptionsTypes>({
    contents: [], // Default value as an example
    fields: [],
    domains: [],
  });
  const [projectsToDisplay, setProjectsToDisplay] = useState<ProjectType[]>([]);
  const [itmesToshow, setItemsToShow] = useState<number>(initialCardsToShow);

  const onChangeSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    setItemsToShow(initialCardsToShow);
    const searchProjects = () => {
      const query = searchQuesry.toLowerCase();
    
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
    };
    
    searchProjects();
  }, [searchQuesry]);

  useEffect(() => {
    setItemsToShow(initialCardsToShow);
    const filterProjects = () => {
      const query = searchQuesry.toLowerCase();
  
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
  
        const matchesSearch = (
          matchesTitle ||
          matchesField ||
          matchesCreator ||
          matchesDomain ||
          matchesCategory
        );
  
        // Check if project matches filter options
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
  
        return (
          matchesSearch && matchesContents && matchesFields && matchesDomains
        );
      });
  
      setFilteredProjects(results);
    };
  
    filterProjects();
  }, [checkedFilters, searchQuesry]);
  

  useEffect(() => {
    const loadedData = filteredProjects.slice(0, itmesToshow);
    setProjectsToDisplay([...loadedData]);
  }, [filteredProjects, itmesToshow]);

  return (
    <div className="w-full space-y-5">
      <SearchBar
        checkedFilters={checkedFilters}
        setCheckedFilters={setCheckedFilters}
        value={searchQuesry}
        onChange={onChangeSearchQuery}
      />
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {projectsToDisplay.length > 0 ? (
          projectsToDisplay.map((project, index) => {
            if (index > 19) return null; // Limit to first 20 projects
            return <Card key={index} index={index} project={project} />;
          })
          
        ) : (
          <div className="w-full py-24">
            <p className="opacity-65 text-2xl">No results found!</p>
          </div>
        )}
      </div>

      <div className="w-full flex justify-center py-10">
        {filteredProjects.length > projectsToDisplay.length ? (
          <button
            type="button"
            className="w-fit p-2.5 bg-blue-500 rounded hover:opacity-70"
            onClick={() => setItemsToShow(itmesToshow + 10)}
          >
            Load more contents
          </button>
        ) : (
          filteredProjects.length > 0 && (
            <p className="text-gray-400 text-sm">You have reached the end.</p>
          )
        )}
      </div>

    </div>
  );
};

export default Projects;
