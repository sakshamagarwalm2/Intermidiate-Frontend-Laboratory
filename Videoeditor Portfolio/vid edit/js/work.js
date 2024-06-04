const wrapperW = document.querySelector(".wrapper-w");
const carouselW = document.querySelector(".carousel-w");
const firstCardWidthW = carouselW.querySelector(".card-w").offsetWidth;
const arrowBtnsW = document.querySelectorAll(".wrapper-w i");
const carouselChildrensW = [...carouselW.children];

let isDraggingW = false, isAutoPlayW = true, startXW, startScrollLeftW, timeoutIdW;

// Get the number of cards that can fit in the carousel at once
let cardPerViewW = Math.round(carouselW.offsetWidth / firstCardWidthW);

// Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
carouselChildrensW.slice(-cardPerViewW).reverse().forEach(card => {
    carouselW.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to the end of the carousel for infinite scrolling
carouselChildrensW.slice(0, cardPerViewW).forEach(card => {
    carouselW.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at the appropriate position to hide the first few duplicate cards on Firefox
carouselW.classList.add("no-transition");
carouselW.scrollLeft = carouselW.offsetWidth;
carouselW.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtnsW.forEach(btn => {
    btn.addEventListener("click", () => {
        carouselW.scrollLeft += btn.id == "left-w" ? -firstCardWidthW : firstCardWidthW;
    });
});

const dragStartW = (e) => {
    isDraggingW = true;
    carouselW.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startXW = e.pageX;
    startScrollLeftW = carouselW.scrollLeft;
}

const draggingW = (e) => {
    if(!isDraggingW) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carouselW.scrollLeft = startScrollLeftW - (e.pageX - startXW);
}

const dragStopW = () => {
    isDraggingW = false;
    carouselW.classList.remove("dragging");
}


carouselW.addEventListener("mousedown", dragStartW);
carouselW.addEventListener("mousemove", draggingW);
document.addEventListener("mouseup", dragStopW);