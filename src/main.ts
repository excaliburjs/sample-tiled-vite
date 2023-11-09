import * as ex from 'excalibur';
import { Resources, loader } from './resources';
import { Player } from './player';

const game = new ex.Engine({
    width: 800,
    height: 600,
    canvasElementId: 'game',
    antialiasing: false
});

game.start(loader).then(() => {
    const objects = Resources.TiledMap.data.getObjectLayerByName("Objects");
    const camera = objects.getObjectByName("Camera");
    if (camera) {
        game.currentScene.camera.pos = ex.vec(camera.x, camera.y);
        game.currentScene.camera.zoom = camera.getProperty<number>('zoom')?.value ?? 1.0;
    }

    const player = objects.getObjectByName("Player");
    if (player) {
        const playerActor = new Player(ex.vec(player.x, player.y));
        game.currentScene.add(playerActor);
        playerActor.z = 100;
    }
    Resources.TiledMap.addTiledMapToScene(game.currentScene);
});