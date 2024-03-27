function AddNumbers(a, b) {
    return a + b;
}

// print sum of two numbers
console.log(AddNumbers(10, 20)); // 30

function base64Encode(str) {
    return btoa(str);
}

function base64Decode(str) {
    return atob(str);
}

// find nth fibonacci number
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// print nth fibonacci number
console.log(fibonacci(10)); // 5