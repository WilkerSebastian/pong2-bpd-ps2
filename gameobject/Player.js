import { Colors } from "../utils/Colors.js";
import { Gamepads } from "../input/Gamepads.js";
import { sizeScreen } from "../utils/sizeScreen.js";
import { GameObjects } from "./GameObjects.js";

export class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 75;
        this.id = GameObjects.findById(0) ? 1 : 0
        this.baseSpeed = sizeScreen.height / 3000;
        this.speed = this.baseSpeed
    }

    update() {

        this.move()

    }

    move() {

        const vec = {
            x: this.x,
            y: this.y
        }
       
        if(Gamepads.first.getPadAnalog().left.y  != 0) {

            vec.y += this.speed * (Gamepads.first.getPadAnalog().left.y / (Gamepads.first.getPadAnalog().left.y > 0 ? 128 : 127));

        }

        if (vec.y < 10 || vec.y + this.height > sizeScreen.height - 10)
            return
            
        this.y = vec.y

    }

    render() {

        Draw.rect(this.x, this.y, this.width, this.height, Colors.WHITE);

    }

}