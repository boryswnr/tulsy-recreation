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

const project = document.querySelector(".listItem");
const projectList = document.querySelectorAll(".listItem");
let classToDisplay = "all";
const projectTiles = document.querySelectorAll(".projectPhoto");
const listItems = document.querySelectorAll(".listItem");

function sortItems(item) {
    if (!(item.classList.contains(classToDisplay.toLowerCase()))) {
        console.log("sortItem items classlist:", item.classList);
        item.classList.add("hide");
    }
}

listItems.forEach(element => {
    element.addEventListener("click", e => {
        projectList.forEach(item => item.classList.remove("activeItem"));
        e.path[0].classList.add("activeItem");
        classToDisplay = e.path[0].innerText;
        console.log("classToDisplay:", classToDisplay);
        if (classToDisplay === "ALL") {
            projectTiles.forEach(item => {
                console.log("item", item)
                item.classList.remove("hide")
            });
        } else {
            projectTiles.forEach(tile => tile.classList.remove("hide"));
            projectTiles.forEach(element => sortItems(element));
        }        
    })
})
