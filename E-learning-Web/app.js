let menueBtn = document.querySelector(".menue-btn");
let ul = document.querySelector (".ul");
let show = true;

menueBtn.addEventListener("click", () => {
    if (show) {
        ul.style.display = "block";
        show = false;
    } else {
        ul.style.display = "none";
        show = true;
    }
})