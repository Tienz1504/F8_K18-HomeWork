// Lesson 1: Prime Number Check

function isPrime(n) {
    if (typeof n !== "number" || n <= 1) {
        return false
    }
    for (let i = 2; i <= n ** 0.5 ; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(3))

// Lesson 2: Perfect Number Check

function isPerfectNumber(n){
    let sum =0
    if (typeof n !== "number" || n <= 1) {
        return false
    }
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum= sum +i
        }
    }
    return sum===n

}

console.log(isPerfectNumber(28))