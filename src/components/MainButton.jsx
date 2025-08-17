function changePage(func) {
    
}

function MainButton ({textDirection, func}) {
    let direction = "";

    if(textDirection === "left") {
        direction = "text-left"
    }

    else {
        direction = "text-right"
    }
    return <div><button onClick={changePage(func)} className={'text-white text-3xl bg-linear-to-r from-[#4C008B] to-[#5055F9] w-full h-12 px-30 ' + direction}>{func}</button></div>
}

export default MainButton