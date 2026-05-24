const deferStart = performance.now();

console.log("DEFER download started");

for (let i = 0; i < 300000000; i++) {}

const deferEnd = performance.now();

console.log(`DEFER executed after ${(deferEnd - deferStart).toFixed(2)} ms`);

console.log("DEFER content:", document.getElementById("content"));
