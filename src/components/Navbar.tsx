import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const NavLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`${
          isActive ? "text-white" : "text-gray-400"
        } hover:text-white px-3 py-2 text-sm tracking-wider transition-colors duration-300`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="bg-dark-900/50 backdrop-blur-sm border-b border-dark-600/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-end h-16">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-dark-900/95 backdrop-blur-sm border-b border-dark-600/50">
          <div className="px-8 py-4 space-y-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
