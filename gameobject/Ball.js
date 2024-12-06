import { sizeScreen } from "../utils/sizeScreen.js"
import { Colors } from "../utils/Colors.js"
import { GameObjects } from "./GameObjects.js"

export class Ball {

    constructor() {
        this.x = sizeScreen.width / 2
        this.y = sizeScreen.height / 2
        this.width = 15
        this.height = 15
        this.baseSpeed = sizeScreen.height / 3000;
        this.speed = this.baseSpeed
        this.ref1 = GameObjects.findById(0)
        this.ref2 = GameObjects.findById(1)
        this.id = 2
        this.direction = {
            x: Math.round(Math.random() * 100) % 2 == 0 ? 1 : -1,
            y: Math.round(Math.random() * 100) % 2 == 0 ? 1 : -1,
        }
    }

    update() {

        let vec = this.move();

        vec = this.playerCollision(vec, 0);

        vec = this.playerCollision(vec, 1);

        if (vec.y < 10 || vec.y + this.height > sizeScreen.height - 25) {
            
            this.direction.y *= -1;

            vec = this.move();

        }

        if (vec.x < 10 || vec.x + this.width > sizeScreen.width - 10) {
            
            if (vec.x < 10)
                GameObjects.findById(3).score1 += 1;

            if (vec.x + this.width > sizeScreen.width - 10)
                GameObjects.findById(3).score2 += 1;

            GameObjects.destroy(this.id)
            return

        }
        
        this.x = vec.x
        this.y = vec.y
            
        
    }

    playerCollision(vec, id) {

        const {x, y, width, height} = id == 0 ? this.ref1 : this.ref2;

        if (vec.x < x + width && vec.x + this.width > x && vec.y < y + height && vec.y + this.height > y) {

            if (vec.x < x + width && vec.x + this.width > x)
                this.direction.y *= -1;

            if (vec.y < y + height && vec.y + this.height > y)
                this.direction.x *= -1;

            return this.move();

        }

        return vec

    }

    move() {

        return {
            x: this.x + (this.speed * this.direction.x),
            y: this.y + (this.speed * this.direction.y)
        }

    }

    render() {

        Draw.rect(this.x, this.y, this.width, this.height, Colors.WHITE);

    }

}