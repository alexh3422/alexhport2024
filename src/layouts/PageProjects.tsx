import { Button } from "../components/Button";

export function PageProjects() {
  const projects = [
    {
      id: 1,
      title: `mySQL Employee Tracker`,
      description: `A terminal based app using the mySQL database`,
      link: `https://github.com/alexh3422/sqlEmployeeTracker`,
    },
    {
      id: 2,
      title: `Project 2`,
      description: `A terminal based app using the mySQL database`,
      link: `https://github.com/alexh3422/sqlEmployeeTracker`,
    },
    {
      id: 3,
      title: `Project 3`,
      description: `A terminal based app using the mySQL database`,
      link: `https://github.com/alexh3422/sqlEmployeeTracker`,
    },
    {
      id: 4,
      title: `Project 4`,
      description: `A terminal based app using the mySQL database`,
      link: `https://github.com/alexh3422/sqlEmployeeTracker`,
    },
  ];

  const projectLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div
        id="projects"
        className="flex flex-col justify-center align-center text-center mt-20"
      >
        <div className="text-3xl mb-10">
          <h1>MY PROJECTS</h1>
        </div>
        <div className="mx-auto max-w-[70%]  p-5">
          <div className="flex justify-center align-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} onClick={() => projectLink(project.link)}>
                <Button variant="alexRed" size="default">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
