var current = document.querySelector("#current-img");
var imgs = document.querySelectorAll('.images img');

// imgs.forEach((img) => img.addEventListener('click',(e) => current.src = e.target.src ));
// Es6 Syntax doenst work with gulp

imgs.forEach(function(img){
    img.addEventListener('click', function(e){
        current.src = e.target.src;
    })
})
