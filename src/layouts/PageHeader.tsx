import { Button } from "../components/Button";

export function PageHeader() {
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
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 w-full mb-[100px]">
      <div className="flex gap-10 lg:gap-20 justify-between align-center pt-2  mx-4 text-xl ">
        <div className="flex gap-4 items-center lg:flex-shrink-0">
          <Button variant="ghost" size="default" onClick={scrollToTop}>
            <h1>ALEX HALL CODING</h1>
          </Button>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center lg:flex-shrink-0">
          <Button variant="ghost" size="default" onClick={scrollToProjects}>
            MY PROJECTS
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
