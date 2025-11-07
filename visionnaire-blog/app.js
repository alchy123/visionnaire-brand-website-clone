
//! MENU OPEN SECTION IN DESKTOP --START
const headerButton = document.querySelector(".header__block-menu") // Basılan buton kısmı.
const hamburgerBox = document.querySelector(".header__hamburger-box")
const menusContainer = document.querySelector(".header__menus-container")
const menuSpanOpen = document.querySelector(".header__button-label-open")
const menuSpanClose = document.querySelector(".header__button-label-close")

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


//* MENU OPEN SECTION IN MOBILE --START

const menuButton = document.querySelector(".header__hamburger-box-mobile")
const menuContainer = document.querySelector(".header__menus-container-mobile")


menuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("header__menu-open")
    if(menuContainer.classList.contains("header__menu-open")){
        menuButton.style.transition = "2.5s"
        menuButton.style.setProperty('background-color', 'transparent', 'important');
        // menuButton.style.setProperty('position', 'fixed', 'important');
        document.body.style.overflow = "hidden"
        console.log("açılıyor")
    }
    else{
        menuButton.style.transition = "2.5s"
        menuButton.style.setProperty('background-color', '#fff', 'important');
        document.body.style.overflow = "scroll"
        console.log("kapanıyor")
    }
})

//!* MENU OPEN SECTION IN DESKTOP --END

//! CARD SYSTEM LOOP START

//! ARRAY ÖRNEK OLARAK OLUŞTURULDU. LÜTFEN YANLIŞ ANLAMAYINIZ.

