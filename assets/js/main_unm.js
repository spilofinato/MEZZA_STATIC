const aPhrases = [
    "BOUNTY MERDA",
    "CERTIFIED PEDOPHILES",
    "2014-2024",
    "NIENTE RISSE",
    "BANDITI DAL CARNE E FUOCO",
    "ETERNI SECONDI",
    "FUORI LA MERDA",
    "TÖLSÖ",
    "LA PARTE DELLA TORRE ANCORA IN PIEDI",
    "POLISCALVE MERDA",
    "NON DICO CHE VINCEREMO MA ALMENO METTEREMO IN DIFFICOLTÀ GLI AVVERSARI",
    "BOUNTY TORRE MERDI MERDA",
    "HO VISTO LA PALLA",
    "ABBIAMO SEGNATO CON LO SCHEMA DI FIFA",
    "POLISCALVE MAMME CALDE",
    "E CHI NON SALTA INSIEME A NOI COS'È?",
    "🐺💪🏻",
];

const headerh1 = document.querySelector(".header h1");

const path = "images/";

const carouselInner = document.querySelector(".carousel-inner");
const gallery = document.querySelector(".gallery");

let aGalleryColumns = [];

if (gallery) {
    let galleryColumn1 = gallery.firstElementChild;
    let galleryColumn2 = gallery.firstElementChild.nextElementSibling;
    let galleryColumn3 = gallery.lastElementChild;

    aGalleryColumns = [galleryColumn1, galleryColumn2, galleryColumn3];
}

let aMathRandoms = [];

for (let i = 0; i < 64; i++) {
    aMathRandoms.push(i);
}

shuffle(aMathRandoms);

let counter = 0;
let galleryCounter = 0;

let headerh1Width = headerh1.offsetWidth;
let viewportWidth = document.documentElement.clientWidth;

document.addEventListener("DOMContentLoaded", () => {
    shuffle(aPhrases);

    headerh1.innerHTML = aPhrases[0];

    headerh1.animate([{ transform: `translateX(100vw)` }, { transform: `translateX(-100%)` }], {
        duration: 10000,
        iterations: Infinity,
    });

    shuffleCarouselItemsPosition();

    shuffleAndAddGalleryItems();
});

function shuffleCarouselItemsPosition() {
    const aCarousel = document.querySelector(".carousel");
    let aCarouselItems = document.querySelectorAll(".slide");

    shuffle(aMathRandoms);

    let oFragment = document.createDocumentFragment();

    for (let i = 0; i < aCarouselItems.length; i++) {
        if (i == 0) {
            aCarouselItems[aMathRandoms[i]].classList.add("active");
        }

        if (i < 5) {
            aCarouselItems[aMathRandoms[i]].firstElementChild.setAttribute("fetchpriority", "high");
        } else {
            aCarouselItems[aMathRandoms[i]].firstElementChild.setAttribute("fetchpriority", "low");
            aCarouselItems[aMathRandoms[i]].firstElementChild.loading = "lazy";
        }

        oFragment.appendChild(aCarouselItems[aMathRandoms[i]]);
    }

    aCarousel.firstElementChild.appendChild(oFragment);
}

function shuffleAndAddGalleryItems() {
    let oFragmentCol1 = document.createDocumentFragment();
    let oFragmentCol2 = document.createDocumentFragment();
    let oFragmentCol3 = document.createDocumentFragment();
    const aAllImagesInCarousel = document.querySelectorAll(".slide > img");
    const aAllVideosInCarousel = document.querySelectorAll(".slide > video");
    const oGallery = document.querySelector(".gallery");
    const oGalleryColumn1 = oGallery.firstElementChild;
    const oGalleryColumn2 = oGalleryColumn1.nextElementSibling;
    const oGalleryColumn3 = oGalleryColumn2.nextElementSibling;

    let aAllItemsInCarousel = [];

    aAllImagesInCarousel.forEach((item) => {
        aAllItemsInCarousel.push(item.cloneNode(true));
    });

    aAllVideosInCarousel.forEach((item) => {
        aAllItemsInCarousel.push(item.cloneNode(true));
    });

    shuffle(aMathRandoms);

    let lastI = 0;

    for (let i = 0; i < aAllItemsInCarousel.length / 3; i++) {
        const oGalleryItem = document.createElement("div");
        oGalleryItem.classList.add("gallery-item");
        oGalleryItem.appendChild(aAllItemsInCarousel[aMathRandoms[i]]);
        oFragmentCol1.appendChild(oGalleryItem);

        lastI = i;
    }

    for (let i = lastI + 1; i < aAllItemsInCarousel.length / 3 * 2; i++) {
        const oGalleryItem = document.createElement("div");
        oGalleryItem.classList.add("gallery-item");
        oGalleryItem.appendChild(aAllItemsInCarousel[aMathRandoms[i]]);
        oFragmentCol2.appendChild(oGalleryItem);

        lastI = i;
    }

    for (let i = lastI + 1; i < aAllItemsInCarousel.length; i++) {
        const oGalleryItem = document.createElement("div");
        oGalleryItem.classList.add("gallery-item");
        oGalleryItem.appendChild(aAllItemsInCarousel[aMathRandoms[i]]);
        oFragmentCol3.appendChild(oGalleryItem);
    }

    oGalleryColumn1.appendChild(oFragmentCol1);
    oGalleryColumn2.appendChild(oFragmentCol2);
    oGalleryColumn3.appendChild(oFragmentCol3);
}

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

const eNavToggle = document.querySelector(".nav-toggle");

eNavToggle.addEventListener("click", () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
});

function handleNavClick(index) {
    document.body.dataset.nav = "false";

    const aContainers = document.querySelectorAll(".content[data-active]");

    const iNOfContainers = aContainers.length;

    let aActiveContainer = null;

    for (let i = 0; i < iNOfContainers; i++) {
        if (aContainers[i].dataset.active == "true") {
            aActiveContainer = aContainers[i];
            break;
        }
    }

    if (index != aActiveContainer.dataset.index) {
        const aIndexContainer = document.querySelector(`.content[data-index="${index}"]`);

        let iCounter = 0;

        if (index > aActiveContainer.dataset.index) {
            aActiveContainer.dataset.active = "almost";

            for (let i = parseInt(aActiveContainer.dataset.index) + 1; i < parseInt(index); i++) {
                setTimeout(() => {
                    aContainers[i].dataset.active = "almost";
                }, i * 100);

                iCounter = i;
            }
        } else {
            aActiveContainer.dataset.active = "false";

            for (let i = parseInt(index) + 1; i < parseInt(aActiveContainer.dataset.index); i++) {
                setTimeout(() => {
                    aContainers[i].dataset.active = "false";
                }, i * 100);

                iCounter = i;
            }
        }

        setTimeout(() => {
            aIndexContainer.dataset.active = "true";
        }, (iCounter + 1) * 100);
    }
}

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let index = 0;

setInterval(() => {
    index = (index + 1) % totalSlides;
    track.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading-screen");

    loadingScreen.animate(
        [
            {
                opacity: 1,
                transform: "scale(1) translateY(0)",
                filter: "blur(0px)"
            },
            {
                opacity: 0,
                transform: "scale(1.1) translateY(-20px)",
                filter: "blur(4px)"
            }
        ],
        {
            duration: 1200,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );

    setTimeout(() => {
        loadingScreen.remove();
    }, 1200);
});
