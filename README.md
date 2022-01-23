## Introduction
- This project is completed with [TheOdinProject's instructions](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page). 
- [Live Preview](https://talipakcelik.github.io/restaurant-page/)
- Read this and detailed walkthrough summary in [Turkish](https://github.com/talipakcelik/restaurant-page/blob/main/README.tr.md).
- **Note**: The following articles may contain spoilers about the content of the project.

## Key Point Summary
### webpack walkthrough 
- I created folders named `dist` and `src`
  - in `src` index.js, home.js, contact.js, menu.js was created. 
- in main folder (restaurant-page) `npm init y`
  - so `package.json` was created
- for dev dependecy `npm i -D webpack webpack-cli`
  - same as above `npm install webpack webpack-cli --save-dev`
  - with this `node_module` and `package-lock.json` was created in main folder. 
- `webpack.config.js` was created in main folder. 
  - inside of this, entry and output point were created. 
    -  `entry: { index: "./src/index.js", },`
    -  `output: { filename: "[name].bundle.js", path: path.resolve(__dirname, "dist"), }, `
       - also it may be `filename: "[name].[contenthash].js"`, for unique file name. 
    - also, `clean: true,` for to delete unnecessary files that will be created after each change.
- in `package.json`, and in this .json file, `"build": webpack` property is added in scripts property.
- `npm run build` and so, `index.bundle.js` was added inside of `dist` folder, automatically. 
- inside of `webpack.config.js` => HtmlWebpackPlugin.
  - `const HtmlWebpackPlugin = require("html-webpack-plugin");`
  - also inside of `webpack.config.js,` plugin array was created for name of html file and it's title. 
  - `npm run build`, then inside of `package.json` dependency for HtmlWebpackPlugin was created. 
- loader for css, inside of `webpack.config.js`
  -   `module: { rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],`
  - in CLI, `npm i -D style-loader css-loader`
  - again in CLI, `npm run build`
    - dependecy was added. 
- time to test. inside of `package.json`, `"dev": "webpack serve"` was added in scripts property.
  -  inside of `webpack.config.js` => `devtool: "inline-source-map", devServer: { static: path.resolve(__dirname, "dist"), port: 8080, open: true, hot: true, },` 
  -  `npm install webpack-dev-server --save-dev`
    -  for dependency.
  -  in CLI, `npm run dev`
    - because script named "dev"
- for images no need for script. it is built-in. 
  - just inside of `webpack.config.js` => `{ test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },`
