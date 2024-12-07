export class GameObjects {

    static gameObjects = [];
    static uiObjects = [];

    static destroy(id) {

        this.gameObjects = this.gameObjects.filter((gameObject) => gameObject.id !== id);

    }

    static findById(id) {

        return this.gameObjects.find((gameObject) => gameObject.id === id);

    }

    static destroyUI(id) {

        this.uiObjects = this.uiObjects.filter((gameObject) => gameObject.id !== id);

    }

    static findUIById(id) {

        return this.uiObjects.find((gameObject) => gameObject.id === id);

    }

}