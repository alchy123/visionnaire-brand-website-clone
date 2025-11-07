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

//! MENU OPEN SECTION IN DESKTOP --END

//* CARD LOOP SECTİON START

const items = [{
        image: "./images/region/Anthem_livingroom_01.jpg",
        title: "Anthem",
        paragraph: "The Anthem system is a seating program with flexible modular design and versatile, contemporary appeal.&nbsp;"
    },

    {
        image: "./images/region/Adele_livingroom_01_0.jpg",
        title: "Adele",
        paragraph: "Born from an enveloping and elegant design."
    },

    {
        image: "./images/region/CaFoscari_livingroom_01.jpg",
        title: "Ca' Foscari",
        paragraph: "The Ca’ Foscari sofa has a soft shape distinguished by concave and convex perimeter marks that make it a modern and welcoming sofa."
    },

    {
        image: "./images/region/Douglas_livingroom_01_1.jpg",
        title: "Douglas",
        paragraph: "A sofa with a commanding structure, composed of pure shapes and profiles marked by exclusive seams.&nbsp;"
    },

    {
        image: "./images/region/DonovanSquare_livingroom_01.jpg",
        title: "Donovan Square",
        paragraph: "The Donovan sofa is a modular seating program with a contemporary design."
    },

    {
        image: "./images/region/Douglas_livingroom_01_1.jpg",
        title: "Donovan Roll",
        paragraph: "The Donovan sofa is a modular seating program with a contemporary design. "
    },

    {
        image: "./images/region/Miller_livingroom_01.jpg",
        title: "Miller",
        paragraph: "The new proposal by Fabio Bonfà is the Miller sofa available in a linear and modular version."
    },

    {
        image: "./images/region/Osborne_office-room_01.jpg",
        title: "Osborne",
        paragraph: "The Osborne boiserie is a sartorial interpretation of the wall that can be equipped and compatible with the various functions of the habitat."
    },

    {
        image: "./images/region/Montparnasse_livingroom_01_0.jpg",
        title: "Montparnasse",
        paragraph: "Technological evolution and aesthetic innovation through the new products designed by Mauro Lipparini."
    },

    {
        image: "./images/region/Mercury_livingroom_01.jpg",
        title: "Mercury",
        paragraph: "In 1993 IPE took part in the first edition of the Salone Internazionale del Mobile in Milan with the Mercury armchair, designed by the sculptor Rito Valla:art and design find a new, completely original formula of interaction in this unique proposal."
    },

    {
        image: "./images/region/Petra_office-room_01.jpg",
        title: "Petra",
        paragraph: "The armchair presents a semi-circular padded shell, upholstered in Bansky velvet with the new “plush” effect, in verde ramareggiato color. "
    },
]

const regionDiv = document.querySelector(".region")
let index = 1

window.addEventListener("DOMContentLoaded", () => {
    items.forEach((item) => {

        //odd and left 
        if (index % 2 == 1) {
            regionDiv.innerHTML += `
            <div class="cardStructure-container cardStructure-container-odd">
            <a class="cardStructure">


                <div class="cardStructure__image-container">
                    <img src="${item.image}" alt="">
                </div>

                <div class="cardStructure__title-container">
                    <h2>${item.title}</h2>
                </div>

                <div class="cardStructure__paragraph-container">
                    <p>${item.paragraph}</p>
                </div>

                
            </a>
        </div>
            `
        }


        //even and right
        else if (index % 2 == 0) {
            regionDiv.innerHTML += `
            <div class="cardStructure-container">
            <a class="cardStructure">


                <div class="cardStructure__image-container">
                    <img src="${item.image}" alt="">
                </div>

                <div class="cardStructure__title-container">
                    <h2>${item.title}</h2>
                </div>

                <div class="cardStructure__paragraph-container">
                    <p>${item.paragraph}</p>
                </div>

                
            </a>
        </div>
            `
        }


        index++
    })
})
//* CARD LOOP SECTİON END