<div align="center">
    <h1>😻 » What is that? « 😽</h1>
    <p>This package for npm returns random animal images (cats, foxes etc.) from <a href="https://api.skiffybot.xyz" target="_blank">API</a>.</p>
    <img src="https://cdn.skiffybot.xyz/images/animals/cat/neva-masquerade-cats-1375033-min.jpg" alt="Random cat" height="290px">
</div>

## 😼 » Installation
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
| Function                                                                                                          | Usage                   | Description                   |
|-------------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------------|
| [cat](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L3)         | `<random>.cat()`        | Return random cats            |
| [dog](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L6)         | `<random>.dog()`        | Return random dogs            |
| [fox](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L10)        | `<random>.fox()`        | Return random foxes           |
| [fish](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L14)       | `<random>.fish()`       | Return random fishes          |
| [alpaca](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L18)     | `<random>.alpaca()`     | Return random alpacas         |
| [bird](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L22)       | `<random>.bird()`       | Return random bird            |
|                                                                                                                   |                         |                               |
| [version](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L22)    | `<random>.version()`    | Return version of this module |
| [apiVersion](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L22) | `<random>.apiVersion()` | Return API version            |
| [cdn](https://github.com/sefinek24/random-emoji/blob/ab58b364710a4c7106721808e81ccdc7590c4965/test.js#L22)        | `<random>.cdn()`        | CDN data                      |


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