# Excalibur Tiled Vite Sample

Play sample [here](https://excaliburjs.com/sample-tiled-vite)

![sample-animation](./sample.gif)

## Running locally

* Using [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
* Run the `npm install` to install dependencies
* Run the `npm run start` to run the development server to test out changes
   * [Webpack](https://webpack.js.org/) will build the [typescript](https://www.typescriptlang.org/) into javascript
   * [Webpack dev server](https://webpack.js.org/configuration/dev-server/) will host the script in a little server on http://localhost:9000/

## Building bundles

* Run `npm run start` to produce javascript bundles for debugging in the `dist/` folder
* Run `npm run build` to produce javascript bundles for production (minified) in the `dist/` folder