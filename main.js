import { Colors } from "./utils/Colors.js";
import { sizeScreen } from "./utils/sizeScreen.js";
import { Player } from "./gameobject/Player.js";

const gameObjects = [
    new Player(50, 50),
]

os.setInterval(() => { 

    for (let i = 0; i < gameObjects.length; i++) 
        gameObjects[i].update();

    Screen.clear(); 

    Draw.rect(0, 0, sizeScreen.width, sizeScreen.height, Colors.WHITE)
    Draw.rect(10, 10, sizeScreen.width - 20, sizeScreen.height - 25, Colors.BLACK)

    for (let i = 0; i < gameObjects.length; i++) 
        gameObjects[i].render();
    
    Screen.flip(); 

}, 0);