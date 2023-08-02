export class Monstre {
    #nom;
    #attaque;
    #defense;
    #pv;
    #image;
    #target;

    constructor(nom, attaque, defense, pv, image, target) {
        this.nom = nom;
        this.attaque = attaque;
        this.defense = defense;
        this.pv = pv;
        this.image = image;
        this.target = target;
    }

    get nom() {
        return this.#nom;
    }
    set nom(nvNom) {
        if (isNaN(nvNom)) {
            this.#nom = nvNom;
        } else {
            return "Il faut une chaîne de caractères.";
        }
    };

    get attaque() {
        return this.#attaque;
    }
    set attaque(nvAttaque) {
        if(!isNaN(nvAttaque)){
            this.#attaque=nvAttaque;
        }else{
            return'il faut un nombre'
        }
    }

    get defense() {
        return this.#defense;
    }
    set defense(nvDefense) {
        if(!isNaN(nvDefense)){
            this.#defense=nvDefense;
        }else{
            return'il faut un nombre'
        }
    }

    get pv() {
        return this.#pv;
    }
    set pv(nvPV) {
        if(!isNaN(nvPV)){
            this.#pv=nvPV;
        }else{
            return'il faut un nombre'
        }
    }

    get image() {
        return this.#image;
    }
    set image(nvImg) {
        this.#image = nvImg;
    }

    get target() {
        return this.#target;
    }
    set target(nvTarget) {
        this.#target = nvTarget;
    }

    // Attaque du monstre
    attaquer(cible) {
        if (this.attaque-cible.defense > 0) {
            cible.pv -= this.attaque - cible.defense;
        }
        if (cible.pv <= 0) {
            cible.pv = 0;
            return true;
        }
    };

    // Méthode d'ajout dans le dom
    ajoutDOM(){};

    // Méthode de suppression du dom
    suppDOM(){};

    // Le monstre lâche une potion ou une arme
    loot(){};
}