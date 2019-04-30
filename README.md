# My-Resume

[![Greenkeeper badge](https://badges.greenkeeper.io/wbkd/webpack-starter.svg)](https://greenkeeper.io/)

Project created to expose my professional experience.


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
* [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
* [BEM](http://getbem.com/naming/) (css pattern) 

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
