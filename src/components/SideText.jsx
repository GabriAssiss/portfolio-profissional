function SideText({title, text}) {
  return (
    <div className="w-2xl h-96 bg-[rgb(63,38,104)] flex  items-start rounded-r-4xl flex-col">
      <h1 className="p-5 text-2xl">{title}</h1>
      <p className="px-10 ">
        {text}
      </p>
    </div>
  );
}

export default SideText;
