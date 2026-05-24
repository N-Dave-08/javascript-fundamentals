console.log(
  `NORMAL JS downloading finished at ${(performance.now() - pageStart).toFixed(2)} ms`,
);

const normalExecutionStart = performance.now();

console.log(
  `NORMAL JS execution started at ${(normalExecutionStart - pageStart).toFixed(2)} ms`,
);

// Simulate heavy JS work
for (let i = 0; i < 300000000; i++) {}

const normalExecutionEnd = performance.now();

console.log(
  `NORMAL JS executed at ${(normalExecutionEnd - pageStart).toFixed(2)} ms`,
);

console.log(
  `NORMAL execution duration: ${(normalExecutionEnd - normalExecutionStart).toFixed(2)} ms`,
);

console.log("NORMAL content:", document.getElementById("content"));
