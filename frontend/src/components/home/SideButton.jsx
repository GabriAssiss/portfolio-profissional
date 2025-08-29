function SideButton({type}) {
    return(
        <div className="2xl:w-96 w-50 h-20  flex justify-center p-4x mb-10">
            <div className="bg-[#8400F1] 2xl:w-20 xl:w-10"></div>
            <button className="2xl:text-3xl text-xl w-full bg-[#4C008B] font-game text-white">{type}</button>
        </div>
    )
}

export default SideButton