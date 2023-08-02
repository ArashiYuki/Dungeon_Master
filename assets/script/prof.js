import { Hero } from "./hero.class.js";
import { Spider } from "./spider.class.js";


// Espace sac
let sac = document.querySelector('#bag');
let equipement = document.querySelector('#equipement');
let potions = document.querySelector('#potions');

// Bouton d'action
let btnAttack = document.querySelector('#btnAttack');
let btnUtiliser = document.querySelector('#btnUtiliser');
let btnNext = document.querySelector('#btnNext');

let titreEtage = document.querySelector('#step');

function n1 (titreEtage) {
    return {
        'etage': titreEtage.innerText.slice(6, titreEtage.innerText.length),
        'hero': new Hero('Balln', 'Marie', [], []),
        'monstre': new Spider(),
        'btnAttack': btnAttack,
        'btnUtiliser': btnUtiliser,
        'btnNext': btnNext,
        'pvBaseSpider': 20,
        'pvBaseSquelette': 30,
        'pvBaseBoss': 40,
        'pvBaseHero': 100
    }
}


let game = n1(titreEtage);

function n2 (game) {}