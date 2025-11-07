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

//* CARD LOOP SECTİON START

const items = [
    
    {
    image_big: "./images/region/cardbig/DarsenaDelSale22-cover.jpg",
    image_award: "./images/region/cardaward/Darsena_Cover.png",
    title: "Darsena Del Sale",
    paragraph: "Visionnaire's project Darsena del Sale has been selected as the 2022 Architizer A+Awards Popular Choice Winner in the Architecture +Water category."
},

{
    image_big: "./images/region/cardbig/App2 copy.jpg",
    image_award: "./images/region/cardaward/Winners_badge_2022_black.png",
    title: "Apple",
    paragraph: "Apple floor lamp designed by m2atelier winner of 2022 Wallpaper* Design Awards, 'Best Rock Stars' category."
},

{
    image_big: "./images/region/cardbig/Basket Awards1.jpg",
    image_award: "./images/region/cardaward/archiproducts19.jpg",
    title: "Basket",
    paragraph: "Basket Armchair designed by m2atelier winner of 2021 Archiproducts Design Awards, Outdoor category."
},

{
    image_big: "./images/region/cardbig/DarsenaDelSale22-cover.jpg",
    image_award: "./images/region/cardaward/archiproducts19.jpg",
    title: "Basket",
    paragraph: "Basket Armchair designed by m2atelier winner of 2021 Archiproducts Design Awards, Outdoor category."
},

{
    image_big: "./images/region/cardbig/Lego_1.jpg",
    image_award: "./images/region/cardaward/AdidicolSITO.png",
    title: "Lego",
    paragraph: "Lego low table and console designed by Draga&Aurel for Visionnaire have been selected for the ADI Design Index 2021"
},

{
    image_big: "./images/region/cardbig/imgpsh_fullsize_anim.jpg",
    image_award: "./images/region/cardaward/Imagine chair.png",
    title: "Imagine",
    paragraph: "Imagine armchair designed by Mauro Lipparini results winner of the International Design & Architecture Awards Design Et Al, seating category. "
},

{
    image_big: "./images/region/cardbig/admetof.jpg",
    image_award: "./images/region/cardaward/Wallpaper Awards 2021_logo.png",
    title: "Admeto",
    paragraph: "Admeto low table designed by Marco Piva winner of 2021 Wallpaper* Design Awards, Best Curves category "
},

{
    image_big: "./images/region/cardbig/p.jpg",
    image_award: "./images/region/cardaward/log.jpg",
    title: "il Pavone",
    paragraph: "Il Pavone designed by Marc Ange for Visionnaire has conquered the jury for its concept and design and results Winner of the 2020 Archiproducts Design Awards! "
},

{
    image_big: "./images/region/cardbig/Poltrone_0020_CAMDEN.jpg",
    image_award: "./images/region/cardaward/477572c6-7cec-4598-840b-2b9814933c36.png",
    title: "Camden",
    paragraph: "Camden Armchair, designed by Mauro Lipparini, Jury Winner in the 8th annual Architizer A+Awards 'residential seating' category. "
},

{
    image_big: "./images/region/cardbig/Visionnaire_Catalogo_01_2.jpg",
    image_award: "./images/region/cardaward/IDA-19-Silver.jpg",
    title: "Accessories Capsule Collection",
    paragraph: "The Anniversary catalog dedicated to the Capsule Collection of accessories presented to celebrate Visionnaire's 15 years receives the Silver Award in the 'Print/Catalogs' category from the Internationl Design Awards (IDA) 2019 in Los Angeles."
}

]


const regionDiv = document.querySelector(".region")
let index = 1


window.addEventListener("DOMContentLoaded", () => {
    items.forEach((item) => {

        //odd and left 
        if (index % 2 == 1) {
            regionDiv.innerHTML += `
            <div class="cardWrapper">
            <div class="cardWrapper__left">
                <img src="${item.image_big}" alt="">
            </div>
            <div class="cardWrapper__right">
                <img src="${item.image_award}" alt="">
                <div class="cardWrapper__textTitle">${item.title}</div>
                <div class="cardWrapper__textParagraph">${item.paragraph}</div>
            </div>
        </div>
            `
        }


        //even and right
        else if (index % 2 == 0) {
            regionDiv.innerHTML += `
            <div class="cardWrapper flex-row-reverse">
            <div class="cardWrapper__left">
                <img src="${item.image_big}" alt="">
            </div>
            <div class="cardWrapper__right align-items-end">
                <img src="${item.image_award}" alt="">
                <div class="cardWrapper__textTitle">${item.title}</div>
                <div class="cardWrapper__textParagraph text-right">${item.paragraph}</div>
            </div>
        </div>
            `
        }


        index++
    })
})
//* CARD LOOP SECTİON END