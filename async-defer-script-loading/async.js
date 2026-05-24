const asyncStart = performance.now();

console.log("ASYNC download started");

for (let i = 0; i < 300000000; i++) {}

const asyncEnd = performance.now();

console.log(`ASYNC executed after ${(asyncEnd - asyncStart).toFixed(2)} ms`);

console.log("ASYNC content:", document.getElementById("content"));
