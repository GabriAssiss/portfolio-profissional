function SideText({ children }) {
  return (
    <div className="xl:w-3xl lg:w-xl md:w-[400px] w-[350px] h-96 bg-[rgb(63,38,104)] flex items-center rounded-r-4xl font-game text-white">
      <div className="px-10 xl:text-xl lg:text-[20px] text-[15px]  flex flex-wrap gap-4">
        {children}
      </div>
    </div>
  );
}

export default SideText;
