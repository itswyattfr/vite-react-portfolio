import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="h-[calc(100vh-4rem)] -mt-8 flex flex-col justify-center max-w-4xl mx-auto px-8">
      <section className="flex flex-col items-center justify-center flex-1">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light text-white tracking-tight">
            John Doe
          </h1>
          <p className="text-base text-gray-400 tracking-wide max-w-2xl mx-auto">
            Full Stack Developer crafting digital experiences with a focus on
            minimalist design and exceptional functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="https://github.com/itswyattfr"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 bg-transparent border border-dark-600 hover:border-white/30 text-gray-300 hover:text-white transition-all duration-300 rounded"
            >
              <span className="flex items-center justify-center gap-2">
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-wider">GitHub</span>
              </span>
            </a>
            <a
              href="https://discord.gg/cTVWEzzdyh"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 bg-transparent border border-[#5865F2]/30 hover:border-[#5865F2] text-[#5865F2]/80 hover:text-[#5865F2] transition-all duration-300 rounded"
            >
              <span className="flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-wider">Discord</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-dark-600/50">
          <div className="bg-dark-800/30 backdrop-blur-sm p-4 rounded-lg border border-dark-600/30">
            <GitHubCalendar
              username="itswyattfr"
              colorScheme="dark"
              className="w-full scale-[0.85] origin-center -my-3"
              fontSize={12}
              blockSize={10}
              blockMargin={4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
