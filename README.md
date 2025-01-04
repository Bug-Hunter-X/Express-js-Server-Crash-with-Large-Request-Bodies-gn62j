# Express.js Server Crash with Large Request Bodies

This repository demonstrates a common issue in Node.js Express.js applications where the server crashes or malfunctions when handling requests with large bodies exceeding the default limit.  The `bug.js` file showcases the problem, while `bugSolution.js` provides a solution.

## Problem

Express.js has a default request body size limit of 100kb. When a request exceeds this limit, the server may crash or behave unexpectedly, potentially causing data loss or incomplete processing.

## Solution

The solution involves configuring Express.js to handle larger request bodies by increasing the `limit` property in the `body-parser` middleware. This allows the server to gracefully handle requests with larger sizes.