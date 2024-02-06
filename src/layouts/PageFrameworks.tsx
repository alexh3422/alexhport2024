interface Framework {
  id: number;
  src: string;
}

export function PageFrameworks() {
  const frameworks: Framework[] = [
    {
      id: 1,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      id: 2,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      id: 3,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      id: 4,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 5,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      id: 6,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      id: 7,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 8,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      id: 9,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      id: 10,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      id: 11,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 12,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ];

  return (
    <div
      id="toolbox"
      className="flex flex-col justify-center items-center mb-20"
    >
      <div className=" w-full">
        <div className="flex flex-col justify-center items-center text-center mb-10 mt-10">
          <div className="text-3xl mb-10">
            <h1>MY TOOLBOX</h1>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mb-4">
            {frameworks.map((framework) => (
              <div
                key={framework.id}
                className="flex justify-center items-center"
              >
                <img
                  src={framework.src}
                  className="w-14 h-14 md:w-25 md:h-25"
                  alt={`Framework ${framework.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
