import { Heading } from "../Heading/Heading";

export function Projects() {
  const projects = [
    {
      name: "E-commerce",
      img: "/assets/webshop.png",
      link: "https://e-commerce-kappa-pearl.vercel.app/",
    },
    {
      name: "Music player",
      img: "",
      link: "",
    },
  ];

  const ProjectGrid = () => {
    return (
      <div className="flex flex-col mr-30">
        {projects.map((project) => (
          <div key={project} className="grid grid-cols-4 mt-20 gap-5">
            <h4 className="text-white">{project.name}</h4>
            <a href={project.link}>
              <div className="w-50 h-50 cursor-pointer">
                <img
                  src={project.img}
                  className="w-cover h-cover"
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
        {/* <div className="grid grid-cols-4 mt-20 gap-5">
          <a href="https://e-commerce-kappa-pearl.vercel.app/">
            <div className="w-50 h-50 cursor-pointer">
              <img
                src="/public/assets/webshop.png"
                className="w-cover h-cover"
                alt="Webstore"
              />
            </div>
          </a>
        </div> */}
      </section>
    </>
  );
}

//!TODO Fix position of projects header text
