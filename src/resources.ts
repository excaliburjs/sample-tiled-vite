import { ImageFiltering, ImageSource, Loadable, Loader, Resource, TileMap } from "excalibur";
import { TiledResource } from '@excaliburjs/plugin-tiled';

// Import paths to work with Vite
// Note the ?url suffix
import tilesetPath from '../res/iso-issue/iso.png?url';
import tmxPath from '../res/iso-issue/isotest.tmx?url';
import tsxPath from '../res/iso-issue/iso.tsx?url';
import { Player } from "./player";

export const Resources = {
    // HeroSpriteSheetPng: new ImageSource(heroPath, false, ImageFiltering.Pixel),
    TiledMap: new TiledResource(tmxPath, {
      entityClassNameFactories: {
        player: (props) => {
          const player = new Player(props.worldPos);
          player.z = 100;
          return player;
        }
      },
      // Path map intercepts and redirects to work around vite's static bundling
      pathMap: [
        { path: 'isotest.tmx', output: tmxPath },
        { path: 'iso.png', output: tilesetPath },
        { path: 'iso.tsx', output: tsxPath }
      ]
    }),
    TsxResource: new Resource(tsxPath, 'text')
}

export const loader = new Loader();
for (let resource of Object.values(Resources)) {
    loader.addResource(resource);
}