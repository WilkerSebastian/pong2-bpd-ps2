import { Colors } from "./utils/Colors.js";
import { sizeScreen } from "./utils/sizeScreen.js";

os.setInterval(() => { 

    Screen.clear(); 

    Draw.rect(0, 0, sizeScreen.width, sizeScreen.height, Colors.WHITE)
    Draw.rect(10, 10, sizeScreen.width - 20, sizeScreen.height - 25, Colors.BLACK)
    
    Screen.flip(); 

}, 0);