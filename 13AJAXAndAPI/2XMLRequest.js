//XMLRequest (the old way of doing)

const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()


xhr.open("GET",URL)


//xhr.readystate
// Value	State	           Description
// 0	    UNSENT	           Client has been created. open() not called yet.
// 1	    OPENED	           open() has been called.
// 2	    HEADERS_RECEIVED   send() has been called, and headers and status are available.
// 3	    LOADING	           Downloading; responseText holds partial data.
// 4	    DONE	           The operation is complete.

xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
}

//http status code (xhr.status)
// 1xx informational response – the request was received, continuing process
// 2xx successful – the request was successfully received, understood, and accepted
// 3xx redirection – further action needs to be taken in order to complete the request
// 4xx client error – the request contains bad syntax or cannot be fulfilled
// 5xx server error – the server failed to fulfil an apparently valid request


xhr.onload = function(){ //when ready state is 4 the func is excuted

    if(xhr.status >=200 && xhr.status <300){
    const response = xhr.response;
    const data = JSON.parse(response)
    console.log(data)}

    else {
        console.log('something went wrong')
    }
}

xhr.onerror = ()=>{ //this function is called only when network error like internet disconnnectivity
    console.log('network error')
}

xhr.send()