import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiPrettier,
  SiEslint,
  SiTestinglibrary,
  SiVitest,
} from "react-icons/si";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const techIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Linux: SiLinux,
  Prettier: SiPrettier,
  ESLint: SiEslint,
  "Testing Library": SiTestinglibrary,
  Vitest: SiVitest,
};

export function TechIcon({ name, size = 24, className = "" }: TechIconProps) {
  const IconComponent = techIcons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} className={className} />;
}
