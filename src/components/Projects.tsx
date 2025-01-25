import React, { useEffect, useState } from "react";
import { ExternalLink, Github, Clock } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
  lastCommit: string;
}

interface GitHubRepo {
  name: string;
  owner: { login: string };
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  full_name: string;
  default_branch: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("Fetching projects...");
        const response = await fetch(
          "https://api.github.com/users/itswyattfr/repos?sort=updated&per_page=100"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const repos: GitHubRepo[] = await response.json();
        console.log("Fetched repos:", repos);

        const projectPromises = repos.map(async (repo) => {
          try {
            let description = repo.description || "No description available.";

            // Fetch last commit using public API
            const commitResponse = await fetch(
              `https://api.github.com/repos/${repo.full_name}/commits/${repo.default_branch}`
            );
            
            if (!commitResponse.ok) {
              throw new Error("Failed to fetch commit data");
            }

            const commit = await commitResponse.json();

            const tags = [repo.language, ...(repo.topics || [])].filter(
              (tag): tag is string => !!tag
            );

            return {
              title: repo.name,
              description,
              image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
              github: repo.html_url, 
              demo: repo.homepage || repo.html_url,
              tags,
              lastCommit: commit.commit?.author?.date
                ? new Date(commit.commit.author.date).toLocaleDateString()
                : "Unknown",
            };
          } catch (error) {
            console.error(`Error fetching data for repo ${repo.name}:`, error);
            return null;
          }
        });

        const validProjects = (await Promise.all(projectPromises)).filter(
          (p): p is Project => p !== null
        );

        setProjects(validProjects);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to fetch projects");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-dark-800/30 backdrop-blur-sm border border-dark-600/30 rounded-lg overflow-hidden hover:border-dark-600/60 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-dark-700/50 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors group"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <span className="text-xs text-gray-500">
                    Updated {new Date(project.lastCommit).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
