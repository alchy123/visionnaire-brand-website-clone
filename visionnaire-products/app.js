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
        img: "./images/region/Pavone_armchair_scontorno_1.jpg",
        title: "Pavone",
        category: "Armchair"
    },

    {
        img: "./images/region/Tavoli_AMOS.jpg",
        title: "Amos",
        category: "Dining table"
    },

    {
        img: "./images/region/Piantane_ARACEA.jpg",
        title: "Aracea",
        category: "Floor lamp"
    },

    {
        img: "./images/region/Consolle_LEGO.jpg",
        title: "Lego",
        category: "Console"
    },

    {
        img: "./images/region/Poltrone_IMAGINE.jpg",
        title: "Imagine",
        category: "Bergere"
    },

    {
        img: "./images/region/Librerie_OSBORNE.jpg",
        title: "Osborne",
        category: "Boiserie"
    },
    
    {
        img: "./images/region/poltrone_0020_camden.jpg",
        title: "Camden",
        category: "Armchair"
    },

    {
        img: "./images/region/donegal_cabinet_cover.jpg",
        title: "Donegal",
        category: "High unit"
    },

    {
        img: "./images/region/Tavoli_KERWAN.jpg",
        title: "Kerwan",
        category: "Dining Table"
    },

    {
        img: "./images/region/Tavoli_Bassi_ADMETO.jpg",
        title: "Admeto",
        category: "Low table"
    },

    {
        img: "./images/region/Sedie_CLOUD.jpg",
        title: "Cloud",
        category: "Chair"
    },

    {
        img: "./images/region/Tavoli_Bassi_EGMONT.jpg",
        title: "Egmont",
        category: "Low table"
    },

    {
        img: "./images/region/Lampadari_ROCK.jpg",
        title: "Rock",
        category: "Chandelier"
    },

    {
        img: "./images/region/Lampadari_SPUTNIK.jpg",
        title: "Sputnik",
        category: "Chandelier"
    },

    {
        img: "./images/region/ultrasound-regular_bed_cover.jpg",
        title: "Ultrasound",
        category: "Bed"
    },

    {
        img: "./images/region/Divani_MONTPARNASSE.jpg",
        title: "Montparnasse",
        category: "Sofa, Modular elements, Chaise-longue, Armchair, Pouffe"
    },
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
                <div class="cardWrapper__category">${e.category}</div>
            </div>
        `
    })
})

//? CARD LOOP END