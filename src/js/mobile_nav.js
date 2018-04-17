// get yhe toggle button
var toggleButton = document.querySelector('.toggle-button');

// get the mobile nav
var mobileNav = document.querySelector('.mobile_navbar');

var active = false;

toggleButton.addEventListener('click', openMobileNav);

// Open mobile nav function
function openMobileNav(){
    if(active == false) {
        mobileNav.style.display = 'block';
        active = true;
    }else{
        mobileNav.style.display = 'none';
        active = false;
    }
}