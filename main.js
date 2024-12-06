import { Colors } from "./utils/Colors.js";
import { sizeScreen } from "./utils/sizeScreen.js";
import { Player } from "./gameobject/Player.js";
import { Gamepads } from "./input/Gamepads.js";

Screen.setVSync(false);
Screen.setFrameCounter(true);

const gameObjects = [
    new Player(50, 50),
]

Gamepads.init();

Screen.display(() => {

    Gamepads.update();

    for (let i = 0; i < gameObjects.length; i++) 
        gameObjects[i].update();

    Draw.rect(0, 0, sizeScreen.width, sizeScreen.height, Colors.WHITE)
    Draw.rect(10, 10, sizeScreen.width - 20, sizeScreen.height - 25, Colors.BLACK)

    for (let i = 0; i < gameObjects.length; i++) 
        gameObjects[i].render();

});