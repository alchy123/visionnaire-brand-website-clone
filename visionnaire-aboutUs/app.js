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

//* AUTOMATIC MIXED LOOP START

const items = [
    {
        imgSec__img1: "./images/region/Villa_1919_2.jpg",
        imgSec__img2: "./images/region/Screenshot 2022-02-21 at 13.41.15_0.png",
        imgSec__img3: "./images/region/Screenshot 2022-02-21 at 13.41.15 2.png",
        imgSec__img4: "./images/region/feature image_1_2.jpg",
        imgSec__img5: "./images/region/Cover 768_496_Alcova_2.jpg",
        imgSec__img6: "",
        dateTitle: "2021",
        paragraph1 : "<a href=''>Benefit company</a> from 2021, Visionnaire defines its business as a promoter of positive value  the community and intends to pursue, in the exercise of economic activity, one or more positive effects - or reduce negative effects - towards people, communities, territories and environment.",
        paragraph2: "This year Visionnaire has inaugurated two new strategic flagship stores, located in <a href=''>London</a> and <a href=''>Dubai</a> , confirming and celebrating its presence with stores all over the world.",
        paragraph3: " On December Visionnaire launch the <a href=''>Beauty Tales</a> campaign, under the artistic direction of Eleonore Cavalli Beauty Tales is not just a tale with a fifteenth-century atmosphere, but reinterpretation of contemporary living, through a delicate photographic research that wonder. ",
        paragraph4: "During Milan Design Week of September, Visionnaire unveil a striking installation in its showroom named <a href=''>Insulae</a> designed by Marco Bonelli and Marijana Radovic aka m2atelier. Each island hosts a family of products from the  <a href=''>Caprice&nbsp;collection</a> designed by m2atelier. The main floor of the gallery hosts products from the  <a href=''>Babylon Rack&nbsp;collection</a> designed by Alessandro La Spada, which are integrated in the Insulae project.",
        paragraph5: "Also, on the occasion of the Design Week, Visionnaire to Alcova, the traveling Kermesse of the Fuorisalone conceived by Joseph Grima Valentina Ciuffi in 2018 and dedicated to designers, artists, galleries institutions united by a pioneering vision of the culture of design, innovation experimentation. Ideal stage for the installation “ <a href=''>De Rerum Natura</a> ” by Gunilla Zamboni, known as Gupica.",
        paragraph6: "Finally, 2021 is an year of  <a href=''>international design awards</a> for the brand: Admeto low table designed by Marco Piva winner 2021 Wallpaper* Design Awards, Best Curves category; Imagine armchair designed by Lipparini results winner of the International Design & Architecture Awards Design Al, seating category. Lego low table and console designed by Draga&Aurel have been selected for the ADI Design Index 2021; Basket Armchair designed by winner of 2021 Archiproducts Design Awards, Outdoor category.",
        imgMix__img1: "./images/region/INS1.jpg",
        imgMix__img2: "./images/region/Visionnaire Insulae_0284_edit_0_0_2.jpg",
        imgMix__img3: "",
    },

    {
        imgSec__img1: "./images/region/Visionnaire 2020_1481 silvia_3.jpg",
        imgSec__img2: "./images/region/LiveShows00004ritaglio_3.jpg",
        imgSec__img3: "./images/region/24 mercury divano Visionnaire 2020_1308_0.jpg",
        imgSec__img4: "",
        imgSec__img5: "",
        imgSec__img6: "",
        dateTitle: "2020",
        paragraph1 : "Screenshot 2021-03-03 at 16.27.15.png<a href=''>Beauty Collection</a>, Beauty is a word with an intense, multifaceted meaning. Besides indicating an outlook of positive energy and hope, the contemporary beauty narrated by Visionnaire sums up an attitude, that of creating extraordinary, unique projects and objects. Constant technological research, experimentation with materials, the juxtaposition and mixing of element, the hands of our craftsmen that test, perfect and define a new material solution: these are the factors that go into every single product, making it unique, inimitable, yet reproducible.",
        paragraph2: "In 2020, Visionnaire expands its Art Design offerings, approaching the great challenge of contextualizing them in a retail scenario and involving designers of artistic talent, with a vivid focus on experimentation with materials: almost “Renaissance” attitude, in terms of method and individual effort invested in the genesis and realization of the Brand’s creations.",
        paragraph3: "The new Beauty collection is presented in June through a new digital format, the Visionnaire<a href=''> Live Shows</a>.",
        paragraph4: "Also 2020 is an year of <a href=''>international design awards</a> for the brand: Camden Armchair, designed by Mauro Lipparini results Jury Winner in the 8th annual Architizer A+Awards 'residential seating' category and Il Pavone designed by Marc Ange has conquered the jury for its concept and design and results Winner of the 2020 Archiproducts Design Awards!",
        paragraph5: "Among the 2020 news, 3 new Collectable Books: <a href=''>Dreams, Beauty and Dehoor.</a>",
        paragraph6: "<a href=''>Mercury</a>, the armchair and sofa model designed by sculptor Rito Valla in 1961 for IPE reissues by Visionnaire and available on 1stDibs!",
        imgMix__img1: "./images/region/Screenshot 2021-03-03 at 16.27.15.png",
        imgMix__img2: "",
        imgMix__img3: "",
    },

    {
        imgSec__img1: "./images/region/Screenshot 2021-03-03 at 16.35.28.png",
        imgSec__img2: "./images/region/Screenshot 2021-03-03 at 16.40.21.png",
        imgSec__img3: "",
        imgSec__img4: "",
        imgSec__img5: "",
        imgSec__img6: "",
        dateTitle: "2019",
        paragraph1 : "The sequence of honors and awards continues: the Marty console designed by Marco Piva is honored in the “Best Dream Factory” category of the Wallpaper Design Awards. Thanks to an extraordinary policy of international growth, in 2019 the company has 31 exclusive stores around the world, and operates in 55 countries.",
        paragraph2: "2019 is a year of anniversaries for IPE-Visionnaire: the mother company IPE celebrates the 60th anniversary of its founding, while Visionnaire, its exclusive brand, reaches its 15th year of success.",
        paragraph3: "For the 58th edition of the Salone Internazionale del Mobile in Milan and the associated FuoriSalone 2019, these milestones will be commemorated with a sequence of extraordinary initiatives.They include the launch of a signature volume, which takes on particular strategic and programmatic value: Decalogue – this is the title of the project – is a precious book published in a limited edition, presenting the ten fundamental and indispensable values of the company, defined through an overall vision that has the force of a credo. The texts offer a narrative of the historical roots of the brand, taking stock of its present identity and outlining ambitious trajectories for its future.",
        paragraph4: "In late 2019 Visionnaire presents The <a href=''>“Il Pavone”</a> collection by Marc Ange, which made its debut in the new flaghship store of Miami during Art Basel, in the “haute couture throne” and “prêt-à-porter chair”.",
        paragraph5: "",
        paragraph6: "",
        imgMix__img1: "./images/region/The_Garden_of_beauty_installation16_1.JPEG",
        imgMix__img2: "",
        imgMix__img3: "",
    },

    {
        imgSec__img1: "./images/region/Screenshot 2021-03-03 at 16.26.06.png",
        imgSec__img2: "./images/region/Screenshot 2021-03-03 at 16.26.23.png",
        imgSec__img3: "",
        imgSec__img4: "",
        imgSec__img5: "",
        imgSec__img6: "",
        dateTitle: "2018",
        paragraph1 : "This is the year of international prizes. As many as six awards of the international design community are assigned to Visionnaire: the Kobol bathroom console designed by Alessandro La Spada wins the Archiproducts Design Award; the Opera dining table, also by the designer Alessandro La Spada, takes the AD USA Great Design Award 2018; the Tanya chairs by Roberto Lazzeroni receives the Architizer A+ Design Award; the Tea Party table is a winner in the Wallpaper Design Awards, both in UK and in China; and the Balin, Elmo, Galdor and Tareg mirrors by Armando Bruno receive the NYCxDesign Award.",
        paragraph2: "",
        paragraph3: "",
        paragraph4: "",
        paragraph5: "",
        paragraph6: "",
        imgMix__img1: "./images/region/Screenshot 2021-03-03 at 16.26.38.png",
        imgMix__img2: "",
        imgMix__img3: "",
    }
]
const transferCont = document.querySelector(".timelineWrapper") 
const cardDiv = document.querySelector(".timelineWrapper") 
console.log(cardDiv);
let itemsCounter = 1
window.addEventListener("DOMContentLoaded", () => {
    items.forEach((e) => {
        if(itemsCounter % 2 == 0){
            transferCont.innerHTML += `
            <div class="timelineWrapper__cardWrapper flex-row-reverse">
    
    
                        <div class="timelineWrapper__imageSection">
    
                            <img src="${e.imgSec__img1}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img2}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img3}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img4}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img5}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img6}" alt="" class="img-fluid">
    
                        </div>
                        <div class="timelineWrapper__mixedSection">
                            <div class="timelineWrapper__mixedParagraph">
                                <div class="timelineWrapper__title">
                                    <h2 class="justify-content-end rightBefore">${e.dateTitle}</h2>
                                </div>
                                <p class="text-right">
                                ${e.paragraph1}
                                </p>
                                <p class="text-right">
                                ${e.paragraph2}
                                </p>
                                <p class="text-right">
                                ${e.paragraph3}
                                </p>
                                <p class="text-right">
                                ${e.paragraph4}
                                </p>
                                <p class="text-right">
                                ${e.paragraph5}
                                </p>
                                <p class="text-right">
                                ${e.paragraph6}
                                </p>
    
                            </div>
    
                            <div class="timelineWrapper__mixedImg">
    
                                <img src="${e.imgMix__img1}" alt="" class="img-fluid">
                                <img src="${e.imgMix__img2}" alt="" class="img-fluid">
                                <img src="${e.imgMix__img}" alt="" class="img-fluid">
    
                            </div>
    
                        </div>
                    </div>
            `
        }
        else{
            transferCont.innerHTML += `
            <div class="timelineWrapper__cardWrapper">
    
    
                        <div class="timelineWrapper__imageSection">
    
                            <img src="${e.imgSec__img1}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img2}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img3}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img4}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img5}" alt="" class="img-fluid">
                            <img src="${e.imgSec__img6}" alt="" class="img-fluid">
    
                        </div>
                        <div class="timelineWrapper__mixedSection">
                            <div class="timelineWrapper__mixedParagraph">
                                <div class="timelineWrapper__title">
                                    <h2 class="odd">${e.dateTitle}</h2>
                                </div>
                                <p>
                                ${e.paragraph1}
                                </p>
                                <p>
                                ${e.paragraph2}
                                </p>
                                <p>
                                ${e.paragraph3}
                                </p>
                                <p>
                                ${e.paragraph4}
                                </p>
                                <p>
                                ${e.paragraph5}
                                </p>
                                <p>
                                ${e.paragraph6}
                                </p>
    
                            </div>
    
                            <div class="timelineWrapper__mixedImg">
    
                                <img src="${e.imgMix__img1}" alt="" class="img-fluid">
                                <img src="${e.imgMix__img2}" alt="" class="img-fluid">
                                <img src="${e.imgMix__img}" alt="" class="img-fluid">
    
                            </div>
    
                        </div>
                    </div>
            `
        }
        
        itemsCounter++

        const cardDiv = document.querySelectorAll(".timelineWrapper__cardWrapper") 
        window.addEventListener("scroll", checkboxes)
        function checkboxes() {
            const windowHeight = window.innerHeight;
            cardDiv.forEach((a) => {
                let divHeight = a.getBoundingClientRect().top
                if(divHeight<windowHeight){
                    a.classList.add("opacityShow")
                    console.log("nesne gözüküyor" + a)
                }
                else{
                    a.classList.remove("opacityShow")
                    console.log("nesne gözükmüyor" + a)
                }
            })
        }
    })
})

//* AUTOMATIC MIXED LOOP END