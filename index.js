const HTML_STRING = `<!DOCTYPE html>
<body>
    <h1>Hello Need Global</h1>
</body>
</html>`;

addEventListener("fetch", (event) => {
  const response = new Response(HTML_STRING, {
    headers: {
      "Content-Type": "text/html",
    },
  });
  event.respondWith(response);
});
