const boxes = document.getElementsByClassName("box");
const enter = document.getElementById("enter");
const container = document.getElementsByTagName("main")
const arrayOfColors = ["#EA0B0B", "#6540FC", "#63AECE", "#D16FDC", "#238100", "#FEFF00", "#FF7B00", "#0055FF", "#1C1C2E", "#FFA9A3", "#F88FFF"]

enter.addEventListener("click", () => {
    if(!boxes[10].classList.contains("hidden")){
        for(const box of boxes){
            box.classList.add("hidden")
        }
        return
    }
    for(const box of boxes) {
        if(box.classList.contains("hidden")){
            box.classList.remove("hidden")
            box.style.borderColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)]
            console.log(container)
            return
        }
    }
})