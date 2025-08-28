function SideButton({type}) {
    return(
        <div className="2xl:w-96 h-20 flex justify-center p-4x mb-10">
            <div className="bg-[#8400F1] w-20"></div>
            <button className="text-3xl w-full bg-[#4C008B] font-game text-white">{type}</button>
        </div>
    )
}

export default SideButton