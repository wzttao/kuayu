// const request = new XMLHttpRequest()
// request.open ('GET','http://qq.com:8888/friend.json')
// request.onreadystatechange = () => {
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.response)
//     }
// }
// request.send()

function ajax(method, url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            resolve(request.response);
          } else {
            reject(request);
          }
        }
      };
      request.send();
    });
  }
  ajax("get", "http://qq.com:8888/friends.json").then(response => {
    console.log("这是 AJAX");
    console.log(response);
  });

function jsonp(url) {
    return new Promise((resolve,reject)=>{
        const random = 'wztJSONPCallbackName'+ Math.random()
        window[random] =data=>{
               resolve(data)
       }
       const script = document.createElement('script')
       script.src = `${url}?callback=${random}`
       script.onload = () => {
       script.remove()
      }
      script.onerror = () =>{
          reject()
      }
      document.body.appendChild(script)
});
}
jsonp('http://qq.com:8888/friend.js')
  .then((data) => {
      console.log(data)
  })

