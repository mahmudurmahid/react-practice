/* L: ASYNCHRONOUS JS - PROMISES */
// PROMISES EXAMPLE
// console.log(fetch("https://jsonplaceholder.typicode.com/todos/"));

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

/* M: ASYNCHRONOUS JS - ASYNC/AWAIT */
// ASYNC/AWAIT EXAMPLE
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  console.log(data);
}

getTodos();
