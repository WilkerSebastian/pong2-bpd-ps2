export class Gamepad {

    constructor(padIndex) {
        this.pad = Pads.get(padIndex);
    }

    update() {

        this.pad.update();

    }

    getPadPressed(padButton) {
        
        if (this.pad)
            if (this.pad.btns & padButton)
                return true;

        return false;

    }

    getPadAnalog() {
    
        return {
            left: {
                x: this.pad.lx,
                y: this.pad.ly
            },
            right: {
                x: this.pad.rx,
                y: this.pad.ry
            }
        }
        
    }

}