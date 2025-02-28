import { GridAnimate } from "../GridAnimate/GridAnimate";

export function HeaderText() {
  return (
    <>
      <section id="head" className="flex flex-col ml-60">
        <div className="flex flex-row items-baseline">
          <h2 className="text-white text-5xl font-semibold font-inter mb-[5px] line-clamp-1">
            Front end developer
          </h2>
          <span className="w-[10px] h-[10px] bg-[#63f1e5] rounded-full" />
        </div>
        <h3 className="text-white text-[20px] font-medium">
          Im a <span className="text-[#63f1e5]">front end</span> developer
        </h3>
        <p
          className="text-[#aeaeae] opacity-75 text-[12px]"
          style={{
            width: "clamp(200px, 38%, 400px)",
            fontSize: "clamp(10px, 1vw, 14px)",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          provident distinctio minima assumenda eligendi dolorem eum ab, eaque
          delectus. Laborum dolorem sapiente quibusdam. Eaque laborum minima
          maiores voluptatem, quibusdam aut.
        </p>
        <div className="w-100 h-80 bg-[#18181b] mt-[45px] flex justify-center">
          <GridAnimate />
        </div>
      </section>
    </>
  );
}
