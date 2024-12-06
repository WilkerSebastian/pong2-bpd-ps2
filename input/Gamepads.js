import { Gamepad } from "./Gamepad.js"

export class Gamepads {

    static first = null
    static second = null

    static init() {

        this.first = new Gamepad(0);
        this.second = new Gamepad(1);

    }

    static update() {

        this.first.update();
        this.second.update();

    }

}