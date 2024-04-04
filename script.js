const enter = document.getElementById("enter");
const container = document.querySelector("main");
const arrayOfColors = ["#EA0B0B", "#6540FC", "#63AECE", "#D16FDC", "#238100", "#FEFF00", "#FF7B00", "#0055FF", "#1C1C2E", "#FFA9A3", "#F88FFF", "#624B57", "#A8D3AD", "#710071", "#F0C513"];
const boxes = document.getElementsByTagName("div");



enter.addEventListener("click", () => {
    if(boxes.length === 0) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.borderColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
        container.append(box);
    }else {
        if(boxes.length === 11) {
            container.removeChild(boxes[0])  
            return
        }
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.borderColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
        boxes[boxes.length-1].append(box);
    }
});