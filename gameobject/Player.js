import { Colors } from "../utils/Colors.js";
import { Gamepads } from "../input/Gamepads.js";
import { sizeScreen } from "../utils/sizeScreen.js";
import { GameObjects } from "./GameObjects.js";

export class Player {

    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 75;
        this.id = id
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

        const analog = this.id == 0 ? Gamepads.first.getPadAnalog().left : Gamepads.second.getPadAnalog().left;
       
        if(analog.y  != 0) {

            vec.y += this.speed * (analog.y / (analog.y > 0 ? 128 : 127));

        }

        if (vec.y < 10 || vec.y + this.height > sizeScreen.height - 10)
            return
            
        this.y = vec.y

    }

    render() {

        Draw.rect(this.x, this.y, this.width, this.height, Colors.WHITE);

    }

}