//async and await works together

//async keyword is used on a function as it always returns a promise

//await keyword is used on a request and waits until the promise is either
//resolved or rejected

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getRequest() {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const data = await response.json();
  return data;
}

getRequest()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
