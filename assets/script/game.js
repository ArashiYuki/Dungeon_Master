import { Hero } from "./hero.class.js";
import { presentation, genererEnnemi, barrePV, affichageSac, lose } from "./main.js";

// Espace sac
export let sac = document.querySelector('#bag');
export let equipement = document.querySelector('#equipement');
export let potions = document.querySelector('#potions');

// Bouton d'action
let btnAttack = document.querySelector('#btnAttack');
let btnUtiliser = document.querySelector('#btnUtiliser');
let btnNext = document.querySelector('#btnNext');

// Etage et coefficient des monstres
var level = 1;
let textEtage = document.querySelector('#step');
textEtage.innerText = `Etage ${level}`;
let coeff = 1;

// Création d'une héroïne
console.log(`\n------------------ HERO ------------------`);
export let heroine = new Hero("Balln", "Marie", [], []);
console.log(heroine);
presentation(heroine);
affichageSac();

// Création du premier monstre
let ennemi = genererEnnemi(level, coeff);

// Permet d'utiliser une potion + refais l'afficahge du sac
btnUtiliser.addEventListener('click', function() {
    heroine.potionPV();
    //supprime la première image potion
    potions.removeChild(potions.firstElementChild);
    affichageSac();
    barrePV(heroine);
})

// L'héroïne attaque le monstre qui réplique s'il a encore de la vie
btnAttack.addEventListener('click', function() {
    let mort = heroine.attaquer(ennemi);
    barrePV(ennemi);
    if (mort == true) {
        affichageSac();
    }
    if (ennemi.pv > 0) {
        ennemi.attaquer(heroine);
        barrePV(heroine);
    }
});

// Augmente l'étage, l'affiche, génère un nouvel ennemi
btnNext.addEventListener('click', function() {
    level++;
    textEtage.innerText = `Etage ${level}`;
    ennemi = genererEnnemi(level, coeff);
    if (level % 10 == 0) {
        coeff += 0.1;
    }
})

// Boucle du jeux jusqu'à ce que l'héroïne meurt (récupération du loot, disparition de l'image et affichage ou non des boutons à la mort du monstre)
export let play = setInterval(function() {
    console.log("heroine : " + heroine.pv);
    if (ennemi.pv <= 0 ) {
        ennemi.suppDOM();
        let loot = ennemi.loot();
        heroine.recupEquipement(loot);
        affichageSac();
        btnAttack.style.display = 'none';
        btnNext.style.display = 'block';
    }
    if (heroine.pv <=0 ) {
        lose();
    }
}, 1000);