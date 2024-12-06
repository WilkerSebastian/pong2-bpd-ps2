import { Colors } from "./utils/Colors.js";
import { sizeScreen } from "./utils/sizeScreen.js";
import { Player } from "./gameobject/Player.js";
import { Gamepads } from "./input/Gamepads.js";
import { Ball } from "./gameobject/Ball.js";
import { GameObjects } from "./gameobject/GameObjects.js";
import { ScoreBoard } from "./ui/ScoreBoard.js";

Screen.setVSync(false);
Screen.setFrameCounter(true);

let audio = Sound.load("assets/audio/retro_david.wav");

Sound.setVolume(85);
Sound.repeat(true)

Gamepads.init();

GameObjects.gameObjects = [new ScoreBoard()];

function gameScene() {

    GameObjects.gameObjects.push(
        new Player(70, sizeScreen.height / 2, 0),
        new Player(sizeScreen.width - 70, sizeScreen.height / 2, 1),
    )

    GameObjects.gameObjects.push(
        new Ball(),
    )

}

gameScene()

Screen.display(() => {

    if (!Sound.isPlaying())
        Sound.play(audio);

    Gamepads.update();

    for (let i = 0; i < GameObjects.gameObjects.length; i++) 
        GameObjects.gameObjects[i].update();

    Draw.rect(0, 0, sizeScreen.width, sizeScreen.height, Colors.WHITE)
    Draw.rect(10, 10, sizeScreen.width - 20, sizeScreen.height - 25, Colors.BLACK)

    for (let i = 0; i < GameObjects.gameObjects.length; i++) 
        GameObjects.gameObjects[i].render();

    if (GameObjects.gameObjects.length == 3) {
        
        GameObjects.destroy(0)
        GameObjects.destroy(1)
        gameScene()

    }

});