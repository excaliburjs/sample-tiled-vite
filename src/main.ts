import * as ex from 'excalibur';
import { Resources, loader } from './resources';
import { Player } from './player';

const game = new ex.Engine({
    width: 800,
    height: 600,
    canvasElementId: 'game',
    pixelArt: true,
    pixelRatio: 2
});

game.start(loader).then(() => {
    Resources.TiledMap.addToScene(game.currentScene);
});