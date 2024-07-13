// menu open and close
let openNavbarBtn = document.querySelector("#open-menu-btn")
let closeNavbarBtn = document.querySelector("#close-menu-btn")
let menu = document.querySelector("#up-side>nav")

openNavbarBtn.addEventListener("click", () => {
    menu.style.display = "flex";
})

closeNavbarBtn.addEventListener("click", () => {
    menu.style.display = "";
})

// only for desktop or large screens
let screenWidth = window.innerWidth;
if (screenWidth > 1024) {
    let scrollBarActiveOnHover = document.querySelectorAll(".scroll-active-on-hover");
    scrollBarActiveOnHover.forEach(element => {
        element.style.overflow = "hidden";
        element.addEventListener("mouseenter", () => {
            element.style.overflow = "auto";
        })

        element.addEventListener("mouseleave", () => {
            setTimeout(() => {
                element.style.overflow = "hidden";
            }, 1500);
        })
    })
}

