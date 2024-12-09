import { GameObjects } from "./GameObjects.js";
import { Identifier } from "./Identifier.js";
import { Player } from "./Player.js";
import { SkillType } from "./SkilType.js";
import { ScreenSize } from "../utils/ScreenSize.js";

export class Boote extends Player {

    constructor(x, y, id) {
    
        super(x, y, id);
        this.timeDecision = 0
        this.direction = 0
    
        this.skill.type = SkillType.BIG_STICK;

    }

    update() {

        this.timeDecision++

        if (this.timeDecision >= 250) {

            const correct = Math.floor(Math.random() * 100) % 2 == 0

            const ball = GameObjects.findById(Identifier.BALL);

            if (correct) {

                if (this.skill.getPorcentSkill() == 1)
                    this.skill.use() 

                if (Math.floor(Math.random() * 100) % 8 == 0) {

                    this.direction = Math.floor(Math.random() * 100) % 5 ? 1 : -1                   

                } else {

                    if (this.y > ball.y)
                        this.direction = -1
                    
                    else if (this.y < ball.y)
                        this.direction = 1

                    else
                        this.direction = 0

                }   

            }

            this.timeDecision = 0

        }

        const vecy = this.y + (this.direction * this.speed)

        if (!(vecy < 10 || vecy + this.height > ScreenSize.height - 10))
            this.y = vecy

        this.skill.addTime(0.35)

    }

    move() {
    }

}