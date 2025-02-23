import index from "./src/index.html";

const server = Bun.serve({
  port: 5173,
  routes: {
    "/": index,
    "/logo": async () =>
      new Response(await Bun.file("./public/logo-front-shadow.webp").bytes()),
  },
});

console.log(`Listening on: http://localhost:${server.port}`);
