//! MENU OPEN SECTION IN DESKTOP --START
const headerButton = document.querySelector(".header__block-menu") // Basılan buton kısmı.
const hamburgerBox = document.querySelector(".header__hamburger-box")
const menusContainer = document.querySelector(".header__menus-container")
const menuSpanOpen = document.querySelector(".header__button-label-open")
const menuSpanClose = document.querySelector(".header__button-label-close")

console.log(menusContainer)
headerButton.addEventListener("click", (e) => {
    menusContainer.classList.toggle("header__menu-open")
    if(menusContainer.classList.contains("header__menu-open")){
        document.body.style.overflow = "hidden"
        headerButton.style.transition = "1.5s"
        headerButton.style.backgroundColor = "#f7f2f2"


        menuSpanOpen.style.transition = "0.4s"

        menuSpanOpen.style.opacity = "0"
        menuSpanOpen.style.display = "none"
        

        menuSpanClose.style.transition = "0.4s"

        menuSpanClose.style.opacity = "1"
        menuSpanClose.style.display = "block"
    }
    else{
        document.body.style.overflow = "scroll"
        headerButton.style.transition = "1.5s"
        headerButton.style.backgroundColor = "#fff"


        menuSpanClose.style.transition = "0.4s"

        menuSpanClose.style.opacity = "0"
        menuSpanClose.style.display = "none"
        

        menuSpanOpen.style.transition = "0.4s"

        menuSpanOpen.style.opacity = "1"
        menuSpanOpen.style.display = "block"
    }

})
//! MENU OPEN SECTION IN DESKTOP --END

//! MENU OPEN SECTION IN MOBILE --START
const menuButton = document.querySelector(".header__hamburger-box-mobile")
const menuContainer = document.querySelector(".header__menus-container-mobile")


menuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("header__menu-open")
    if (menuContainer.classList.contains("header__menu-open")) {
        menuButton.style.transition = "2.5s"
        menuButton.style.setProperty('background-color', 'transparent', 'important');
        // menuButton.style.setProperty('position', 'fixed', 'important');
        document.body.style.overflow = "hidden"
        console.log("açılıyor")
    } else {
        menuButton.style.transition = "2.5s"
        menuButton.style.setProperty('background-color', '#fff', 'important');
        document.body.style.overflow = "scroll"
        console.log("kapanıytor")
    }
})
//! MENU OPEN SECTION IN MOBILE --END

//? CARD LOOP START

const items = [{
        img: "./images/region/Cover3_0.jpg",
        title: "Timeless (2022)"
    },

    {
        img: "./images/region/MYTHICA_CS.png",
        title: "Mythica (2022)"
    },

    {
        img: "./images/region/DREAMS_COVER.png",
        title: "Dreams (2022)"
    },

    {
        img: "./images/region/Cover3.jpg",
        title: "Radica (2022)"
    },

    {
        img: "./images/region/Cover..jpg",
        title: "Starlight (2022)"
    },

    {
        img: "./images/region/DEHOR_0.jpg",
        title: "Dehors (2022)"
    },
    
    {
        img: "./images/region/Cover-Magazine.jpg",
        title: "Visionnaire Around - Issue 1"
    },

    {
        img: "./images/region/cover.jpg",
        title: "Dehors Chairs and Stool (2021)"
    }
]
const region = document.querySelector(".region")
const card = document.querySelector(".cardWrapper")

window.addEventListener("DOMContentLoaded", () => {
    items.forEach((e) => {
        region.innerHTML += `
        <div class="cardWrapper col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="cardWrapper__image">
                    <img src="${e.img}" class="img-fluid" alt="">
                </div>
                <div class="cardWrapper__title">${e.title}</div>
                <div class="cardWrapper__first"><a class="orangetext" href='' target="_blank" rel="noopener noreferrer">Browse online</a></div>
                <div class="cardWrapper__second orangetext">Download PDF</div>

            </div>
        `
    })
})

//? CARD LOOP END