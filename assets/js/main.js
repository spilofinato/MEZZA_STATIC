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
        element.src = `${path}image${item}.mp4`;
        element.classList.add('d-block', 'w-100');
        element.autoplay = true;
        element.loop = true;
        element.muted = true;
        element.playsinline = true;
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

    console.log(`Item ${item} added to carousel`);

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

const aPhrases = [
    'BOUNTY MERDA',
    'CERTIFIED PEDOPHILES',
    '2014-2024',
    'NIENTE RISSE',
    'BANDITI DAL CARNE E FUOCO',
    'ETERNI SECONDI',
    'FUORI LA MERDA',
    'TÖLSÖ',
    'LA PARTE DELLA TORRE ANCORA IN PIEDI'
];

const headerh1 = document.querySelector('.header h1');

shuffle(aPhrases);

headerh1.innerHTML = aPhrases[0];

const footerh1 = document.querySelector('.footer h1');

shuffle(aPhrases);

footerh1.innerHTML = aPhrases[0];
