function greet(name) {
    if (!name) {
        return "Hello, Guest!";
    }
    return "Hello, " + name + "!";
}

console.log(greet("Ahmad"));
