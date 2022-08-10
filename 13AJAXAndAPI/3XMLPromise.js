const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onload = function () {
      //when ready state is 4 the func is excuted

      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject("something went wrong");
      }
    };
    xhr.send();
  });
}

sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response)
    return data
  })
  .then((data) => {
    const id = data[3].id
    return id;
  }).then((id)=>{
     return sendRequest('Get',`${URL}/${id}`)
  }).then((response)=>{
     console.log(JSON.parse(response))
  })
