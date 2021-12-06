const exec = require("child_process").exec;
export function screenRecord(
  video_size: string,
  video_fps: number,
  video_time: string,
  video_name: string
): void {
  switch (process.platform) {
    case "linux" || "darwin":
      const command: string = `ffmpeg -video_size ${video_size} -framerate ${video_fps} -f x11grab -i :1.0 -c:v libx264 -qp 0 -preset ultrafast -t ${video_time} ${video_name}`;

      exec(command, (error: string, stdout: string, stderr: string) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
    case "win32":
      const commandWindows: string = `ffmpeg -video_size ${video_size} -framerate ${video_fps} -f x11grab -i :0.0 -c:v libx264 -qp 0 -preset ultrafast -t ${video_time} ${video_name}`;
      exec(commandWindows, (error: string, stdout: string, stderr: string) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
  }
}
