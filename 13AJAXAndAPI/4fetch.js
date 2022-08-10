//fetch
//fetch by defalut requests the url and gives a promise

//get request
const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
  }).catch((error)=>{
    console.log(error)
  })

//post request

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))