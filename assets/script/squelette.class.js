import { Monstre } from "./monstre.class.js";

let target = document.querySelector("#background");

export class Squelette extends Monstre{
    static linkToImg = "./assets/img/";
    static variousColor = ["green", "red", "white"];
    static dropMax= 5;
    static myImg = document.createElement('img');
    #maxPV = 20;

    constructor(){
        super('Squelette', 4, 5, 20, null, target)
        this.image = Squelette.linkToImg+"skeleton."+Squelette.variousColor[Math.round(Math.random()*2)]+".png";
    }

    get maxPV() {
        return this.#maxPV;
    };
    set maxPV(nvMaxPV) {
        this.#maxPV = nvMaxPV;
    }

    // Méthode d'ajout dans le dom
    ajoutDOM(){
        Squelette.myImg.className = "skeleton";
        Squelette.myImg.src = this.image;
        target.appendChild(Squelette.myImg);
    };

    // Méthode de suppression du dom
    suppDOM(){
        this.target.removeChild(Squelette.myImg);
    };


    // le squelette lâche une potion ou une arme
    loot() {
        let aleaDrop = Math.floor(Math.random()*(Squelette.dropMax-1)+1);
        if (aleaDrop in [1,2,3]){
            let aleaEquipement = Math.floor(Math.random()*5);
            let equipement;
            if(aleaEquipement==1 || aleaEquipement==2){
                equipement='arme';
            }else{
                equipement='potion'
            }
            console.log(`Le squelette a drop un ${equipement}.`);
            return equipement;
        }
    };
}