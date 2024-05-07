const aPhrases = [
    'BOUNTY MERDA',
    'CERTIFIED PEDOPHILES',
    '2014-2024',
    'NIENTE RISSE',
    'BANDITI DAL CARNE E FUOCO',
    'ETERNI SECONDI',
    'FUORI LA MERDA',
    'TÖLSÖ',
    'LA PARTE DELLA TORRE ANCORA IN PIEDI',
    'POLISCALVE MERDA',
    'NON DICO CHE VINCEREMO MA ALMENO METTEREMO IN DIFFICOLTÀ GLI AVVERSARI',
    'BOUNTY TORRE MERDI MERDA',
    'HO VISTO LA PALLA',
    'ABBIAMO SEGNATO CON LO SCHEMA DI FIFA',
    'POLISCALVE MAMME CALDE',
    'E CHI NON SALTA INSIEME A NOI COS\'È?',
    '🐺💪🏻'
];

const headerh1 = document.querySelector('.header h1');

const footerh1 = document.querySelector('.footer h1');

const path = 'images/';

const viewportWidth = window.innerWidth;

const carouselInner = document.querySelector('.carousel-inner');
const gallery = document.querySelector('.gallery');

let aGalleryColumns = [];

if(gallery)
{
    let galleryColumn1 = gallery.firstElementChild;
    let galleryColumn2 = gallery.firstElementChild.nextElementSibling;
    let galleryColumn3 = gallery.lastElementChild;
    
    aGalleryColumns = [galleryColumn1, galleryColumn2, galleryColumn3];
}

let aMathRandoms = [];

for (let i = 1; i <= 64; i++) {
    aMathRandoms.push(i);
}

shuffle(aMathRandoms);

let counter = 0;
let galleryCounter = 0;

window.onload = function() {

    shuffle(aPhrases);

    headerh1.innerHTML = aPhrases[0];

    let headerh1Width = headerh1.getBoundingClientRect().width + 50;

    if(headerh1Width > 1000)
    {
        headerh1Width = headerh1Width + 100;
    }

    shuffle(aPhrases);

    footerh1.innerHTML = aPhrases[0];

    let footerh1Width = footerh1.getBoundingClientRect().width + 50;

    if(footerh1Width > 1000)
    {
        footerh1Width = footerh1Width + 100;
    }

    headerh1.animate([
        { transform: `translateX(${viewportWidth}px)` },
        { transform: `translateX(-${headerh1Width}px)` }
    ], {
        duration: 10000,
        iterations: Infinity
    });

    footerh1.animate([
        { transform: `translateX(-${footerh1Width}px)` },
        { transform: `translateX(${viewportWidth}px)` }
    ], {
        duration: 10000,
        iterations: Infinity
    });

    if(carouselInner)
    {
        aMathRandoms.forEach((item, index) => {
            setTimeout(() => {
                addItemToCarousel(item, index);
            }, 500 * index);
        });
    }
    else
    {
        aMathRandoms.forEach((item, index) => {
            setTimeout(() => {
                addItemToCarousel(item, index);
            }, 100 * index);
        });
    }
}

function addItemToCarousel(item, index)
{
    let element;
    let elementSrc;
    
    let bVideo = false;

    if(item >= 60)
    {
        bVideo = true;
    }

    item = item.toString().padStart(5, '0');

    
    if(bVideo)
    {
        element = document.createElement('video');
        
        elementSrc = document.createElement('source');
        elementSrc.src = `${path}image${item}.mp4`;
        elementSrc.type = "video/mp4";
        
        element.appendChild(elementSrc);
        element.classList.add('d-block', 'w-100');
        element.setAttribute('controls', false);
        element.setAttribute('loop', true);
        element.muted = true;
        element.setAttribute('autoplay', true);
        element.setAttribute('playsinline', true);
        element.alt = ``;
    }
    else
    {
        element = document.createElement('img');
        element.src = `${path}image${item}.jpeg`;
        element.classList.add('d-block', 'w-100');
        element.alt = ``;
    }

    element.draggable = false;
    
    if(carouselInner)
    {
        let carouselDiv = document.createElement('div');
        carouselDiv.classList.add('carousel-item');
        
        if(index == 0)
        {
            carouselDiv.classList.add('active');
        }
    
        element.draggable = false;
    
        carouselDiv.appendChild(element);
    
        carouselInner.appendChild(carouselDiv);
    }
    else
    {
        element.classList.remove('d-block', 'w-100');
        element.classList.add('img-fluid');

        let elementDiv = document.createElement('div');
        elementDiv.classList.add('gallery-item');
        elementDiv.appendChild(element);

        aGalleryColumns[galleryCounter].appendChild(elementDiv);

        galleryCounter++;

        if(galleryCounter == 3)
        {
            galleryCounter = 0;
        }
    }
}

function shuffle(array)
{
    let currentIndex = array.length;

    while (currentIndex != 0)
    {    
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

const eNavToggle = document.querySelector('.nav-toggle');

eNavToggle.addEventListener('click', () => {
    document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';
});