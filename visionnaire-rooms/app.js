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
        img: "./images/region/Visionnaire-NJB22--735_0.jpg",
        title: "Deimos",
        category: "Livingroom",
        subtitle: "Nature's Jewel Box 2022"
    },

    {
        img: "./images/region/Visionnaire-NJB22--853.jpg",
        title: "Deimos",
        category: "Livingroom",
        subtitle: "Nature's Jewel Box 2022"
    },

    {
        img: "./images/region/Visionnaire-NJB22--1122_m2B.jpg",
        title: "Freyr",
        category: "Livingroom",
        subtitle: "Nature's Jewel Box 2022"
    },

    {
        img: "./images/region/Visionnaire-NJB22--956_M.jpg",
        title: "Rohan",
        category: "Dining room",
        subtitle: "Nature's Jewel Box 2022"
    },

    {
        img: "./images/region/Visionnaire-NJB22--1033_m.jpg",
        title: "Thule",
        category: "Livingroom",
        subtitle: "Nature's Jewel Box 2022"
    },

    {
        img: "./images/region/Visionnaire-NJB22--1191_m.jpg",
        title: "Beloved Art",
        category: "Bedroom",
        subtitle: "Mythica"
    },

    {
        img: "./images/region/Visionnaire-NJB22--1332_m2b.jpg",
        title: "Leonardo",
        category: "Bedroom",
        subtitle: "Mythica"
    },

    {
        img: "./images/region/Visionnaire-NJB22--1529_m.jpg",
        title: "Morgan",
        category: "Dining room",
        subtitle: "Mythica"
    },

    {
        img: "./images/region/VISIONNAIRE%20SALONE%202022_0316_1_0.jpg",
        title: "Orlando",
        category: "Livingroom",
        subtitle: "Mythica"
    },

    {
        img: "./images/region/Visionnaire-NJB22--1607_m2B_MOD.jpg",
        title: "Stone",
        category: "Dining room",
        subtitle: "Mythica"
    },

    {
        img: "./images/region/VISIONNAIRE%20SALONE%202022_0271_1.jpg",
        title: "Amos",
        category: "Dining room",
        subtitle: "Mythica"
    },

    {
        img: "./images/region/850_2159_0.jpg",
        title: "Aubade",
        category: "Bedroom",
        subtitle: "Mythica"
    },

    {
        img: "./images/region/VISIONNAIRE%20SALONE%202022_0411_0.jpg",
        title: "Babylon Rack",
        category: "Livingroom",
        subtitle: "Babylon Rack"
    },

    {
        img: "./images/region/INSULAE_2.jpg",
        title: "Capri",
        category: "Dehors",
        subtitle: "Caprice"
    },

    {
        img: "./images/region/INSULAE_5.jpg",
        title: "Elba ",
        category: "Dehors",
        subtitle: "Caprice"
    },

    {
        img: "./images/region/INSULAE_9.jpg",
        title: "Ponza ",
        category: "Dehors",
        subtitle: "Caprice"
    },

    {
        img: "./images/region/Memphis%20Living%20Room_01.png",
        title: "Memphis",
        category: "Livingroom",
        subtitle: "Starlight"
    },

    {
        img: "./images/region/Morgan%20Dining%20Room_01.png",
        title: "Morgan",
        category: "Dining room",
        subtitle: "Starlight"
    },

    {
        img: "./images/region/Palace_diningroom_01.png",
        title: "Palace",
        category: "Dining room",
        subtitle: "Starlight"
    },

    {
        img: "./images/region/Rhapsody_livingroom_00.png",
        title: "Rhapsody",
        category: "Livingroom",
        subtitle: "Starlight"
    },
]
const region = document.querySelector(".region")
const card = document.querySelector(".cardWrapper")
let counter = 1

window.addEventListener("DOMContentLoaded", () => {
    items.forEach((e) => {
        region.innerHTML += `
        <div class="cardWrapper col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="cardWrapper__image">
                    <img src="${e.img}" class="img-fluid" alt="">
                </div>
                <div class="cardWrapper__title">${e.title}</div>
                <div class="cardWrapper__category">${e.category}</div>
                <div class="cardWrapper__subtitle">${e.subtitle}</div>
            </div>
        `
        counter++
    })
})

//? CARD LOOP END