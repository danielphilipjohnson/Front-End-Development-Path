# 2. Webpack Module Loader

Whats included
- Uses NPM and Express
- webpack-cli and webpack
- webpack-dev-server
  - asset-management (CSS, SASS, PNG|JPG|GIF, JS)
    - Processing js files
    - Uglify JS
    - Processing Images with img-loader and ImageminPlugin
    - Processing CSS, SASS with node sass, sass loader and style loader
    - Combines CSS files with extract text webpack
    - CSS autoprefixer
    - posthtml-img-autosize 

## Getting started

```
npm install / npm i
```

### Development

```
change
  {
    mode: 'development',
  }
```
#### Build project

```
npm run build
```

#### Start project
```
npm run start
```
#### Start Server
```
npm run server
```

Files appear in /dist folder

### Production

```
change
  {
    mode: 'production',
  }
```
#### Build project
```
npm run build
```

#### Start project
```
npm run start
```
#### Start Server
```
npm run server
```

Files appear in /dist folder

## TODO

-   Work on adding more plugins         [https://github.com/webpack/webpack/tree/master/examples]
-   Do Hot Module Replacement
