import { Colors } from "./utils/Colors.js";
import { sizeScreen } from "./utils/sizeScreen.js";
import { Player } from "./gameobject/Player.js";
import { Gamepads } from "./input/Gamepads.js";
import { Ball } from "./gameobject/Ball.js";
import { GameObjects } from "./gameobject/GameObjects.js";

Screen.setVSync(false);
Screen.setFrameCounter(true);

Gamepads.init();

GameObjects.gameObjects = [
    new Player(50, 50),
]

GameObjects.gameObjects.push(
    new Ball(),
)

Screen.display(() => {

    Gamepads.update();

    for (let i = 0; i < GameObjects.gameObjects.length; i++) 
        GameObjects.gameObjects[i].update();

    Draw.rect(0, 0, sizeScreen.width, sizeScreen.height, Colors.WHITE)
    Draw.rect(10, 10, sizeScreen.width - 20, sizeScreen.height - 25, Colors.BLACK)

    for (let i = 0; i < GameObjects.gameObjects.length; i++) 
        GameObjects.gameObjects[i].render();

});