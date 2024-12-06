import { Colors } from "../utils/Colors.js";

export class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
    }

    update() {


    }

    render() {

        Draw.rect(this.x, this.y, this.width, this.height, Colors.WHITE);

    }

}