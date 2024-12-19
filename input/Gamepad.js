export class Gamepad {

    pad = null

    constructor(padIndex) {

        if (Pads.getState(padIndex) != 0)
            this.pad = Pads.get(padIndex);

    }

    update() {

        if (this.pad)
            this.pad.update();

    }

    getPadPressed(padButton) {
        
        if (this.pad)
            if (this.pad.btns & padButton)
                return true;

        return false;

    }

    getPadAnalog() {

        if (!this.pad)
            return null
    
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