console.log(
  `DEFER JS downloading finished at ${(performance.now() - pageStart).toFixed(2)} ms`,
);

const deferExecutionStart = performance.now();

console.log(
  `DEFER JS execution started at ${(deferExecutionStart - pageStart).toFixed(2)} ms`,
);

// Simulate heavy JS work
for (let i = 0; i < 300000000; i++) {}

const deferExecutionEnd = performance.now();

console.log(
  `DEFER JS executed at ${(deferExecutionEnd - pageStart).toFixed(2)} ms`,
);

console.log(
  `DEFER execution duration: ${(deferExecutionEnd - deferExecutionStart).toFixed(2)} ms`,
);

console.log("DEFER content:", document.getElementById("content"));
