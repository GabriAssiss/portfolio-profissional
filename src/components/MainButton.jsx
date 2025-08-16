function MainButton ({textDirection, func}) {
    let direction = "";

    if(textDirection === "left") {
        direction = "text-left"
    }

    else {
        direction = "text-right"
    }
    return <div><button className={'text-white bg-gradient-to-r text-3xl from-[#4C008B] to-[#5055F9] w-full h-12 px-30 ' + direction}>{func}</button></div>
} 

export default MainButton