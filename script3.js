/* L: ASYNCHRONOUS JS - PROMISES */
// PROMISES EXAMPLE
console.log(fetch("https://jsonplaceholder.typicode.com/todos/"));

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("jonas");
