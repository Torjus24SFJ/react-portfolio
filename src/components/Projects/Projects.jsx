import { Heading } from "../Heading/Heading";

export function Projects() {
  return (
    <>
      <section id="projects" className="flex flex-col mr-30">
        <Heading alignment="right">
          <h2>Projects</h2>
        </Heading>
        <div className="grid grid-cols-4 mt-20 gap-5">
          <a href="https://e-commerce-kappa-pearl.vercel.app/">
            <div className="w-50 h-50 cursor-pointer">
              <img
                src="/public/assets/webshop.png"
                className="w-cover h-cover"
                alt="Webstore"
              />
            </div>
          </a>
          <span className="w-50 h-50" />
          <span className="w-50 h-50" />
          <span className="w-50 h-50" />
          <span className="w-50 h-50" />
          <span className="w-50 h-50" />
          <span className="w-50 h-50" />
          <span className="w-50 h-50" />
        </div>
      </section>
    </>
  );
}

//!TODO Fix position of projects header text
