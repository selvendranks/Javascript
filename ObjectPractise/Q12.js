// 12. Write a JavaScript function to parse an URL.

function urlParser(url) {
  return (parsed = {
    protocol: url.match(/(\D*):/)[1],
    hostname: url.match(/\/\/(w{3}\.|)(\D*)\.com/)[2],
    port : url.match(/\:(\d*)\/\//)[1],
    search : url.match(/search=(\w*)/)[1]
  });
}

console.log(urlParser("https://mitsuri.com/search=wer23fw3f"));
