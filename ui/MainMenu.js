import { Gamepads } from "../input/Gamepads.js";
import { Globals } from "../utils/Globals.js";
import { SceneManeger } from "../utils/SceneManeger.js";
import { SceneType } from "../utils/SceneType.js";

export class MainMenu {

    constructor(x, y) {

        this.x = x
        this.y = y

        this.currentOption = 0

        this.player = new Font("assets/font/04B_30__.ttf");
        this.playerIA = new Font("assets/font/04B_30__.ttf");
        this.options = new Font("assets/font/04B_30__.ttf");
        this.arrow = new Font("assets/font/04B_30__.ttf");
        this.arrowX = this.x - this.arrow.getTextSize("->").width - 10
        this.arrowY = this.y

        this.changeScale()   

    }

    update() {

        const analog = Gamepads.first.getPadAnalog().left

        if (Gamepads.first.pad.justPressed(Pads.UP) || analog.y < -125)
            this.selectOption(-1)

        if (Gamepads.first.pad.justPressed(Pads.DOWN) || analog.y > 125)
            this.selectOption(1)

        if (Gamepads.first.pad.justPressed(Pads.CROSS))
            this.acceptOption()

    }

    selectOption(op) {

        const newCurrent = this.currentOption + op

        if (newCurrent < 0 || newCurrent > 2)
            return

        this.currentOption = newCurrent

        if (this.currentOption == 0)
            this.arrowY = this.y

        if (this.currentOption == 1)
            this.arrowY = this.y * 1.2

        if (this.currentOption == 2)
            this.arrowY = this.y * 1.4

        this.changeScale()

    }

    changeScale() {

        this.player.scale = 1;
        this.playerIA.scale = 1;
        this.options.scale = 1;

        if (this.currentOption == 0)
            this.player.scale = 1.1;

        if (this.currentOption == 1)
            this.playerIA.scale = 1.1;

        if (this.currentOption == 2)
            this.options.scale = 1.1;

    }

    acceptOption() {

        if (this.currentOption != 2) {

            Globals.values.set("boote", this.currentOption == 1);
            
            SceneManeger.changeScene(SceneType.SKILL_SELECT1);

            return

        }

    }

    render() {

        this.arrow.print(this.arrowX, this.arrowY, "->")
        this.player.print(this.x, this.y, "PLAYER vs PLAYER");
        this.playerIA.print(this.x, this.y * 1.2, "PLAYER vs AI");
        this.options.print(this.x, this.y * 1.4, "OPTIONS");

    }

}