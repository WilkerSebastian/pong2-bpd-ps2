import { Identifier } from "../gameobject/Identifier.js";
import { Colors } from "../utils/Colors.js";
import { ScreenSize } from "../utils/ScreenSize.js";
import { GameObjects } from "../gameobject/GameObjects.js";

export class SkillBar {

    constructor(id) {

        this.y = 10;
        this.width = ScreenSize.width / 4;
        this.x = id == Identifier.PLAYER1 ? 10 : ScreenSize.width - (this.width + 10);
        this.height = 25;
        this.id = id == Identifier.PLAYER1 ? Identifier.SKILLBAR1 : Identifier.SKILLBAR2
        this.reference = GameObjects.findById(id);

    }

    update() {

    }

    render() {

        Draw.rect(this.x, this.y, this.width, this.height, Colors.DARK_GRAY);

        if (this.reference.skill.used)
            Draw.rect(
            this.x, 
            this.y, 
            this.width, 
            this.height, 
            Math.floor(Math.random() * 100) % 2 == 0 ? Colors.LIGHT_YELLOW : Colors.GOLD);

        else 
            Draw.rect(
            this.id == Identifier.SKILLBAR1 ? this.x : (this.x + this.width) - (this.width * this.reference.skill.getPorcentSkill()), 
            this.y, this.width * this.reference.skill.getPorcentSkill(), 
            this.height, 
            Colors.GOLD);

    }

}