export interface SocialAccountsTypes {
  id: number;
  title: string;
  link: string;
  icon: React.JSX.Element;
}

export interface IconProps {
  className?: string;
}

export interface LinkesTypes {
  id: number;
  name: string;
  link: string;
}

export interface ProjectType {
  id: number | string;
  title: string;
  languages_used?: string[];
  creator?: (string | { name: string; profile: string })[];
  description?: string; // <-- make it optional
  featured?: boolean;
  domain?: string[];
  category?: string[];
  field?: string;
  links: LinkesTypes[];
  year: string;
  content?: string;
  type?: string; // <-- add type field (for HuggingFace)
  link?: string; // <-- add main HuggingFace link
  downloads_total?: number;
  last_modified?: string;
  tags?: string[];
}



export interface FilterOptionsTypes {
  contents: string[] | [];
  fields: string[] | [];
  domains: string[] | [];
}
