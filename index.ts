import index from "./src/index.html";

const server = Bun.serve({ port: 5173, routes: { "/": index } });

console.log(`Listening on: http://localhost:${server.port}`);
