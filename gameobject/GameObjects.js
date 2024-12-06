export class GameObjects {

    static gameObjects = [];

    static destroy(id) {

        this.gameObjects = this.gameObjects.filter((gameObject) => gameObject.id !== id);

    }

    static findById(id) {

        return this.gameObjects.find((gameObject) => gameObject.id === id);

    }

}