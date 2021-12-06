# echecord

Node.js screen recording function using ffmpeg.

install echecord with `npm i paicord`

example

```js
const paicord = require("paicord")
//                    resolution | fps | video time | file name
paicord.screenRecord("1920x1080", 30, "00:00:10", "uwu.mp4")
```