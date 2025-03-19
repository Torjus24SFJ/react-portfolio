import { Heading } from "../Heading/Heading";

export function About() {

  const tools = [
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "React",
    "NextJS",
    "GitHub",
    "Photoshop",
    "Figma",
  ];
  
  const ToolGrid = () => {
    return (
      <div className="grid grid-cols-3 h-5 gap-1 ml-[25px]">
        {tools.map((tool) => (
          <div key={tool} className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
            <span className="text-[#f1f1f1] font-semibold">{tool}</span>
          </div>
        ))}
      </div>
    );
  };
   
  return (
    <>
      <section id="about" className="flex flex-col items-end">
        <Heading alignment="left">
          <h2>About</h2>
        </Heading>
        <div className="flex items-start gap-2 mt-[15px]">
          <div className="grid grid-cols-2">
            <article className="text-[#aeaeae] font-medium w-100">
              I&#39;m passionate about creating websites that not only look
              great but also feel great to use. I enjoy designing in Figma,
              planning out how everything should function, and then bringing it
              to life through code. I take inspiration from other developers but
              always aim to put my own spin on it, experimenting to find what
              works best. For me, a great website is more than just visuals—it
              should be smooth, intuitive, and satisfying to interact with. I
              focus on the details, from snappy animations to thoughtful UI
              elements, ensuring that every part of the experience feels
              intentional.
            </article>
            <ToolGrid />
            </div>
          </div>
      </section>
    </>
  );
}
