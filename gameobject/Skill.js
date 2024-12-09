import { SkillType } from "./SkilType.js"
import { Identifier } from "./Identifier.js"
import { GameState } from "../state/GameState.js"
import { GameObjects } from "./GameObjects.js"
import { ScreenSize } from "../utils/ScreenSize.js"

export class Skill {

    constructor(type, reference) {

        this.type = type
        this.player = reference
        this.MAX_TIME_SKILL = this.getMaxTime()
        this.time_load = 0
        this.used = false

    }

    use() {

        if (this.used || this.time_load != this.MAX_TIME_SKILL)
            return

        switch (this.type) {
            case SkillType.BREAK_TIME:
                
                this.break_time()
                break;
            case SkillType.ZAAS:
                
                this.zaas()
                break;
            case SkillType.BIG_STICK:
                this.big_stick()

                break;
             case SkillType.VECTOR_FREEDOM:
                this.vector_freedom()

                break;
        }

        this.used = true

    }

    break_time() {

        GameState.state = GameState.TIME_STOP

        os.setTimeout(() => {
            
            GameState.state = GameState.PLAYING
            this.time_load = 0
            this.used = false
            
        }, 2000)

    }

    zaas() {

        const ball = GameObjects.findById(Identifier.BALL)

        const boost = 1.75

        this.player.speed *= boost
        ball.speed *= boost

        os.setTimeout(() => {

            this.player.speed /= boost
            ball.speed /= boost
            this.time_load = 0
            this.used = false

        }, 7500)

    }

    big_stick() {

        if (this.player.y + this.player.height * 2 > ScreenSize.height - 10)
            this.player.y -= this.player.height;

        this.player.height *= 2

        this.player.speed /= 1.1

        os.setTimeout(() => {
            
            this.player.height /= 2
            this.player.speed *= 1.1
            this.time_load = 0
            this.used = false
            
        }, 10000)

    }

    vector_freedom() {

        this.player.horizontal_move = true

        os.setTimeout(() => {
            
            this.player.horizontal_move = false
            this.time_load = 0
            this.used = false
            this.player.reset()
            
        }, 7000)

    }

    addTime(time) {

        if (this.time_load + time > this.MAX_TIME_SKILL) {

            this.time_load = this.MAX_TIME_SKILL
            return
        
        }

        this.time_load += time

    }

    getPorcentSkill() {

        return this.time_load / this.MAX_TIME_SKILL

    }

    getMaxTime() {

        switch (this.type) {
            case SkillType.BREAK_TIME:
                return 8000

            case SkillType.ZAAS:
                return 10000    
            
            case SkillType.BIG_STICK:
                return 6000

             case SkillType.VECTOR_FREEDOM:
                return 10000
        }

    }

}