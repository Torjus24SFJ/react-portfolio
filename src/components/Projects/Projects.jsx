export function Projects() {
  return (
    <>
      <section id="projects" className="flex flex-col mr-30">
        <div className="flex items-baseline mt-30">
          <hr className="bg-[#3f3f46] w-[85%] h-[2px] opacity-55" />
          <span className="w-[10px] h-[10px] bg-[#63f1e5] rounded-full ml-1 mb-0.5"></span>
          <h2 className="text-white text-4xl font-semibold font-inter mb-[5px] line-clamp-1">
            Projects
          </h2>
        </div>
        {/* Fix this spacing */}
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