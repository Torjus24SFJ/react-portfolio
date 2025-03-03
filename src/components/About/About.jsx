export function About() {
    return (
        <>
        <section id="about" className="flex flex-col items-end">
        <div className="flex w-full items-baseline">
          <h2 className="text-white text-4xl font-semibold font-inter mb-[5px]">
            About
          </h2>
          <span className="w-[10px] h-[10px] bg-[#63f1e5] rounded-full ml-1 mb-0.5"/>
          <hr className="bg-[#3f3f46] w-[90%] h-[2px] opacity-55" />
        </div>
        <div className="flex items-start gap-2 mt-[15px]">
          <span className="w-10 h-10 p-5 bg-[#63f1e5] rounded-[5px] flex justify-center items-center">
            <p className="text-white text-[30px] font-bold font-inter leading-none">
              L
            </p>
          </span>
          <div className="grid grid-cols-2">
            <article className="text-[#f1f1f1] font-semibold w-100">
              orem ipsum dolor sit amet consectetur adipisicing elit. Magni
              optio, fuga officia quia cumque molestiae nostrum velit neque
              itaque dolorum sapiente eligendi unde adipisci sit, amet aliquam
              debitis porro accusantium? Porro facilis exercitationem ex nemo
              consequatur consequuntur voluptates laboriosam dolor quia? Quos
              temporibus eius atque possimus totam quasi, est animi, nesciunt
              repudiandae ut sint ex, repellendus enim reprehenderit. Non, amet.
            </article>
            <div className="grid grid-cols-3 h-5 gap-1 ml-[25px]">
              <div className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
                <span className="text-[#f1f1f1] font-semibold">CSS</span>
              </div>
              <div className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
                <span className="text-[#f1f1f1] font-semibold">Javascript</span>
              </div>
              <div className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
                <span className="text-[#f1f1f1] font-semibold">Typescript</span>
              </div>
              <div className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
                <span className="text-[#f1f1f1] font-semibold">Tailwindcss</span>
              </div>
              <div className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
                <span className="text-[#f1f1f1] font-semibold">React</span>
              </div>
              <div className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
                <span className="text-[#f1f1f1] font-semibold">NextJS</span>
              </div>
              <div className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
                <span className="text-[#f1f1f1] font-semibold">Github</span>
              </div>
              <div className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
                <span className="text-[#f1f1f1] font-semibold">Photoshop</span>
              </div>
              <div className="w-30 h-10 bg-[#3f3f46] flex justify-center items-center rounded-[5px]">
                <span className="text-[#f1f1f1] font-semibold">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}