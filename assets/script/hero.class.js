export class Hero {
    #nom;
    #prenom;
    #force;
    #degats;
    #defense;
    #pv;
    #sacPotions;
    #sacArmes;

    static degatsBase = 3;
    static minForce = 3;
    static maxForce = 10;
    static minDef = 1;
    static maxDef = 5;
    static maxPV = 100;

    constructor(nom, prenom, sacPotions, sacArmes) {
        this.nom = nom;
        this.prenom = prenom;
        this.force = Math.floor(Math.random()*(Hero.maxForce-Hero.minForce)+Hero.minForce);
        this.degats = Hero.degatsBase*this.force;
        this.defense = Math.floor(Math.random()*(Hero.maxDef-Hero.minDef)+Hero.minDef);
        this.pv = 100;
        this.sacPotions = sacPotions;
        this.sacArmes = sacArmes;
    };

    get nom() {
        return this.#nom;
    };
    set nom(nvNom) {
        if (isNaN(nvNom)) {
            this.#nom = nvNom;
        } else {
            return "Il faut une chaîne de caractères.";
        }
    };

    get prenom() {
        return this.#prenom;
    };
    set prenom(nvPrenom) {
        if (isNaN(nvPrenom)) {
            this.#prenom = nvPrenom;
        } else {
            return "Il faut une chaîne de caractères.";
        }
    };

    get force() {
        return this.#force;
    };
    set force(nvForce) {
        if (!isNaN(nvForce) && nvForce>=3 && nvForce<=10) {
            this.#force = nvForce;
        } else {
            return "Il faut un nombre compris entre 3 et 10 inclus.";
        }
    };

    get degats() {
        return this.#degats;
    };
    set degats(nvDegats) {
        if (!isNaN(nvDegats)) {
            this.#degats = nvDegats;
        } else {
            return "Il faut un nombre.";
        }
    };

    get defense() {
        return this.#defense;
    };
    set defense(nvDefense) {
        if (!isNaN(nvDefense) && nvDefense>=1 && nvDefense<=5) {
            this.#defense = nvDefense;
        } else {
            return "Il faut un nombre compris entre 1 et 5 inclus.";
        }
    };

    get pv() {
        return this.#pv;
    };
    set pv(nvPV) {
        if (!isNaN(nvPV)) {
            this.#pv = nvPV;
        } else {
            return "Il faut un nombre";
        }
    };

    get sacPotions() {
        return this.#sacPotions;
    };
    set sacPotions(nvSacPotions) {
        if (Array.isArray(nvSacPotions) && nvSacPotions.length<=10) {
            this.#sacPotions = nvSacPotions;
        } else {
            return "Le sac de potions doit être un tableau de maximum 10 potions."
        }
    };

    get sacArmes() {
        return this.#sacArmes;
    };
    set sacArmes(nvSacArsacArmes) {
        if (Array.isArray(nvSacArsacArmes) && nvSacArsacArmes.length<=4) {
            this.#sacArmes = nvSacArsacArmes;
        } else {
            return "Le sac d'armes doit être un tableau de maximum 4 armes ."
        }
    };

    // Attaque du héros qui récupère un équipement si le monstre tué en a laissé un
    attaquer(cible) {
        if (this.degats-cible.defense > 0) {
            cible.pv -= this.degats - cible.defense;
        }
        if (cible.pv <= 0) {
            cible.pv = 0;
            return true;
        }
    };

    // Récupération d'un équipement "arme" ou "potion" si possible
    recupEquipement(equipement) {
        if (equipement=="potion") {
            if (this.sacPotions.length<10) {
                this.sacPotions.push(equipement);
            } else {
                return "Votre sac de potions est plein, vous ne pouvez rien y ajouter."
            }
        } else if(equipement=="arme"){
            if (this.sacArmes.length<4) {
                this.sacArmes.push(equipement);
                this.degats += 4;
            } else {
                return "Votre sac d'armes est plein, vous ne pouvez rien y ajouter."
            }
        }
    };

    // Utilisation d'une potion pour gain de PV (+10)
    potionPV() {
        if (this.sacPotions.length>0) {
            this.sacPotions.pop();
            if (this.pv+10>Hero.maxPV) {
                this.pv = Hero.maxPV;
            } else {
                this.pv += 10;
            }
        }
    }
};