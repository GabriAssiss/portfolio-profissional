function SideText({ children }) {
  return (
    <div className="w-3xl h-96 bg-[rgb(63,38,104)] flex items-center rounded-r-4xl font-game text-white">
      <div className="px-10 text-xl flex flex-wrap gap-4">
        {children}
      </div>
    </div>
  );
}

export default SideText;
