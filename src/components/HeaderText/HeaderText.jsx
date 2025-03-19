import { GridAnimate } from "../GridAnimate/GridAnimate";

export function HeaderText() {
  return (
    <>
      <section id="head" className="flex flex-col ml-60">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-baseline">
            <h2 className="text-white text-5xl font-semibold font-inter mb-[5px] line-clamp-1">
              Front end developer
            </h2>
            <span className="w-[10px] h-[10px] bg-[#63f1e5] rounded-full" />
          </div>
          <h3 className="text-white text-[20px] font-medium">
            Hi, i&#39;m <span className="text-[#63f1e5]">Torjus</span> I build
            intuitive and responsive websites
          </h3>
          <p
            className="text-[#aeaeae] text-[12px]"
            style={{
              width: "clamp(200px, 38%, 400px)",
              fontSize: "clamp(10px, 1vw, 14px)",
            }}
          >
            I&#39;m a front-end web developer with six months of experience,
            passionate about creating websites that are both visually appealing
            and intuitive for users. My workflow combines React for coding and
            Figma for designing. I enjoy experimenting with design and
            development to build engaging, user-friendly experiences.
          </p>
        </div>
        <div className="w-100 h-80 bg-[#18181b] mt-[45px] flex justify-center">
          <GridAnimate />
        </div>
      </section>
    </>
  );
}
