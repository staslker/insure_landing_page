const menu = document.getElementById('menu');
const hamburger = document.getElementById("hamburger")
hamburger.addEventListener('click', function myfunc() {
     hamburger.classList.toggle('show');
     menu.classList.toggle('show');
});

// hamburger.addEventListener('click', myFunction);

// function myFunction() {
//      
//      hamburger.classList.toggle('show');
//      menu.classList.toggle('show');
// };

