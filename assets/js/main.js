const aPhrases=["BOUNTY MERDA","CERTIFIED PEDOPHILES","2014-2024","NIENTE RISSE","BANDITI DAL CARNE E FUOCO","ETERNI SECONDI","FUORI LA MERDA","T\xd6LS\xd6","LA PARTE DELLA TORRE ANCORA IN PIEDI","POLISCALVE MERDA","NON DICO CHE VINCEREMO MA ALMENO METTEREMO IN DIFFICOLT\xc0 GLI AVVERSARI","BOUNTY TORRE MERDI MERDA","HO VISTO LA PALLA","ABBIAMO SEGNATO CON LO SCHEMA DI FIFA","POLISCALVE MAMME CALDE","E CHI NON SALTA INSIEME A NOI COS'\xc8?","\uD83D\uDC3A\uD83D\uDCAA\uD83C\uDFFB"],headerh1=document.querySelector(".header h1"),path="images/",carouselInner=document.querySelector(".carousel-inner"),gallery=document.querySelector(".gallery");let aGalleryColumns=[];if(gallery){let e=gallery.firstElementChild,t;aGalleryColumns=[e,gallery.firstElementChild.nextElementSibling,gallery.lastElementChild]}let aMathRandoms=[];for(let i=1;i<=64;i++)aMathRandoms.push(i);shuffle(aMathRandoms);let counter=0,galleryCounter=0,headerh1Width=headerh1.offsetWidth,viewportWidth=document.documentElement.clientWidth;function addItemToCarousel(e,t){let a,l,n=!1;e>=60&&(n=!0),e=e.toString().padStart(5,"0"),n?(a=document.createElement("video"),(l=document.createElement("source")).src=`${path}image${e}.mp4`,l.type="video/mp4",a.appendChild(l),a.classList.add("d-block","w-100"),a.setAttribute("controls",!1),a.setAttribute("loop",!0),a.muted=!0,a.setAttribute("autoplay",!0),a.setAttribute("playsinline",!0),a.alt=""):((a=document.createElement("img")).src=`${path}image${e}.jpeg`,a.classList.add("d-block","w-100"),a.alt=""),a.draggable=!1;let r=document.createElement("div");r.classList.add("carousel-item"),0==t&&r.classList.add("active"),a.draggable=!1,(2==e||10==e)&&a.addEventListener("click",()=>{easterEggTinca()}),r.appendChild(a),galleryElement=a.cloneNode(!0),carouselInner.appendChild(r),galleryElement.classList.remove("d-block","w-100"),galleryElement.classList.add("img-fluid"),n&&(galleryElement.setAttribute("controls",!1),galleryElement.setAttribute("loop",!0),galleryElement.muted=!0,galleryElement.setAttribute("autoplay",!0),galleryElement.setAttribute("playsinline",!0)),(2==e||10==e)&&galleryElement.addEventListener("click",()=>{easterEggTinca()});let o=document.createElement("div");o.classList.add("gallery-item"),o.appendChild(galleryElement),aGalleryColumns[galleryCounter].appendChild(o),3==++galleryCounter&&(galleryCounter=0)}function shuffle(e){let t=e.length;for(;0!=t;){let a=Math.floor(Math.random()*t);t--,[e[t],e[a]]=[e[a],e[t]]}}window.onload=function(){shuffle(aPhrases),headerh1.innerHTML=aPhrases[0],headerh1.animate([{transform:"translateX(100vw)"},{transform:"translateX(-100%)"}],{duration:1e4,iterations:1/0}),aMathRandoms.forEach((e,t)=>{setTimeout(()=>{addItemToCarousel(e,t)},100*t)})};const eNavToggle=document.querySelector(".nav-toggle");function handleNavClick(e){document.body.dataset.nav="false";let t=document.querySelectorAll(".content[data-active]"),a=t.length,l=null;for(let n=0;n<a;n++)if("true"==t[n].dataset.active){l=t[n];break}if(e!=l.dataset.index){let r=document.querySelector(`.content[data-index="${e}"]`),o=0;if(e>l.dataset.index){l.dataset.active="almost";for(let s=parseInt(l.dataset.index)+1;s<parseInt(e);s++)setTimeout(()=>{t[s].dataset.active="almost"},100*s),o=s}else{l.dataset.active="false";for(let d=parseInt(e)+1;d<parseInt(l.dataset.index);d++)setTimeout(()=>{t[d].dataset.active="false"},100*d),o=d}setTimeout(()=>{r.dataset.active="true"},(o+1)*100)}}eNavToggle.addEventListener("click",()=>{document.body.dataset.nav="true"===document.body.dataset.nav?"false":"true"});let counterTinca=1;function easterEggTinca(){let e=document.getElementById("easterEggToast"),t=bootstrap.Toast.getOrCreateInstance(e);if(5!=counterTinca)return counterTinca++,!1;{t.show(),counterTinca=1;let a=document.documentElement.clientWidth;return a<=992?setTimeout(()=>{location.href="https://www.solopornoitaliani.xxx/video/135774/dottor-bavaro-pisciato-in-faccia-da-elena-spanu-of.html"},1500):setTimeout(()=>{window.open("https://www.solopornoitaliani.xxx/video/135774/dottor-bavaro-pisciato-in-faccia-da-elena-spanu-of.html","_blank")},1500),!0}}