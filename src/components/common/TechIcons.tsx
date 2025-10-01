import {
  Code,
  Globe,
  FileText,
  Palette,
  Zap,
  Monitor,
  Terminal,
  Wrench,
  Database,
  Shield,
  Server,
  HardDrive,
} from "lucide-react";

interface TechIconProps {
  tech: string;
  className?: string;
}

export function TechIcon({ tech, className = "h-6 w-6" }: TechIconProps) {
  const getTechIcon = (techName: string) => {
    switch (techName.toLowerCase()) {
      case "next.js":
        return <Code className={className} style={{ color: "#000000" }} />;
      case "react":
        return <Globe className={className} style={{ color: "#61DAFB" }} />;
      case "typescript":
        return <FileText className={className} style={{ color: "#3178C6" }} />;
      case "tailwind css":
        return <Palette className={className} style={{ color: "#06B6D4" }} />;
      case "framer motion":
        return <Zap className={className} style={{ color: "#0055FF" }} />;
      case "linux":
        return <Terminal className={className} style={{ color: "#FCC624" }} />;
      case "windows":
        return <Monitor className={className} style={{ color: "#0078D4" }} />;
      case "javascript":
        return <Code className={className} style={{ color: "#F7DF1E" }} />;
      case "css":
        return <Palette className={className} style={{ color: "#1572B6" }} />;
      case "html":
        return <FileText className={className} style={{ color: "#E34F26" }} />;
      case "node.js":
        return <Terminal className={className} style={{ color: "#339933" }} />;
      case "mongodb":
        return <Database className={className} style={{ color: "#47A248" }} />;
      case "mysql":
        return <Database className={className} style={{ color: "#4479A1" }} />;
      case "postgresql":
        return <Database className={className} style={{ color: "#336791" }} />;
      case "docker":
        return <Wrench className={className} style={{ color: "#2496ED" }} />;
      case "aws":
        return <Shield className={className} style={{ color: "#FF9900" }} />;
      case "server":
        return <Server className={className} style={{ color: "#4A90E2" }} />;
      case "backup":
        return <HardDrive className={className} style={{ color: "#7B68EE" }} />;
      default:
        return (
          <div
            className={`${className} rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300`}
          >
            {tech.charAt(0).toUpperCase()}
          </div>
        );
    }
  };

  return getTechIcon(tech);
}

interface TechIconsProps {
  technologies: string[];
  className?: string;
}

export function TechIcons({ technologies, className = "" }: TechIconsProps) {
  return (
    <div className={`flex justify-center items-center space-x-2 ${className}`}>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700"
          title={tech}
        >
          <TechIcon tech={tech} className="h-5 w-5" />
        </div>
      ))}
    </div>
  );
}
