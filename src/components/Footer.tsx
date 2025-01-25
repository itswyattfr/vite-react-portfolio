import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-600 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/itswyattfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:buisness@nightfallstudios.xyz"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wyatt Gowing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
