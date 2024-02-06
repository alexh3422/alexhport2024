import { useState } from "react";
import { Button } from "../components/Button";
import { Typing } from "react-typing-animate";

export function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToProjects = () => {
    const projects = document.getElementById("projects");
    if (projects) {
      const offset = 100;
      const rect = projects.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - offset,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };
  const scrollToToolbox = () => {
    const toolbox = document.getElementById("toolbox");
    if (toolbox) {
      const offset = 100;
      const rect = toolbox.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - offset,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      const offset = 100;
      const rect = about.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - offset,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      const offset = 100;
      const rect = contact.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - offset,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 w-full mb-[100px]">
      <div className="flex gap-10 lg:gap-20 justify-between items-center pt-2 mx-4 text-xl ">
        <Button variant="ghost" size="default" onClick={scrollToTop}>
          <Typing text={['Alex Hall Coding']} speed={300} />
        </Button>
        <div className="flex flex-row items-center lg:hidden">
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 right-0 mt-16 mr-4 flex flex-col items-center bg-white shadow-md py-2 px-4 rounded-md">
              <Button variant="ghost" size="default" onClick={scrollToProjects}>
                MY PROJECTS
              </Button>
              <Button variant="ghost" size="default" onClick={scrollToToolbox}>
                MY TOOLBOX
              </Button>
              <Button variant="ghost" size="default" onClick={scrollToAbout}>
                ABOUT
              </Button>
              <Button variant="ghost" size="default" onClick={scrollToContact}>
                CONTACT
              </Button>
            </div>
          )}
        </div>
        <div
          className={`hidden lg:flex flex-row gap-4 items-center justify-center lg:flex-shrink-0 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <Button variant="ghost" size="default" onClick={scrollToProjects}>
            MY PROJECTS
          </Button>
          <Button variant="ghost" size="default" onClick={scrollToToolbox}>
            MY TOOLBOX
          </Button>
          <Button variant="ghost" size="default" onClick={scrollToAbout}>
            ABOUT
          </Button>
          <Button variant="ghost" size="default" onClick={scrollToContact}>
            CONTACT
          </Button>
        </div>
      </div>
    </div>
  );
}
