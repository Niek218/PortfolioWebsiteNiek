if (window.screen.width > 800) {

// ___PHOTO/MENU___
const photo = document.querySelector('#myPhoto');
const nav = document.querySelector('#myNav');
// Ik maak 2 variabelen aan: photo en nav.


photo.addEventListener('mouseenter', () => {
    nav.style.display = 'block';
    photo.style.display = 'none';
});
// Hieronder heb ik .addEventListener() gebruikt en wanneer de muis in het gebied van de foto beweegt, zal de style 'display' bij het navigatiemenu veranderen naar 'block' en de style van de foto veranderen naar 'none'.


nav.addEventListener('mouseleave', () => {
    nav.style.display = 'none';
    photo.style.display = 'block';
});
// Wanneer de muis uit het gebied van de navigatie beweegt, zal de style 'display' bij het navigatiemenu veranderen naar 'none' en de style van de foto veranderen naar 'block'.


// ___SOCIALBUTTONS___
const dots = document.getElementById("myDots");
const socials = document.getElementById("mySocials");

dots.addEventListener('mouseenter', () => {
    dots.style.display = 'none';
    socials.style.top = '4%';
})
// Wanneer de muis in het gebied van de 3 puntjes komt zal de positie (in css heb ik dit aangegeven met 'top') van '-8' (de standaard) naar '4' schuiven.


socials.addEventListener('mouseleave', () => {
    dots.style.display = 'block';
    socials.style.top = '-8%';
})


}