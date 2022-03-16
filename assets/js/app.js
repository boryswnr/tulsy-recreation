let navigation = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
    let scrollYPosition = window.pageYOffset;
    if (scrollYPosition > 50) {
        navigation.classList.add("scroll")
    } else {
        navigation.classList.remove("scroll")
    }
})

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navigation.classList.toggle("open")
    document.body.classList.toggle("stopScroll")
})

let project = document.querySelector(".listItem");
let projectList = document.querySelector(".projectsList");


//TO BE FINSISHED when I actually learn some JS
// project.addEventListener("click", (e) => {
//     if (e.target.nodeName === "listItem") {
//         Array.forEach(element => {
//             element.classList.remove("active")
//         });
//         e.target.classList.add("active")
//     }
// }
// )