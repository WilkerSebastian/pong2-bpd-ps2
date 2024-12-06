import { Colors } from "../utils/Colors.js";
import { Gamepads } from "../input/Gamepads.js";
import { sizeScreen } from "../utils/sizeScreen.js";

export class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
        this.baseSpeed = sizeScreen.height / 3000;
        this.speed = this.baseSpeed
    }

    update() {

        this.move()

    }

    move() {
       
        if(Gamepads.first.getPadAnalog().left.y  != 0) {

            this.y += this.speed * (Gamepads.first.getPadAnalog().left.y / (Gamepads.first.getPadAnalog().left.y > 0 ? 128 : 127));

        }

    }

    render() {

        Draw.rect(this.x, this.y, this.width, this.height, Colors.WHITE);

    }

}