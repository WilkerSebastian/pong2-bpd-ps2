export class AudioManger {

    static bakcground1 = null
    static background2 = null

    static init() {

        this.bakcground1 = Sound.load("assets/audio/more_one_night.wav");
        this.background2 = Sound.load("assets/audio/reborn.wav");

        Sound.repeat(true)

    }

    static playBackground(first) {

        Sound.pause(first ? this.background2 : this.bakcground1);

        Sound.play(first ? this.bakcground1 : this.background2, first ? 0 : 1);

    }



}