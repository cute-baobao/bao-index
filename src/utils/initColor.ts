const initColor = () => {
    let temp = localStorage.getItem("color");
    if(temp) {
        let colors = "";
        let split = temp?.split("-");
        let bg = temp;
        let border = `border-${split[1]}-${split[2]}`;
        let hover = ""
        if(split[2] !== "900") {
            hover = `hover:bg-${split![1]}-${Number(split[2])+200}/80`;
        }else {
            hover = `hover:bg-${split[1]}-${Number(split[2])-100}/80`;
        }
        colors = bg+" "+border+" "+hover;
        return colors;
    } else {
        return "bg-[#FFA500]  border-amber-500 hover:bg-amber-600/80";
    }
};

export default initColor;