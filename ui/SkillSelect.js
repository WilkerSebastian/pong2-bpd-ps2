import { Colors } from "../utils/Colors.js";
import { Gamepads } from "../input/Gamepads.js";

export class SkillSelect {

    constructor(x, y) {

        this.x = x
        this.y = y

        this.title = new Font("assets/font/Decterm.ttf");

        this.currentOption = 0

        this.image = new Image("assets/img/skill_icons.png", VRAM);

    }


    cardSkill(index) {

        const xi = this.x + (index * 150)

        Draw.rect(xi, this.y, 128, 170, this.currentOption == index ? Colors.BLUE_OCEAN : Colors.WHITE);
        Draw.rect(xi + 4, this.y + 4, 120, 162, Colors.BLACK);

        this.image.startx = index * 32
        this.image.endx = (index * 32) + 32
        this.image.width = 128
        this.image.height = 128
        this.image.draw(xi, this.y)

        this.cardTitle(xi, index)

    }

    cardTitle(x,index) {

        if (index == 0) {

            this.title.print(x + 10, this.y + 128,"BREAK TIME")

        } else if (index == 1) {

            this.title.print(x + 45, this.y + 128,"ZAAS")

        } else if (index == 2) {

            this.title.print(x + 16, this.y + 128,"BIG STICK")

        } else if (index == 3) {

            this.title.print(x + 32, this.y + 120,"VECTOR")
            this.title.print(x + 25, this.y + 140,"FREEDOM")

        }

    }

    changeOption(value) {

        if (this.currentOption + value < 0 || this.currentOption + value > 3)
            return

        this.currentOption += value

    }

    update() {

        const analog = Gamepads.first.getPadAnalog().left
        
        if (Gamepads.first.pad.justPressed(Pads.LEFT) || analog.x < -125)
            this.changeOption(-1)

        if (Gamepads.first.pad.justPressed(Pads.RIGHT) || analog.x > 125)
            this.changeOption(1)

    }

    render() {

        if (!this.image.ready())
            return

        for (let i = 0;i < 4;i++)
            this.cardSkill(i)

    }

}