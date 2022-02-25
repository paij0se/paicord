# paicord

Node.js screen recording function using ffmpeg.

install paicord with `npm i paicord`

**You need to have installed ffmpeg in your system**

example

```js
const paicord = require("paicord");
//                    resolution | fps | video time | file name
paicord.screenRecord("1366x768", "30", "10", "paicord" + Date.now() + ".mp4");
```
