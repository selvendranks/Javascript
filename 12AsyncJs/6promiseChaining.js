//Promise chaining

//promise.then always returns a promise so we can apply chaining
console.log('script start')

function resolvetry() {
  return new Promise((resolve, reject) => {
    resolve("resolved1");
  });
}

resolvetry()
  .then((e) => {
    console.log(e);
    return e + "2";
    //internally js is returning a promise return Promise.resolve(e+'2')
  })
  .then((e) => {
    console.log(e);
  });

//now lets use promise for the task we have done in 4callBackasync.js

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");

function changeText(element, color, time) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      try {
        element.style.color = color;
        resolve("sucessful");
      } catch (e) {
        reject(e);
      }
    }, time);
  });
}

changeText(heading1, "violet", 1000)
  .then(() => {
    return changeText(heading2, "blue", 1000);
  })
  .then(() => {
    return changeText(heading3, "green", 1000);
  })
  .then(() => {
    changeText(heading4, "yellow", 1000);
  })
  .catch((e)=>{
     console.log(e)
  })

  console.log('script ended')
