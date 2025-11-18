// Simple Node.js application for SonarQube testing

function add(a, b) {
    return a + b;
}

function greet(name) {
    if (!name) {
        return "Hello user!";
    }
    return `Hello, ${name}!`;
}

console.log("App is running...");
console.log(add(5, 10));
console.log(greet("Ahmad Ashoor"));
