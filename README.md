# node-bing-image


# Install

```
$ npm i bing-image
```

# Usage

## Default
```js
const bing = require('bing-image');

const callbackFn = (err, url) {
    console.log(url);
};

bing.getPicUrl(callbackFn);
```

## Optionally
```js
const bing = require('bing-image');

const imageSize = {
    width: 1920,
    height: 1080
};

const callbackFn = (err, url) => {
    console.log(url);
};

bing.getPicUrl(callbackFn, imageSize);
```
