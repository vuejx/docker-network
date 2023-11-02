const server = Bun.serve({
    port: 3000,
    fetch: async () => {
        const response = await fetch("http://service_2:3000");
        const html = await response.text(); // HTML string
        return new Response(`SERVICE: service_1
USER_DB=${process.env.USER_DB}
USER_DB_PASSWORD=${process.env.USER_DB_PASSWORD}
----
${html}
`);
    },
});

console.log(`Listening on localhost:${server.port}`);