const path = 'images/';

// Images

const carouselInner = document.querySelector('.carousel-inner');

let aMathRandoms = [];

for (let i = 1; i <= 64; i++) {
    aMathRandoms.push(i);
}

aMathRandoms.sort(() => Math.random() - 0.5);

counter = 0;

aMathRandoms.forEach((item, index) => {

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
    
    if(counter == 0)
    {
        carouselDiv.classList.add('active');
        counter++;
    }

    element.draggable = false;

    carouselDiv.appendChild(element);

    carouselInner.appendChild(carouselDiv);
});
