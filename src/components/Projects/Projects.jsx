import { Heading } from "../Heading/Heading";

export function Projects() {
  const projects = [
    {
      name: "E-commerce",
      img: "/assets/webshop.png",
      link: "https://e-commerce-kappa-pearl.vercel.app/",
    },
    {
      name: "Marketplace",
      img: "/assets/marketplace.png",
      link: "https://marketplace-plum-delta.vercel.app/",
    },
  ];

  const ProjectGrid = () => {
    return (
      <div className="grid grid-cols-4 gap-20">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-2">
              <h4 className="text-white">{project.name}</h4>
              <a href={project.link} target="_blank">
                <div className="w-75 h-75 cursor-pointer">
                  <img
                    src={project.img}
                    className="w-cover h-cover text-neutral-400"
                    alt="project-img"
                  />
                </div>
              </a>
            </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <section id="projects" className="flex flex-col mr-30">
        <Heading alignment="right">
          <h2>Projects</h2>
        </Heading>
        <ProjectGrid />
      </section>
    </>
  );
}
