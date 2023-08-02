import { Squelette } from "./squelette.class.js";
import { Boss } from "./boss.class.js";
import { Spider } from "./spider.class.js";
import { Hero } from "./hero.class.js";
import { heroine, sac, equipement, potions, play } from "./game.js";

let target = document.querySelector(".container");

// Présentation de l'héroïne et de ses capacités
export function presentation(personnage) {
    let presentation = document.createElement('div');
    presentation.innerHTML = `Bonjour, je m'appelle <strong>${personnage.prenom} ${personnage.nom}</strong> et je suis entrée dans cette tour afin de <strong>tester mes capacités de combat</strong>. 
    <br>Mes <strong>dégâts</strong> lorsque j'attaque sont <strong>de ${personnage.degats}</strong> et s'amélioreront de 4 point d'attaque à chaque fois que je récupérerais une épée. 
    <br>Ma <strong>défense</strong> est <strong>de ${personnage.defense}</strong> et au départ de notre combat dans cette tour <strong>ma vie est à ${personnage.pv} PV </strong> qui pourront être regénérés de 10PV si je récupère une potion et que je l'utilise.
    <br> Appuyez sur la <strong>touche entrée pour enlever ce texte</strong>.`
    target.appendChild(presentation);

    addEventListener('keydown', function(evt) {
        if(evt.key == 'Enter') {
           target.removeChild(presentation);
          }
    })
}

// Génère un ennemi en fonction de l'étage et affiche le bouton d'attaque
export function genererEnnemi(level, coeff) {
    let ennemi;
    if (level % 10 == 0) {
        ennemi = new Boss;
    } else if (level % 5 == 0) {
        ennemi = new Squelette;
    } else {
        ennemi = new Spider;
    }
    ennemi.pv *= coeff;
    ennemi.maxPV *= coeff
    ennemi.attaque *= coeff;
    ennemi.ajoutDOM();
    barrePV(ennemi);
    btnAttack.style.display = 'block';
    btnNext.style.display = 'none';
    return ennemi
}

export function barrePV(cible) {
    //Permet de sélectionner la barre de vie du personnage qui a subit une attaque
    let barrePVCible;
    if (cible == heroine) {
        barrePVCible = document.querySelector('#pvHero');
        //firstElementChild permet ici de sélectionner la div qui met la couleur
        barrePVCible.firstElementChild.style.height = `${cible.pv/Hero.maxPV*100}%`;
    } else {
        barrePVCible = document.querySelector('#pvMonster');
        barrePVCible.firstElementChild.style.height = `${cible.pv/cible.maxPV*100}%`;
    }
}

// Affiche le sac s'il contient au moins un objet
export function affichageSac() {
    // On regarde si l'héroïne a au moins une arme
    if (heroine.sacArmes.length> 0) {
        sac.style.display = 'block';

        // Génère autant d'image d'arme qu'en contient le sac de l'héroïne et qui ne sont pas encore affichées
        for (let i=equipement.childElementCount; i<heroine.sacArmes.length; i++) {
            let imgWeapon = document.createElement('img');
            imgWeapon.src = 'assets/img/weapon.png';
            equipement.appendChild(imgWeapon);
        }
    }

    // On regarde si l'héroïne a au moins une potion
    if (heroine.sacPotions.length > 0) {
        sac.style.display = 'block';    
        btnUtiliser.style.display = 'block';
        

        // Génère autant d'image de potion qu'en contient le sac de l'héroïne et qui ne sont pas encore affichées
        for (let i=potions.childElementCount; i<heroine.sacPotions.length; i++) {
            let imgPotion = document.createElement('img');
            imgPotion.src = 'assets/img/potions.png';
            potions.appendChild(imgPotion);
        }
    } else {
        btnUtiliser.style.display = 'none';
    }
}

// Quand l'héroïne n'a plus de PV
export function lose() {
    let lost = document.querySelector('#lose');
    lost.style.display = 'block';
    clearInterval(play);
}