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

const path = 'images/';

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

let headerh1Width = headerh1.offsetWidth;
let viewportWidth = document.documentElement.clientWidth;

window.onload = function() {

    shuffle(aPhrases);

    headerh1.innerHTML = aPhrases[0];

    headerh1.animate([
        { transform: `translateX(100vw)` },
        { transform: `translateX(-100%)` }
    ], {
        duration: 10000,
        iterations: Infinity
    });

    aMathRandoms.forEach((item, index) => {
        setTimeout(() => {
            addItemToCarousel(item, index);
        }, 100 * index);
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
    
    let carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel-item');
    
    if(index == 0)
    {
        carouselDiv.classList.add('active');
    }
    
    element.draggable = false;

    if(item == 2 || item == 10)
    {
        element.addEventListener('click', () => {
            easterEggTinca();
        });
    }
    
    carouselDiv.appendChild(element);

    galleryElement = element.cloneNode(true);
    
    carouselInner.appendChild(carouselDiv);
    galleryElement.classList.remove('d-block', 'w-100');
    galleryElement.classList.add('img-fluid');

    if(bVideo)
    {
        galleryElement.setAttribute('controls', false);
        galleryElement.setAttribute('loop', true);
        galleryElement.muted = true;
        galleryElement.setAttribute('autoplay', true);
        galleryElement.setAttribute('playsinline', true);
    }

    if(item == 2 || item == 10)
    {
        galleryElement.addEventListener('click', () => {
            easterEggTinca();
        });
    }
    
    let elementDiv = document.createElement('div');
    elementDiv.classList.add('gallery-item');
    elementDiv.appendChild(galleryElement);
    
    aGalleryColumns[galleryCounter].appendChild(elementDiv);
    
    galleryCounter++;
    
    if(galleryCounter == 3)
    {
        galleryCounter = 0;
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

function handleNavClick(index)
{
    document.body.dataset.nav = 'false';

    const aContainers = document.querySelectorAll('.content[data-active]');

    const iNOfContainers = aContainers.length;

    let aActiveContainer = null;

    for(let i = 0; i < iNOfContainers; i++)
    {
        if(aContainers[i].dataset.active == 'true')
        {
            aActiveContainer = aContainers[i];
            break;
        }
    }

    if(index != aActiveContainer.dataset.index)
    {
        const aIndexContainer = document.querySelector(`.content[data-index="${index}"]`);
        
        let iCounter = 0;
        
        if(index > aActiveContainer.dataset.index)
        {
            aActiveContainer.dataset.active = 'almost';

            for(let i = parseInt(aActiveContainer.dataset.index) + 1; i < parseInt(index); i++)
            {
                setTimeout(() => {
                    aContainers[i].dataset.active = 'almost';
                }, i * 100);

                iCounter = i;
            }
        }
        else
        {
            aActiveContainer.dataset.active = 'false';

            for(let i = parseInt(index) + 1; i < parseInt(aActiveContainer.dataset.index); i++)
            {
                setTimeout(() => {
                    aContainers[i].dataset.active = 'false';
                }, i * 100);

                iCounter = i;
            }
        }

        setTimeout(() => {
            aIndexContainer.dataset.active = 'true';
        }, (iCounter + 1) * 100);
    }
}

let counterTinca = 1;

function easterEggTinca() {
    const toastLiveExample = document.getElementById('easterEggToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

    if(counterTinca == 5)
    {
        toastBootstrap.show();
        
        counterTinca = 1;

        const clientWidth = document.documentElement.clientWidth;

        if(clientWidth <= 992)
        {
            setTimeout(() => {
                location.href = 'https://www.solopornoitaliani.xxx/video/135774/dottor-bavaro-pisciato-in-faccia-da-elena-spanu-of.html';
            }, 1500);
        }
        else
        {
            setTimeout(() => {
                window.open('https://www.solopornoitaliani.xxx/video/135774/dottor-bavaro-pisciato-in-faccia-da-elena-spanu-of.html', '_blank');
            }, 1500);
        }

        return true;
    }
    else
    {
        counterTinca++;
        return false;
    }
}