const items = [
    {
        image: "./images/region/items-image/Feature--image.png",
        category: "News",
        title: "A New Chapter Of Wonder",
        description: "The new season of Visionnaire collectible books has finally arrived.&nbsp;<strong>Mythica</strong>&nbsp;and&nbsp;<strong>Dreams</strong>&nbsp;are the new volumes"
    },

        
    {
        image: "./images/region/items-image/Feature image_the Arts Club Dubai.jpg",
        category: "Events",
        title: "Visionnaire at The Arts Club Dubai ",
        description: "On March 8, 2022, <strong>the </strong><strong>Arts Club Dubai</strong> hosted a private event called Art & Design Told by Women. "
    },
    
    {
        image: "./images/region/items-image/Feature-image_Wuhan.jpg",
        category: "News",
        title: "New Opening: Visionnaire Wuhan",
        description: "Visionnaire expands its horizons with the new showroom opening in Wuhan, the birthplace of the Chu culture and one of the oldest cities in China."
    },

    {
        image: "./images/region/items-image/Feature image_Timeless-1.jpg",
        category: "News",
        title: "Timeless 2022",
        description: "The&nbsp;<strong>Timeless</strong>&nbsp;is one of the most appreciated&nbsp;catalogues by the lovers of Visionnaire collections and by professionals who want to immerse themselves in the wide production of the maison and have an in-depth overview of the&nbsp;<strong>brand's home philosophy</strong>."
    },
    
    {
        image: "./images/region/Boat_Home Page.jpg",
        category: "Events",
        title: "VISIONNAIRE MAIN PARTNER OF BOAT SUPERYACHT DESIGN FESTIVAL",
        description: "As event partner of BOAT International at the <strong>Superyacht Design Festival 2022</strong>, Visionnaire featured a special exhibition layout at The Mall in Milan&nbsp;to show its&nbsp;<strong>one-of-a-kind</strong>&nbsp;design approach."
    },

    {
        image: "./images/region/items-image/feature Becorp.jpg",
        category: "News",
        title: "IPE-VISIONNAIRE BECOMES A BENEFIT COMPANY",
        description: "As of<span>&nbsp;</span>December&nbsp;2021&nbsp;Visionnaire, founded by the parent company IPE,&nbsp;has become<span>&nbsp;</span>a&nbsp;Benefit Company<span>&nbsp;</span>,<span>&nbsp;</span>defining its business approach by promoting positive and essential values within the community.<span>&nbsp;</span>"
    },
    {
        image: "./images/region/items-image/Feature--image.png",
        category: "News",
        title: "A New Chapter Of Wonder",
        description: "The new season of Visionnaire collectible books has finally arrived.&nbsp;<strong>Mythica</strong>&nbsp;and&nbsp;<strong>Dreams</strong>&nbsp;are the new volumes"
    },

        
    {
        image: "./images/region/items-image/Feature image_the Arts Club Dubai.jpg",
        category: "Events",
        title: "Visionnaire at The Arts Club Dubai ",
        description: "On March 8, 2022, <strong>the </strong><strong>Arts Club Dubai</strong> hosted a private event called Art & Design Told by Women. "
    },
    
    {
        image: "./images/region/items-image/Feature-image_Wuhan.jpg",
        category: "News",
        title: "New Opening: Visionnaire Wuhan",
        description: "Visionnaire expands its horizons with the new showroom opening in Wuhan, the birthplace of the Chu culture and one of the oldest cities in China."
    },

    {
        image: "./images/region/items-image/Feature image_Timeless-1.jpg",
        category: "News",
        title: "Timeless 2022",
        description: "The&nbsp;<strong>Timeless</strong>&nbsp;is one of the most appreciated&nbsp;catalogues by the lovers of Visionnaire collections and by professionals who want to immerse themselves in the wide production of the maison and have an in-depth overview of the&nbsp;<strong>brand's home philosophy</strong>."
    },
    
    {
        image: "./images/region/Boat_Home Page.jpg",
        category: "Events",
        title: "VISIONNAIRE MAIN PARTNER OF BOAT SUPERYACHT DESIGN FESTIVAL",
        description: "As event partner of BOAT International at the <strong>Superyacht Design Festival 2022</strong>, Visionnaire featured a special exhibition layout at The Mall in Milan&nbsp;to show its&nbsp;<strong>one-of-a-kind</strong>&nbsp;design approach."
    },

    {
        image: "./images/region/items-image/feature Becorp.jpg",
        category: "News",
        title: "IPE-VISIONNAIRE BECOMES A BENEFIT COMPANY",
        description: "As of<span>&nbsp;</span>December&nbsp;2021&nbsp;Visionnaire, founded by the parent company IPE,&nbsp;has become<span>&nbsp;</span>a&nbsp;Benefit Company<span>&nbsp;</span>,<span>&nbsp;</span>defining its business approach by promoting positive and essential values within the community.<span>&nbsp;</span>"
    },
    {
        image: "./images/region/items-image/Feature--image.png",
        category: "News",
        title: "A New Chapter Of Wonder",
        description: "The new season of Visionnaire collectible books has finally arrived.&nbsp;<strong>Mythica</strong>&nbsp;and&nbsp;<strong>Dreams</strong>&nbsp;are the new volumes"
    },

        
    {
        image: "./images/region/items-image/Feature image_the Arts Club Dubai.jpg",
        category: "Events",
        title: "Visionnaire at The Arts Club Dubai ",
        description: "On March 8, 2022, <strong>the </strong><strong>Arts Club Dubai</strong> hosted a private event called Art & Design Told by Women. "
    },
    
    {
        image: "./images/region/items-image/Feature-image_Wuhan.jpg",
        category: "News",
        title: "New Opening: Visionnaire Wuhan",
        description: "Visionnaire expands its horizons with the new showroom opening in Wuhan, the birthplace of the Chu culture and one of the oldest cities in China."
    },

    {
        image: "./images/region/items-image/Feature image_Timeless-1.jpg",
        category: "News",
        title: "Timeless 2022",
        description: "The&nbsp;<strong>Timeless</strong>&nbsp;is one of the most appreciated&nbsp;catalogues by the lovers of Visionnaire collections and by professionals who want to immerse themselves in the wide production of the maison and have an in-depth overview of the&nbsp;<strong>brand's home philosophy</strong>."
    },
    
    {
        image: "./images/region/Boat_Home Page.jpg",
        category: "Events",
        title: "VISIONNAIRE MAIN PARTNER OF BOAT SUPERYACHT DESIGN FESTIVAL",
        description: "As event partner of BOAT International at the <strong>Superyacht Design Festival 2022</strong>, Visionnaire featured a special exhibition layout at The Mall in Milan&nbsp;to show its&nbsp;<strong>one-of-a-kind</strong>&nbsp;design approach."
    },

    {
        image: "./images/region/items-image/feature Becorp.jpg",
        category: "News",
        title: "IPE-VISIONNAIRE BECOMES A BENEFIT COMPANY",
        description: "As of<span>&nbsp;</span>December&nbsp;2021&nbsp;Visionnaire, founded by the parent company IPE,&nbsp;has become<span>&nbsp;</span>a&nbsp;Benefit Company<span>&nbsp;</span>,<span>&nbsp;</span>defining its business approach by promoting positive and essential values within the community.<span>&nbsp;</span>"
    },
    {
        image: "./images/region/items-image/Feature--image.png",
        category: "News",
        title: "A New Chapter Of Wonder",
        description: "The new season of Visionnaire collectible books has finally arrived.&nbsp;<strong>Mythica</strong>&nbsp;and&nbsp;<strong>Dreams</strong>&nbsp;are the new volumes"
    },

        
    {
        image: "./images/region/items-image/Feature image_the Arts Club Dubai.jpg",
        category: "Events",
        title: "Visionnaire at The Arts Club Dubai ",
        description: "On March 8, 2022, <strong>the </strong><strong>Arts Club Dubai</strong> hosted a private event called Art & Design Told by Women. "
    },
    
    {
        image: "./images/region/items-image/Feature-image_Wuhan.jpg",
        category: "News",
        title: "New Opening: Visionnaire Wuhan",
        description: "Visionnaire expands its horizons with the new showroom opening in Wuhan, the birthplace of the Chu culture and one of the oldest cities in China."
    },

    {
        image: "./images/region/items-image/Feature image_Timeless-1.jpg",
        category: "News",
        title: "Timeless 2022",
        description: "The&nbsp;<strong>Timeless</strong>&nbsp;is one of the most appreciated&nbsp;catalogues by the lovers of Visionnaire collections and by professionals who want to immerse themselves in the wide production of the maison and have an in-depth overview of the&nbsp;<strong>brand's home philosophy</strong>."
    },
    
    {
        image: "./images/region/Boat_Home Page.jpg",
        category: "Events",
        title: "VISIONNAIRE MAIN PARTNER OF BOAT SUPERYACHT DESIGN FESTIVAL",
        description: "As event partner of BOAT International at the <strong>Superyacht Design Festival 2022</strong>, Visionnaire featured a special exhibition layout at The Mall in Milan&nbsp;to show its&nbsp;<strong>one-of-a-kind</strong>&nbsp;design approach."
    },

    {
        image: "./images/region/items-image/feature Becorp.jpg",
        category: "News",
        title: "IPE-VISIONNAIRE BECOMES A BENEFIT COMPANY",
        description: "As of<span>&nbsp;</span>December&nbsp;2021&nbsp;Visionnaire, founded by the parent company IPE,&nbsp;has become<span>&nbsp;</span>a&nbsp;Benefit Company<span>&nbsp;</span>,<span>&nbsp;</span>defining its business approach by promoting positive and essential values within the community.<span>&nbsp;</span>"
    },
    {
        image: "./images/region/items-image/Feature--image.png",
        category: "News",
        title: "A New Chapter Of Wonder",
        description: "The new season of Visionnaire collectible books has finally arrived.&nbsp;<strong>Mythica</strong>&nbsp;and&nbsp;<strong>Dreams</strong>&nbsp;are the new volumes"
    },

        
    {
        image: "./images/region/items-image/Feature image_the Arts Club Dubai.jpg",
        category: "Events",
        title: "Visionnaire at The Arts Club Dubai ",
        description: "On March 8, 2022, <strong>the </strong><strong>Arts Club Dubai</strong> hosted a private event called Art & Design Told by Women. "
    },
    
    {
        image: "./images/region/items-image/Feature-image_Wuhan.jpg",
        category: "News",
        title: "New Opening: Visionnaire Wuhan",
        description: "Visionnaire expands its horizons with the new showroom opening in Wuhan, the birthplace of the Chu culture and one of the oldest cities in China."
    },

    {
        image: "./images/region/items-image/Feature image_Timeless-1.jpg",
        category: "News",
        title: "Timeless 2022",
        description: "The&nbsp;<strong>Timeless</strong>&nbsp;is one of the most appreciated&nbsp;catalogues by the lovers of Visionnaire collections and by professionals who want to immerse themselves in the wide production of the maison and have an in-depth overview of the&nbsp;<strong>brand's home philosophy</strong>."
    },
    
    {
        image: "./images/region/Boat_Home Page.jpg",
        category: "Events",
        title: "VISIONNAIRE MAIN PARTNER OF BOAT SUPERYACHT DESIGN FESTIVAL",
        description: "As event partner of BOAT International at the <strong>Superyacht Design Festival 2022</strong>, Visionnaire featured a special exhibition layout at The Mall in Milan&nbsp;to show its&nbsp;<strong>one-of-a-kind</strong>&nbsp;design approach."
    },

    {
        image: "./images/region/items-image/feature Becorp.jpg",
        category: "News",
        title: "IPE-VISIONNAIRE BECOMES A BENEFIT COMPANY",
        description: "As of<span>&nbsp;</span>December&nbsp;2021&nbsp;Visionnaire, founded by the parent company IPE,&nbsp;has become<span>&nbsp;</span>a&nbsp;Benefit Company<span>&nbsp;</span>,<span>&nbsp;</span>defining its business approach by promoting positive and essential values within the community.<span>&nbsp;</span>"
    }
]

