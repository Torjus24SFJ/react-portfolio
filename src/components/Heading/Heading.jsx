export function Heading({ children, alignment = "right" }) {
  return (
      <div
        className={`flex w-full items-baseline ${
          alignment === "left" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="text-white text-4xl font-semibold font-inter mb-[5px]">
          {children}
        </div>
        <span className="w-[10px] h-[10px] bg-[#63f1e5] rounded-full ml-1 mb-0.5" />
        <hr className="bg-[#3f3f46] w-[90%] h-[2px] opacity-55" />
      </div>
  );
}
