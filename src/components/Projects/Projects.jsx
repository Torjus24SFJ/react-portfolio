import { Heading } from "../Heading/Heading";

export function Projects() {
  return (
    <>
      <section id="projects" className="flex flex-col mr-30">
         <Heading alignment="right">
                  <h2>
                    Projects
                  </h2>
                </Heading>
        <div className="grid grid-cols-4 mt-20 gap-5"> 
            <span className="w-50 h-50 bg-white"/>
            <span className="w-50 h-50 bg-white"/>
            <span className="w-50 h-50 bg-white"/>
            <span className="w-50 h-50 bg-white"/>
            <span className="w-50 h-50 bg-white"/>
            <span className="w-50 h-50 bg-white"/>
            <span className="w-50 h-50 bg-white"/>
            <span className="w-50 h-50 bg-white"/>
            
        </div>
      </section>
    </>
  );
}

//!TODO Fix position of projects header text