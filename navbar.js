



// active link when scroll
const sections = document.querySelectorAll("section");

const navLi = document.querySelectorAll("nav .nav-container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// toggle menu
let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");
let navcon = document.querySelector('.container')
let open = document.querySelector('.item')

btn.onclick = function (){
 




    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars", "fa-times");
    }
    else{
        icon.classList.replace("fa-times", "fa-bars");
    }
    
}


