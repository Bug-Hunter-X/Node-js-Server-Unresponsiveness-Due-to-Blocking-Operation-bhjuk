# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js applications: server unresponsiveness caused by a long-running synchronous operation that blocks the event loop.

## Bug
The `bug.js` file contains a Node.js HTTP server that simulates a long-running task within the request handler. This task occupies the CPU for 5 seconds, preventing the server from responding to other requests during that time.  This can lead to significant performance issues and a poor user experience.

## Solution
The `bugSolution.js` file presents a solution by using asynchronous operations (promises or async/await) and potentially offloading long-running tasks to worker threads or background processes. This prevents the main event loop from being blocked, ensuring responsiveness even during lengthy operations. 

## How to run
1. Clone the repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js` to observe the unresponsive server behavior. You might need to manually kill the process with `Ctrl + C`. 
4. Run `node bugSolution.js` to observe how the improved asynchronous approach keeps the server responsive.