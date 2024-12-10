import { SceneType } from "./SceneType.js"
import { GameObjects } from "../gameobject/GameObjects.js"
import { Player } from "../gameobject/Player.js"
import { Boote } from "../gameobject/Boote.js"
import { Ball } from "../gameobject/Ball.js"
import { ScoreBoard } from "../ui/ScoreBoard.js"
import { SkillBar } from "../ui/SkillBar.js"
import { ScreenSize } from "./ScreenSize.js"
import { Identifier } from "../gameobject/Identifier.js"

export class SceneManeger {

    static currentScene = null
    static audio = null

    static changeScene(scene) {

        if (scene == SceneType.GAME)
            this.gameScene();

    }

    static gameScene() {

        this.currentScene = SceneType.GAME
    
        if (this.audio != null)
            Sound.free(audio);

        this.audio = Sound.load("assets/audio/retro_david.wav");

        GameObjects.uiObjects.push(
            new ScoreBoard()
        );
    
        GameObjects.gameObjects.push(
            new Player(70, ScreenSize.height / 2, Identifier.PLAYER1),
            new Boote(ScreenSize.width - 70, ScreenSize.height / 2, Identifier.PLAYER2)
        )
    
        GameObjects.uiObjects.push(
            new SkillBar(Identifier.PLAYER1),
            new SkillBar(Identifier.PLAYER2),
        )
    
        GameObjects.gameObjects.push(
            new Ball(),
        )
    
        Sound.play(this.audio);
    
    }

}