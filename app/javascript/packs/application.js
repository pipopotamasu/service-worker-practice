/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log("Hello World from Webpacker");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function(registration) {
      // 登録成功
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    })
    .catch(function(err) {
      // 登録失敗 :(
      console.log("ServiceWorker registration failed: ", err);
    });
}

window.onload = () => {
  const element = document.querySelector("#content");
  for (let i = 1; i <= 100; i++) {
    const image = document.createElement("img");
    image.setAttribute("src", `https://robohash.org/${i}.png?size=100x100`);

    element.appendChild(image);
  }
};
