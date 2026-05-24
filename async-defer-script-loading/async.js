console.log(
  `ASYNC JS downloading finished at ${(performance.now() - pageStart).toFixed(2)} ms`,
);

const asyncExecutionStart = performance.now();

console.log(
  `ASYNC JS execution started at ${(asyncExecutionStart - pageStart).toFixed(2)} ms`,
);

// Simulate heavy JS work
for (let i = 0; i < 300000000; i++) {}

const asyncExecutionEnd = performance.now();

console.log(
  `ASYNC JS executed at ${(asyncExecutionEnd - pageStart).toFixed(2)} ms`,
);

console.log(
  `ASYNC execution duration: ${(asyncExecutionEnd - asyncExecutionStart).toFixed(2)} ms`,
);

console.log("ASYNC content:", document.getElementById("content"));
