import { Monstre } from "./monstre.class.js";

let target = document.querySelector("#background");

export class Spider extends Monstre {
    static linkToImg = "assets/img/";
    static variousColor = ["black", 'blue', 'gold'];
    static dropMax = 7;
    static myImg = document.createElement('img');
    #maxPV = 10;

    constructor(){
        super('Arraignée', 2, 2, 10, null, target)
        this.image = Spider.linkToImg+"spider."+Spider.variousColor[Math.round(Math.random()*2)]+".png";
    }

    get maxPV() {
        return this.#maxPV;
    };
    set maxPV(nvMaxPV) {
        this.#maxPV = nvMaxPV;
    }

    // Méthode d'ajout dans le dom
    ajoutDOM(){
        Spider.myImg.className = "spider";
        Spider.myImg.src = this.image;
        target.appendChild(Spider.myImg);
    };

    // Méthode de suppression du dom
    suppDOM(){
        this.target.removeChild(Spider.myImg);
    };

    // L'arraignée lâche une potion ou une arme
    loot(){
        let aleaDrop = Math.floor(Math.random()*(Spider.dropMax-1)+1);
        console.log(aleaDrop);
        if (aleaDrop==1) {
            let aleaEquipement = Math.floor(Math.random()*5);
            let equipement;
            if (aleaEquipement==1) {
                equipement = "arme";
            } else {
                equipement = "potion";
            }
            console.log(`L'araignée a drop une ${equipement}.`);
            return equipement;
        }
    };
}