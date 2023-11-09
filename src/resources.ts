import { ImageFiltering, ImageSource, Loadable, Loader, Resource, TileMap } from "excalibur";
import { TiledMapResource } from '@excaliburjs/plugin-tiled';

// Import paths to work with Vite
// Note the ?url suffix
import heroPath from '../img/Solaria Demo Pack Update 03/Solaria Demo Pack Update 03/16x16/Sprites/Hero 01.png?url';
import tilesetPath from '../img/Solaria Demo Pack Update 03/Solaria Demo Pack Update 03/16x16/Tilesets/Solaria Demo Update 01.png?url';
import tmxPath from '../res/first-level.tmx?url';
import tsxPath from '../res/tileset.tsx?url';
import tssxPath from '../res/tileset.tssx?url';

export const Resources = {
    HeroSpriteSheetPng: new ImageSource(heroPath, false, ImageFiltering.Pixel),
    TiledMap: new TiledMapResource(tmxPath),
    TsxResource: new Resource(tsxPath, 'text'),
    TssxResource: new Resource(tssxPath, 'text')
}

// Patch @excalibur/plugin-tile path resolution to work around Vite
const convertPath = Resources.TiledMap.convertPath;
Resources.TiledMap.convertPath = (originalPath, relativePath) => {
  if (relativePath.includes('.tmx')) {
    return tmxPath;
  }
  if (relativePath.includes('.tsx')) {
    return tsxPath;
  }
  if (relativePath.includes('.png')) {
    return tilesetPath;
  }
  return convertPath(originalPath, relativePath);
}

export const loader = new Loader();
for (let resource of Object.values(Resources)) {
    loader.addResource(resource);
}