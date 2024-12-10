import { Colors } from "./Colors.js";

export class MainTitle {

    constructor(x,y) {

        this.x = x;
        this.y = y;

        this.title = new Font("assets/font/Maze.ttf");

        this.subTitle = new Font("assets/font/Maze.ttf");

        this.edition = new Font("assets/font/Evil Empire.otf");
        this.edition.color = Colors.GOLD
        this.first = true

    }


    update() {

    }

    render() {

        if (this.first) {
        
            this.title.scale = 5
            this.subTitle.scale = 2.5
            this.edition.scale = 2
            
            this.first = false

        }

        
        this.title.print(this.x, this.y, "PONG 2");

        this.subTitle.print(this.x / 2, this.y  * 2, "BOLADO PRA DEDEL");
    
        this.edition.print(this.x * 1.5, this.y * 3, "PS2 EDITION");

    }

}