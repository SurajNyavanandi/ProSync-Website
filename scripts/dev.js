import { spawn } from "node:child_process";

// Colors for console prefixing
const COLOR_RESET = "\x1b[0m";
const COLOR_SERVER = "\x1b[36m"; // Cyan
const COLOR_CLIENT = "\x1b[35m"; // Magenta
const COLOR_SYSTEM = "\x1b[33m"; // Yellow

console.log(`${COLOR_SYSTEM}[prosync] Starting backend server and frontend client concurrently...${COLOR_RESET}\n`);

// Helper to stream stdout/stderr with clean prefixes
function streamWithPrefix(stream, prefix, color, isError = false) {
  let buffer = "";
  stream.on("data", (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split("\n");
    buffer = lines.pop(); // Retain remainder
    for (const line of lines) {
      if (line.trim().length > 0) {
        if (isError) {
          console.error(`${color}${prefix}${COLOR_RESET} ${line}`);
        } else {
          console.log(`${color}${prefix}${COLOR_RESET} ${line}`);
        }
      }
    }
  });

  stream.on("end", () => {
    if (buffer.trim().length > 0) {
      if (isError) {
        console.error(`${color}${prefix}${COLOR_RESET} ${buffer}`);
      } else {
        console.log(`${color}${prefix}${COLOR_RESET} ${buffer}`);
      }
    }
  });
}

// 1. Spawn Backend API Server (Node + Express)
const serverProcess = spawn(process.execPath, ["server/index.js"], {
  stdio: ["inherit", "pipe", "pipe"],
  env: { ...process.env },
});

streamWithPrefix(serverProcess.stdout, "[server]", COLOR_SERVER);
streamWithPrefix(serverProcess.stderr, "[server]", COLOR_SERVER, true);

// 2. Spawn Frontend Dev Server (Vite)
const isWindows = process.platform === "win32";
const npmCmd = isWindows ? "npm.cmd" : "npm";

const clientProcess = isWindows
  ? spawn(`${npmCmd} run dev`, {
      stdio: ["inherit", "pipe", "pipe"],
      env: { ...process.env },
      shell: true,
    })
  : spawn(npmCmd, ["run", "dev"], {
      stdio: ["inherit", "pipe", "pipe"],
      env: { ...process.env },
    });

streamWithPrefix(clientProcess.stdout, "[client]", COLOR_CLIENT);
streamWithPrefix(clientProcess.stderr, "[client]", COLOR_CLIENT, true);

// Clean up processes on termination
let isShuttingDown = false;
function shutdown() {
  if (isShuttingDown) return;
  isShuttingDown = true;
  console.log(`\n${COLOR_SYSTEM}[prosync] Stopping servers...${COLOR_RESET}`);

  const killChild = (child) => {
    if (!child || !child.pid) return;
    if (isWindows) {
      try {
        spawn("taskkill", ["/pid", child.pid.toString(), "/t", "/f"]);
      } catch {
        child.kill();
      }
    } else {
      child.kill("SIGTERM");
    }
  };

  killChild(serverProcess);
  killChild(clientProcess);

  setTimeout(() => {
    process.exit(0);
  }, 500);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
process.on("exit", shutdown);

serverProcess.on("exit", (code) => {
  if (!isShuttingDown && code !== 0 && code !== null) {
    console.error(`${COLOR_SERVER}[server] Exited with code ${code}${COLOR_RESET}`);
  }
});

clientProcess.on("exit", (code) => {
  if (!isShuttingDown && code !== 0 && code !== null) {
    console.error(`${COLOR_CLIENT}[client] Exited with code ${code}${COLOR_RESET}`);
  }
});
