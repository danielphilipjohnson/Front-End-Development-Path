# 1. Parcel Module Loader
Whats included
- Processing typescript
- Processing Js
- Processing SASS
- CSS autoprefixer
- posthtml-img-autosize 

## Getting started

```
yarn install


```

### Development

```
parcel index.html
yarn dev
```

Files appear in /dist folder

### Production

```
parcel build index.html
yarn build
```
Files appear in /dist folder

The minifiers used by Parcel are uglify-es for JavaScript, cssnano for CSS, and htmlnano for HTML.