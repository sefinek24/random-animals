<div align="center">
    <h1>😽 » What is that? « 🦊</h1>
    <p>This package for npm returns random images of animals (cats, foxes etc.) from the <a href="https://api.skiffybot.xyz" target="_blank">API</a>.</p>
    <img src="https://cdn.skiffybot.xyz/images/animals/cat/neva-masquerade-cats-1375033-min.jpg" alt="Random cat" height="300px">
</div>

## 📥 » Installation
> **$** npm install @sefinek/random-animals

## 🐈 » Usage
### • Async/await example
```js
const random = require('@sefinek/random-animals');

(async () => {
    const res = await random.cat();
    console.log(res.data.message);
})();
```

### • Promise example
```js
const random = require('@sefinek/random-animals');

random.fox().then(res => console.log(res.data.message));
```

## 😻 • Available functions
| Name                                                                                                                           | Usage                   | Description                                    |
|--------------------------------------------------------------------------------------------------------------------------------|-------------------------|------------------------------------------------|
| [cat](https://github.com/sefinek24/random-animals/blob/b90861890135165e6a53a48fd918fd97d043dde9/test/index.test.js#L4)         | `<random>.cat()`        | Return random cats                             |
| [dog](https://github.com/sefinek24/random-animals/blob/b90861890135165e6a53a48fd918fd97d043dde9/test/index.test.js#L9)         | `<random>.dog()`        | Return random dogs                             |
| [fox](https://github.com/sefinek24/random-animals/blob/b90861890135165e6a53a48fd918fd97d043dde9/test/index.test.js#L14)        | `<random>.fox()`        | Return random foxes                            |
| [fish](https://github.com/sefinek24/random-animals/blob/b90861890135165e6a53a48fd918fd97d043dde9/test/index.test.js#L19)       | `<random>.fish()`       | Return random fishes                           |
| [alpaca](https://github.com/sefinek24/random-animals/blob/b90861890135165e6a53a48fd918fd97d043dde9/test/index.test.js#L24)     | `<random>.alpaca()`     | Return random alpacas                          |
| [bird](https://github.com/sefinek24/random-animals/blob/b90861890135165e6a53a48fd918fd97d043dde9/test/index.test.js#L29)       | `<random>.bird()`       | Return random bird                             |
|                                                                                                                                |                         |                                                |
| [version](https://github.com/sefinek24/random-animals/blob/b90861890135165e6a53a48fd918fd97d043dde9/test/index.test.js#L35)    | `<random>.version()`    | Return version of this module                  |
| [apiVersion](https://github.com/sefinek24/random-animals/blob/b90861890135165e6a53a48fd918fd97d043dde9/test/index.test.js#L39) | `<random>.apiVersion()` | Return API version                             |
| [cdn](https://github.com/sefinek24/random-animals/blob/b90861890135165e6a53a48fd918fd97d043dde9/test/index.test.js#L45)        | `<random>.cdn()`        | Get data from [CDN](https://cdn.skiffybot.xyz) |


## 📃 Returned object
```json
{
  "success": true,
  "status": 200,
  "category": "animals",
  "endpoint": "cat",
  "message": "https://cdn.skiffybot.xyz/images/animals/cat/neva-masquerade-cats-1375033-min.jpg"
}
```

## 🤝 » Help
Open new [Issue](https://github.com/sefinek24/random-animals/issues/new) on GitHub.

## ⭐ » Thank you
Give a star if you can on [GitHub](https://github.com/sefinek24/random-animals) page.