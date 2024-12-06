import { sizeScreen } from "../utils/sizeScreen.js";

export class ScoreBoard {

    constructor() {

        this.x = (sizeScreen.width / 2) - 35;
        this.y = 20
        this.id = 3
        this.score1 = 0;
        this.score2 = 0;
        this.font = new Font("assets/font/04B_30__.TTF");

    }

    update() {



    }

    render() {

        this.font.print(this.x, this.y, `${this.score1} | ${this.score2}`);

    }

}