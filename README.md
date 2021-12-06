# echecord

Node.js screen recording function using ffmpeg.

install echecord with `npm i echecord`

example

```js
const echecord = require("echecord")
//                     resolution | fps | video time | file name
echecord.screenRecord("1920x1080", 30, "00:00:10", "uwu.mp4")
```