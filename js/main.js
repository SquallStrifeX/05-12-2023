const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let next = document.getElementById('nextbutton');
let prev = document.getElementById('prevbutton');
let items = document.querySelector('.items');
let imagex = document.getElementById('image');
let titlex = document.getElementById('title');
let textx = document.getElementById('text')
let corrente = 0;

function showimage(index) {
    const {image, title, text} = images[index];
    imagex.src=image;
    titlex.textContent=title;
    textx.textContent=text;

}

//     let giocoCorrente = images[corrente];
//     items.innerHTML = `<div class="item active">
//         <img src="${giocoCorrente.image}" alt="">
//         <div class="position-absolute bottom-50 text-right color-white padding-text">
//             <h2>${giocoCorrente.title}</h2>
//             <h5>${giocoCorrente.text}</h5>
//         </div>
//     </div> 

//     <div class="prev" id="prev"></div>
//     <div class="next" id="next"></div>`;
// }

function nextGame() {
    corrente = (corrente + 1) % images.length;
    showimage(corrente);
}

function prevGame() {
    corrente = (corrente - 1 + images.length) % images.length;
    showimage(corrente);
}

next.addEventListener('click', nextGame);
prev.addEventListener('click', prevGame);

showimage(corrente);