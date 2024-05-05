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
    'E CHI NON SALTA INSIEME A NOI COS\'È?'
];

const headerh1 = document.querySelector('.header h1');

const footerh1 = document.querySelector('.footer h1');

const viewportWidth = window.innerWidth;

shuffle(aPhrases);

headerh1.innerHTML = aPhrases[0];

const headerh1Width = headerh1.scrollWidth + viewportWidth;

shuffle(aPhrases);

footerh1.innerHTML = aPhrases[0];

const footerh1Width = footerh1.scrollWidth + viewportWidth;

console.log(viewportWidth, headerh1Width, footerh1Width);

const root = document.documentElement;

root.style.setProperty('--footerh1Width', `${footerh1Width}px`);
root.style.setProperty('--headerh1Width', `${headerh1Width}px`);

const path = 'images/';

const carouselInner = document.querySelector('.carousel-inner');

let aMathRandoms = [];

for (let i = 1; i <= 64; i++) {
    aMathRandoms.push(i);
}

shuffle(aMathRandoms);

let counter = 0;

window.onload = function() {
    aMathRandoms.forEach((item, index) => {
        setTimeout(() => {
            addItemToCarousel(item, index);
        }, 500 * index);
    });
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

    let carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel-item');

    if(bVideo)
    {
        element = document.createElement('video');

        elementSrc = document.createElement('source');
        elementSrc.src = `${path}image${item}.mp4`;
        elementSrc.type = "video/mp4";

        element.appendChild(elementSrc);
        element.classList.add('d-block', 'w-100');
        element.autoplay = "true";
        element.loop = "true";
        element.muted = "true";
        element.playsinline = "true";
        element.alt = ``;
    }
    else
    {
        element = document.createElement('img');
        element.src = `${path}image${item}.jpeg`;
        element.classList.add('d-block', 'w-100');
        element.alt = ``;
    }
    
    if(index == 0)
    {
        carouselDiv.classList.add('active');
    }
    else
    {
        element.loading = 'lazy';
    }

    element.draggable = false;

    carouselDiv.appendChild(element);

    carouselInner.appendChild(carouselDiv);
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
