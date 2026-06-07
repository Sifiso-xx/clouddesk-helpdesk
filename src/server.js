const http = require("http");

const PORT = process.env.PORT || 3006;

function json(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(payload, null, 2));
}

function handler(request, response) {
  const url = new URL(request.url, `http://localhost:${PORT}`);

  if (request.method === "GET" && url.pathname === "/health") {
    json(response, 200, {
      status: "ok",
      service: "clouddesk-helpdesk",
      timestamp: new Date().toISOString()
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/version") {
    json(response, 200, {
      service: "CloudDesk Helpdesk",
      version: process.env.APP_VERSION || "0.1.0"
    });
    return;
  }

  json(response, 200, {
    name: "CloudDesk Helpdesk",
    problem: "Small businesses need a simple support ticket system without enterprise complexity, but with enough structure to track issues, comments, priority, status, and service quality.",
    docs: "See README.md and docs/ for the build roadmap."
  });
}

if (require.main === module) {
  http.createServer(handler).listen(PORT, () => {
    console.log(`CloudDesk Helpdesk running on http://localhost:${PORT}`);
  });
}

module.exports = { handler };