const regionDiv = document.querySelector(".region")
const cardStructure = document.querySelector(".region__div-cont")

const cardButtons = document.querySelectorAll(".buttons-container>button")

window.addEventListener("DOMContentLoaded", () => {
    items.forEach((e) => {
        regionDiv.innerHTML += `
        <div class="region__div-cont col-12 col-sm-6 col-md-4 col-lg-4">
                    <a class="region__div" id="div1">
                        <img src="${e.image}" alt="" class="img-fluid">
                        <div class="region__div-text-group">
                            <div class="region__div-title">${e.category}</div>
                            <div class="region__div-subtitle">${e.title}</div>
                            <div class="region__div-desc">${e.description}</div>
                        </div>
                    </a>
                </div>
        `
    })

    cardButtons.forEach((validValue) => {

        validValue.addEventListener("click", () => {
            cardButtons.forEach((e) => {
                e.classList.remove("pageButton-active")
            })

            validValue.classList.add("pageButton-active")

            regionDiv.innerHTML = ``
            const clickCategory = validValue.classList[0].toUpperCase()
            const categoryFilterArr = items.filter(filterItem => filterItem.category.toUpperCase() == clickCategory)
            categoryFilterArr.forEach((e) => {
                regionDiv.innerHTML += `
                <div class="region__div-cont col-12 col-sm-6 col-md-4 col-lg-4">
                            <a class="region__div" id="div1">
                                <img src="${e.image}" alt="" class="img-fluid">
                                <div class="region__div-text-group">
                                    <div class="region__div-title">${e.category}</div>
                                    <div class="region__div-subtitle">${e.title}</div>
                                    <div class="region__div-desc">${e.description}</div>
                                </div>
                            </a>
                        </div>
                `
            })

            if(clickCategory == "ALL"){
                items.forEach((e) => {
                    regionDiv.innerHTML += `
                    <div class="region__div-cont col-12 col-sm-6 col-md-4 col-lg-4">
                                <a class="region__div" id="div1">
                                    <img src="${e.image}" alt="" class="img-fluid">
                                    <div class="region__div-text-group">
                                        <div class="region__div-title">${e.category}</div>
                                        <div class="region__div-subtitle">${e.title}</div>
                                        <div class="region__div-desc">${e.description}</div>
                                    </div>
                                </a>
                            </div>
                    `
                })
            }
        })
    })
})

//! CARD SYSTEM LOOP END