var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js');
var APP_DIR = path.resolve(__dirname, '');

/*
  npm init // makes a package.json file

  npm i webpack -S // installs webpack
  // make a webpack.config.js file
  ./node_modules/.bin/webpack -d //runs webpack in developer mode and generates bundle.js
  npm i babel-loader babel-preset-es2015 babel-preset-react -S
  // make a .babelrc file
  {
  "presets" : ["es2015", "react"]
  }
  // now install react and react-dom
  npm i react react-dom -S
  // now add these files to the package.json so you don't have to run webpack -d every time.
  "dev": "webpack -d --watch",
  "build": "webpack -p",

  // now you just use npm run dev and it runs webpack in developer mode and uses watch to automatically build your files on changes.

*/


var config = {
    entry: APP_DIR + '/js/app.js',
    output: {
        path: BUILD_DIR,
        filename: '/bundle.js'
    },

    // Existing Code ....
    module: {
        loaders: [{
            test: /\.jsx?|\.html/,
            include: APP_DIR,
            loader: 'babel-loader'
        }]
    }

};

module.exports = config;
