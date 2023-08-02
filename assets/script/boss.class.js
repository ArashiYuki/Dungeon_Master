import { Monstre } from "./monstre.class.js";

let target = document.querySelector("#background");

export class Boss extends Monstre{
    static linkToImg = "assets/img/";
    static variousColor = ["1", "2", "3"];
    static dropMax = 5;
    static myImg = document.createElement('img');
    #maxPV = 30;  

    constructor(){
        super('Boss', 10, 10, 30, null, target);
        this.image = Boss.linkToImg+"boss-"+Boss.variousColor[Math.round(Math.random()*2)]+".png";
    }

    get maxPV() {
        return this.#maxPV;
    };
    set maxPV(nvMaxPV) {
        this.#maxPV = nvMaxPV;
    }

    // Méthode d'ajout dans le dom
    ajoutDOM(){
        Boss.myImg.id = "boss"+this.image[16];
        Boss.myImg.src = this.image;
        target.appendChild(Boss.myImg);
    };

    // Méthode de suppression du dom
    suppDOM(){
        this.target.removeChild(Boss.myImg);
    };


    // le boss lâche une potion ou une arme 
    loot() {
        let aleaDrop=Math.floor(Math.random()*(Boss.dropMax-1)+1);
        if (aleaDrop!=1){
            let aleaEquipement = Math.floor(Math.random()*5);
            let equipement;
            if(aleaEquipement==1 || aleaEquipement==2 || aleaEquipement==3){
                equipement='arme';
            }else{
                equipement='potion'
            }
            console.log(`Le boss a drop un ${equipement}.`);
            return equipement;
        }
    };

}