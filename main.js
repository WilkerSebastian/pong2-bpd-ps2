import { Colors } from "./utils/Colors.js";
import { ScreenSize } from "./utils/ScreenSize.js";
import { Gamepads } from "./input/Gamepads.js";
import { Ball } from "./gameobject/Ball.js";
import { GameObjects } from "./gameobject/GameObjects.js";
import { Identifier } from "./gameobject/Identifier.js";
import { GameState } from "./state/GameState.js";
import { SkillType } from "./gameobject/SkilType.js";
import { SceneManeger } from "./utils/SceneManeger.js";
import { SceneType } from "./utils/SceneType.js";
import { AudioManger } from "./utils/AudioManger.js";

const canvas = Screen.getMode();
canvas.zbuffering = true;
canvas.psmz = Z16S;

Screen.setMode(canvas);

ScreenSize.width = canvas.width;
ScreenSize.height = canvas.height;

Screen.setVSync(false);
Screen.setFrameCounter(true);

Gamepads.init();

AudioManger.init();

SceneManeger.changeScene(SceneType.MAIN_MENU);

const timer = Timer.new();

let delay_tick = 1000 / 20

Screen.display(() => {

    Gamepads.update();

    if (Timer.getTime(timer) >= delay_tick) {

        if (GameState.state == GameState.PLAYING) {

            for (let i = 0; i < GameObjects.gameObjects.length; i++) 
                GameObjects.gameObjects[i].update();

        } else if (GameState.state == GameState.TIME_STOP) {

            const p1 = GameObjects.findById(Identifier.PLAYER1)
            
            if (p1.skill.type == SkillType.BREAK_TIME) 
                p1.update();

            const p2 = GameObjects.findById(Identifier.PLAYER2)

            if (p2.skill.type == SkillType.BREAK_TIME)
                p2.update();

        }

        for (let i = 0; i < GameObjects.uiObjects.length; i++) 
            GameObjects.uiObjects[i].update();

        Timer.setTime(timer, 0);

    }

    if (SceneManeger.currentScene == SceneType.GAME) {

        Draw.rect(0, 0, ScreenSize.width, ScreenSize.height, Colors.WHITE)
        Draw.rect(10, 10, ScreenSize.width - 20, ScreenSize.height - 25, Colors.BLACK)

        if (!GameObjects.findById(Identifier.BALL)) {

            GameObjects.gameObjects.push(
                new Ball(),
            )
    
        }

    }

    for (let i = 0; i < GameObjects.gameObjects.length; i++) 
        GameObjects.gameObjects[i].render();

    for (let i = 0; i < GameObjects.uiObjects.length; i++) 
        GameObjects.uiObjects[i].render();

});