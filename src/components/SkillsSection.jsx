import { useState } from "react";
import { cn } from "@/lib/utils";
import { ReactOriginalIcon, JavascriptPlainIcon, GoOriginalIcon, ExpressOriginalIcon, NestjsOriginalIcon, PostgresqlOriginalIcon, Html5PlainIcon, TypescriptOriginalIcon
  , TailwindcssOriginalIcon, NextjsOriginalIcon, DockerOriginalIcon, PythonOriginalIcon, NodejsOriginalIcon, JavaOriginalIcon, CplusplusOriginalIcon, MongodbOriginalIcon
  , RedisOriginalIcon, MysqlOriginalIcon, CassandraOriginalIcon, Neo4jOriginalIcon, KubernetesOriginalIcon, GitOriginalIcon, GithubOriginalIcon, Css3OriginalIcon, OracleOriginalIcon
} from "@devicon/react";


// ...existing code...

const skills = [
  // Backend Languages & Frameworks
  { name: "Python", icon: <PythonOriginalIcon size={30} />, category: "backend" },
  { name: "TypeScript", icon: <TypescriptOriginalIcon  size={30} />, category: "backend" },
  { name: "JavaScript", icon: <JavascriptPlainIcon size={30} />, category: "backend" },
  { name: "Go", icon: <GoOriginalIcon size={30} />, category: "backend" },
  { name: "C++", icon: <CplusplusOriginalIcon size={30}/>, category: "backend" },
  { name: "Java", icon: <JavaOriginalIcon size={30} />, category: "backend" },
  { name: "Node.js", icon: <NodejsOriginalIcon size={30}/>, category: "backend" },
  { name: "Express", icon: <ExpressOriginalIcon size={30}/>, category: "backend" },
  { name: "NestJS", icon: <NestjsOriginalIcon size={30} />, category: "backend" },

  // Frontend
  { name: "React", icon: <ReactOriginalIcon size={30}/>, category: "frontend" },
  { name: "Next.js", icon: <NextjsOriginalIcon size={30}/>, category: "frontend" },
  { name: "Tailwind CSS", icon: <TailwindcssOriginalIcon size={30}/>, category: "frontend" },
  { name: "HTML", icon: <Html5PlainIcon size={30}/>, category: "frontend" },
  { name: "CSS", icon: <Css3OriginalIcon size={30}/>, category: "frontend" },
  // Databases
  { name: "PostgreSQL", icon: <PostgresqlOriginalIcon size={30} />, category: "database" },
  { name: "MySQL", icon: <MysqlOriginalIcon size={30} />, category: "database" },
  { name: "OracleSQL", icon: <OracleOriginalIcon size={30} />, category: "database" },
  { name: "MongoDB", icon: <MongodbOriginalIcon size={30} />, category: "database" },
  { name: "Redis", icon: <RedisOriginalIcon size={30} />, category: "database" },
  { name: "Cassandra", icon: <CassandraOriginalIcon size={30} />, category: "database" },
  { name: "Neo4j", icon: <Neo4jOriginalIcon size={30} />, category: "database" },

  // DevOps & Tools

  { name: "Git", icon: <GitOriginalIcon size={30} />, category: "devops" },
  { name: "GitHub", icon: <GithubOriginalIcon size={30} />, category: "devops" },
  { name: "Docker", icon: <DockerOriginalIcon size={30} />, category: "devops" },
  { name: "Kubernetes", icon: <KubernetesOriginalIcon size={30} />, category: "devops" },
];

const categories = ["all", "backend", "frontend", "database", "devops"];


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllSkills, setShowAllSkills] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const displayedSkills = showAllSkills || activeCategory !== "all" 
    ? filteredSkills 
    : filteredSkills.slice(0, 6);

  const hasMoreSkills = activeCategory === "all" && filteredSkills.length > 6;
  
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-glow">My</span> <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
                setShowAllSkills(false);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg flex items-center">
                  {skill.icon}
                  <span className="ml-2">{skill.name}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
          
      </div>
    </section>
  );
};