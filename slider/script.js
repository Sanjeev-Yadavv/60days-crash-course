const carousel = document.querySelector(".carousel")
firstImg = carousel.querySelectorAll("img")[0]
arrowIcons = document.querySelectorAll("button")
let isDragStart = false, prevPageX,prevScrollLeft
let firstImgWidth = firstImg.clientWidth +10
arrowIcons.forEach(icons => {
    icons.addEventListener("click", () => {
        carousel.scrollLeft += icons.class == "left" ? -firstImgWidth : firstImgWidth;
    })
    
});


const dragStart = (e) => {
    isDragStart = true
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff
}
const dragStop = () => {
    isDragStart = false
}

 carousel.addEventListener("mousemove" , dragging);
 carousel.addEventListener("mousedown" , dragStart)
 carousel.addEventListener("mouseup" , dragStop)