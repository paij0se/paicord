const exec = require("child_process").exec;
export function screenRecord(
  video_size: string,
  video_fps: number,
  video_time: string,
  video_name: string
): void {
 console.log("recording...")
  switch (process.platform) {
    case "linux":
      const command: string = `ffmpeg -video_size ${video_size} -framerate ${video_fps} -f x11grab -i :1.0 -c:v libx264 -qp 0 -preset ultrafast -t ${video_time} ${video_name} -loglevel quiet`;
      exec(command, (error: string, stdout: string, stderr: string) => {
        console.log(`${stdout} ${stderr}`);
      });
    case "win32":
      const commandWindows: string = `ffmpeg -video_size ${video_size} -f gdigrab -framerate ${video_fps} -i desktop -t ${video_time} ${video_name} -loglevel quiet`;
      exec(commandWindows, (error: string, stdout: string, stderr: string) => {
        console.log(`${stdout} ${stderr}`);
      });
    case "darwin":
      const commandMac: string = `ffmpeg -video_size ${video_size} -framerate ${video_fps} -f x11grab -i :0.0 -c:v libx264 -qp 0 -preset ultrafast -t ${video_time} ${video_name} -loglevel quiet`;
      exec(commandMac, (error: string, stdout: string, stderr: string) => {
        console.log(`${stdout} ${stderr}`);
      });
  }
}
