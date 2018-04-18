
if('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service_worker.js')
      .then(function(){
        console.log("Service Worker Registerd");
      })
      .catch(function(err) {
        console.log("Error")
      });
}

window.addEventListener('beforeinstallprompt', function(e) {
   
    e.userChoice.then(function(choiceResult) {
  
      console.log(choiceResult.outcome);
  
      if(choiceResult.outcome == 'dismissed') {
        console.log('User cancelled home screen install');
      }
      else {
        console.log('User added to home screen');
      }
    });
  });