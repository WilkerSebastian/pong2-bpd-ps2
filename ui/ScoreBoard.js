import { Identifier } from "../gameobject/Identifier.js";
import { ScreenSize } from "../utils/ScreenSize.js";

export class ScoreBoard {

    constructor() {

        this.font = new Font("assets/font/04B_30__.TTF");
        this.x = ScreenSize.width / 2.5;
        this.y = 20
        this.id = Identifier.SCOREBOARD
        this.score1 = 0;
        this.score2 = 0;

    }

    update() {



    }

    render() {

        this.font.print(this.x, this.y, `${this.score1.toString().padStart(2, "0")} X ${this.score2.toString().padStart(2, "0")}`);

    }

}