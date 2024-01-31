import { Button } from "../components/Button";
import { motion } from "framer-motion";
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
      title: `Intuitive Fitness`,
      description: `Business site for the Shoreline, WA based company Intuitive Fitness`,
      link: `https://www.nwintuitivefit.com`,
    },
    {
      id: 3,
      title: `Seattle Fire Department Call Log`,
      description: `A site linked to the City of Seattle data API displaying current and previous Seattle Fire Department calls`,
      link: `https://alexh34222.github.io/SFD/`,
    },
    {
      id: 4,
      title: `Cattention`,
      description: `A site for people to study together with a timer for breaks, they can create rooms and chat with each other - powered by Socket.io - *group project`,
      link: `https://cattention.netlify.app/`,
    },
    {
      id: 5,
      title: `Firebase Auth Template`,
      description: `A login/signup page template using Firebase Email/Password Authentication`,
      link: `https://firebase-template-ahc.netlify.app/`,
    },
  ];

  const projectLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div
        id="projects"
        className="flex flex-col justify-center align-center text-center mt-20 mb-20"
      >
        <div className="text-3xl mb-10">
          <h1>MY PROJECTS</h1>
        </div>
        <div className="mx-auto max-w-[70%]  p-5">
          <div className="flex justify-center align-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} onClick={() => projectLink(project.link)}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button variant="alexRed" size="default">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
