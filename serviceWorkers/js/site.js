if ('serviceWorker' in navigator) {
  console.log("yes service worker is present");
  navigator.serviceWorker.register('js/serviceWorker.js').then(function(){
    console.log('CLIENT: service worker registration complete.');
  },function(err){
    console.log(err);
    console.log('CLIENT: service worker registration failure.');
  })


}