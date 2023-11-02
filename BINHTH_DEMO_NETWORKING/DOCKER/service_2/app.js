const server = Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response(`SERVICE: service_2
USER_DB=${process.env.USER_DB}
USER_DB_PASSWORD=${process.env.USER_DB_PASSWORD}
`);
    },
});

console.log(`Listening on localhost:${server.port}`);