import { Colors } from "../utils/Colors.js";
import { Gamepads } from "../input/Gamepads.js";
import { ScreenSize } from "../utils/ScreenSize.js";
import { Skill } from "./Skill.js";
import { Identifier } from "./Identifier.js";
import { Globals } from "../utils/Globals.js";

export class Player {

    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.origin = { x: this.x, y: this.y };
        this.width = 20;
        this.height = 75;
        this.id = id
        this.baseSpeed = ScreenSize.height / 1000;
        this.speed = this.baseSpeed
        this.horizontal_move = false
        this.skill = new Skill(Globals.values.get(id == Identifier.PLAYER1 ? "skill1" : "skill2"), this)
    }

    update() {

        this.move()

        const pad = this.id == Identifier.PLAYER1 ? Gamepads.first : Gamepads.second

        if (pad.getPadPressed(Pads.L1) && pad.getPadPressed(Pads.R1)) {

            this.skill.use()

        }

        this.skill.addTime(0.85)

    }

    move() {

        const vec = {
            x: this.x,
            y: this.y
        }

        const analog = this.id == Identifier.PLAYER1 ? Gamepads.first.getPadAnalog().left : Gamepads.second.getPadAnalog().left;

        if(analog.y  != 0) {

            vec.y += this.speed * (analog.y / (analog.y > 0 ? 128 : 127));

        }

        if (analog.x != 0 && this.horizontal_move) {            

            vec.x += this.speed * (analog.x / (analog.x > 0 ? 128 : 127));

        }

        const horizontal_limit = this.id == Identifier.PLAYER1 ? vec.x < 10 || vec.x + this.width > ScreenSize.width / 2 : vec.x < ScreenSize.width / 2 || vec.x + this.width > ScreenSize.width - 10 
        const vertical_limit = this.id == Identifier.PLAYER1 ? vec.y < 10 || vec.y + this.height > ScreenSize.height - 10 : vec.y < 10 || vec.y + this.height > ScreenSize.height - 10

        if (horizontal_limit || vertical_limit)
            return
            
        this.y = vec.y
        this.x = vec.x

    }

    render() {

        Draw.rect(this.x, this.y, this.width, this.height, Colors.WHITE);

    }

    reset() {
        this.x = this.origin.x
        this.y = this.origin.y
    }

}