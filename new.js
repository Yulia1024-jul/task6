let slides = [
    {image: "gall/bret1.jpg", text: "Бретшнейдера"},
    {image: "gall/cheresh.jpg", text: "Черешковая"},
    {image: "gall/drev.jpg", text: "Древовидная"},
    {image: "gall/krupnolist1.jpg", text: "Крупнолистная"},
    {image: "gall/metel.jpg", text: "Метельчатая"}
];

let images = ["gall/bret1.jpg", "gall/cheresh.jpg", "gall/drev.jpg", "gall/krupnolist1.jpg", "gall/metel.jpg"];

let index = 1;
let btn = document.querySelector("#nextBtn");
let slide = document.getElementById("card");
let caption = document.getElementById("caption");

btn.addEventListener("click", function(event){
    event.preventDefault();
    index++;
    if (index >= images.length){
        index = 0
    }
    slide.src = images[index];
    caption.textContent = slides[index].text;
});


