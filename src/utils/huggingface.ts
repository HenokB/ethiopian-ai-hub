import { projects as allProjects } from "@/data/projects";
import { ProjectType } from "@/utils/types";

export const getHuggingFaceItems = (): ProjectType[] => {
  return allProjects
    .map((project, index) => {
      // Handle Hugging Face items which might have a direct 'link' field
      const links = project.links || [];
      // If project has a direct 'link' field (Hugging Face items), add it to links
      if ((project as any).link && !links.find((l: any) => l.link === (project as any).link)) {
        links.push({
          id: links.length + 1,
          name: "Hugging Face",
          link: (project as any).link,
        });
      }
      
      return {
        ...project,
        id: index + 1,
        links: links,
        year: project.year || "",
        field: Array.isArray(project.field) ? project.field.join(", ") : project.field || "",
      };
    })
    .filter((project) => project.type !== undefined) // Hugging Face items have a type field
    .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically
};

export const getHuggingFaceModels = (): ProjectType[] => {
  return getHuggingFaceItems().filter((item) => item.type === "model");
};

export const getHuggingFaceDatasets = (): ProjectType[] => {
  return getHuggingFaceItems().filter((item) => item.type === "dataset");
};

