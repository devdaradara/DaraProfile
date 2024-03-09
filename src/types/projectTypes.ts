
export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string;
}

export interface ProjectDetailType {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  productionPeriod: string;
  usedTechnologies: string[];
  techStack: string[];
}
