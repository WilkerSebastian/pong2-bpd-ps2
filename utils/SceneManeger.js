import { SceneType } from "./SceneType.js"
import { GameObjects } from "../gameobject/GameObjects.js"
import { Player } from "../gameobject/Player.js"
import { Boote } from "../gameobject/Boote.js"
import { Ball } from "../gameobject/Ball.js"
import { ScoreBoard } from "../ui/ScoreBoard.js"
import { SkillBar } from "../ui/SkillBar.js"
import { ScreenSize } from "./ScreenSize.js"
import { Identifier } from "../gameobject/Identifier.js"
import { MainTitle } from "../ui/MainTitle.js"
import { MainMenu } from "../ui/MainMenu.js"
import { SkillSelect } from "../ui/SkillSelect.js"
import { Globals } from "./Globals.js"

export class SceneManeger {

    static currentScene = null
    static audio = null

    static changeScene(scene) {

        if (this.audio != null)
            Sound.free(audio);

        Sound.repeat(false)

        GameObjects.gameObjects = [];
        GameObjects.uiObjects = [];

        if (scene == SceneType.MAIN_MENU)
            this.mainMenuScene();

        else if (scene == SceneType.GAME)
            this.gameScene();

        else if (scene == SceneType.SKILL_SELECT1)
            this.SkillSelectScene();

        else if (scene == SceneType.SKILL_SELECT2)
            this.SkillSelectScene(false);

    }

    static SkillSelectScene(first = true) {

        this.currentScene = first ? SceneType.SKILL_SELECT1 : SceneType.SKILL_SELECT2

        GameObjects.uiObjects.push(
            new SkillSelect(10, 25)
        );

    }

    static mainMenuScene() {

        this.currentScene = SceneType.MAIN_MENU

        GameObjects.uiObjects.push(
            new MainTitle(ScreenSize.width / 4.5, 75),
            new MainMenu(ScreenSize.width / 4.5, ScreenSize.height / 1.75)
        );

    }

    static gameScene() {

        this.currentScene = SceneType.GAME

        this.audio = Sound.load("assets/audio/retro_david.wav");
        Sound.repeat(true)

        GameObjects.uiObjects.push(
            new ScoreBoard()
        );
    
        GameObjects.gameObjects.push(
            new Player(70, ScreenSize.height / 2, Identifier.PLAYER1),
            Globals.values.get("boote") ?
            new Boote(ScreenSize.width - 70, ScreenSize.height / 2, Identifier.PLAYER2) :
            new Player(ScreenSize.width - 70, ScreenSize.height / 2, Identifier.PLAYER2)
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