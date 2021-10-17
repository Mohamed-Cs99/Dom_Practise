
let imgs = Array.from(document.querySelectorAll(".item img"));// return "nodeList" can't add event listner to to more than  one element so i will loop ;
let lightBox = document.getElementById("Box");
let lightBoxItem = document.getElementById("lightBoxItem");
let currentIndex = 0;
let nextBtn = document.getElementById("nextBtn");
let prev = document.getElementById("prevBtn");
let cls = document.getElementById("closeBtn");
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {
        currentIndex = imgs.indexOf(e.target);
        //console.log(currentIndex);
        let imgSrc = e.target.getAttribute("src");
        //console.log(imgSrc);
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
        lightBox.style.display = "flex";
    })
}

function nextSlide() {

    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    let imgSrc = imgs[currentIndex].getAttribute("src")
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";

}

function previous() {

    currentIndex--;
    if (currentIndex == -1) {
        currentIndex = imgs.length - 1;
    }
    let imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
}

function close() {
    lightBox.style.display = "none";
}

prev.addEventListener("click", previous);
nextBtn.addEventListener("click", nextSlide);
cls.addEventListener("click", close);


document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        nextSlide();
    }
    else if (e.key == "ArrowLeft") {
        previous();
    }
    else if (e.key == "Escape") {
        close();
    }


});








// ArrayFrom bt7ol elly rag4 mn el nodeList L array ;