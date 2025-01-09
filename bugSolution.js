const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task using async/await
  try {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate 5 seconds of work
  } catch (err) {
    console.error('Error during long-running task:', err);
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});