const aPhrases=["BOUNTY MERDA","CERTIFIED PEDOPHILES","2014-2024","NIENTE RISSE","BANDITI DAL CARNE E FUOCO","ETERNI SECONDI","FUORI LA MERDA","T\xd6LS\xd6","LA PARTE DELLA TORRE ANCORA IN PIEDI","POLISCALVE MERDA","NON DICO CHE VINCEREMO MA ALMENO METTEREMO IN DIFFICOLT\xc0 GLI AVVERSARI","BOUNTY TORRE MERDI MERDA","HO VISTO LA PALLA","ABBIAMO SEGNATO CON LO SCHEMA DI FIFA","POLISCALVE MAMME CALDE","E CHI NON SALTA INSIEME A NOI COS'\xc8?","\uD83D\uDC3A\uD83D\uDCAA\uD83C\uDFFB",],headerh1=document.querySelector(".header h1"),path="images/",carouselInner=document.querySelector(".carousel-inner"),gallery=document.querySelector(".gallery");let aGalleryColumns=[];if(gallery){let e=gallery.firstElementChild,t;aGalleryColumns=[e,gallery.firstElementChild.nextElementSibling,gallery.lastElementChild]}let aMathRandoms=[];for(let i=0;i<64;i++)aMathRandoms.push(i);shuffle(aMathRandoms);let counter=0,galleryCounter=0,headerh1Width=headerh1.offsetWidth,viewportWidth=document.documentElement.clientWidth;function shuffleCarouselItemsPosition(){let e=document.querySelector(".carousel"),t=document.querySelectorAll(".carousel-item");shuffle(aMathRandoms);let a=document.createDocumentFragment();for(let l=0;l<t.length;l++)a.appendChild(t[aMathRandoms[l]]),0==l&&t[aMathRandoms[l]].classList.add("active");e.firstElementChild.appendChild(a)}function shuffleAndAddGalleryItems(){let e=document.createDocumentFragment(),t=document.createDocumentFragment(),a=document.createDocumentFragment(),l=document.querySelectorAll(".carousel-item > img"),n=document.querySelectorAll(".carousel-item > video"),r=document.querySelector(".gallery"),d=r.firstElementChild,s=d.nextElementSibling,o=s.nextElementSibling,h=[];l.forEach(e=>{h.push(e.cloneNode(!0))}),n.forEach(e=>{h.push(e.cloneNode(!0))}),shuffle(aMathRandoms);let c=0;for(let E=0;E<h.length/3;E++){let f=document.createElement("div");f.classList.add("gallery-item"),f.appendChild(h[aMathRandoms[E]]),e.appendChild(f),c=E}for(let m=c+1;m<h.length/3*2;m++){let u=document.createElement("div");u.classList.add("gallery-item"),u.appendChild(h[aMathRandoms[m]]),t.appendChild(u),c=m}for(let A=c+1;A<h.length;A++){let C=document.createElement("div");C.classList.add("gallery-item"),C.appendChild(h[aMathRandoms[A]]),a.appendChild(C)}d.appendChild(e),s.appendChild(t),o.appendChild(a)}function shuffle(e){let t=e.length;for(;0!=t;){let a=Math.floor(Math.random()*t);t--,[e[t],e[a]]=[e[a],e[t]]}}window.onload=function(){shuffle(aPhrases),headerh1.innerHTML=aPhrases[0],headerh1.animate([{transform:"translateX(100vw)"},{transform:"translateX(-100%)"}],{duration:1e4,iterations:1/0}),shuffleCarouselItemsPosition(),shuffleAndAddGalleryItems()};const eNavToggle=document.querySelector(".nav-toggle");function handleNavClick(e){document.body.dataset.nav="false";let t=document.querySelectorAll(".content[data-active]"),a=t.length,l=null;for(let n=0;n<a;n++)if("true"==t[n].dataset.active){l=t[n];break}if(e!=l.dataset.index){let r=document.querySelector(`.content[data-index="${e}"]`),d=0;if(e>l.dataset.index){l.dataset.active="almost";for(let s=parseInt(l.dataset.index)+1;s<parseInt(e);s++)setTimeout(()=>{t[s].dataset.active="almost"},100*s),d=s}else{l.dataset.active="false";for(let o=parseInt(e)+1;o<parseInt(l.dataset.index);o++)setTimeout(()=>{t[o].dataset.active="false"},100*o),d=o}setTimeout(()=>{r.dataset.active="true"},(d+1)*100)}}eNavToggle.addEventListener("click",()=>{document.body.dataset.nav="true"===document.body.dataset.nav?"false":"true"});