const normalStart = performance.now();

console.log("NORMAL download started");

for (let i = 0; i < 300000000; i++) {}

const normalEnd = performance.now();

console.log(`NORMAL executed after ${(normalEnd - normalStart).toFixed(2)} ms`);

console.log("NORMAL content:", document.getElementById("content"));
