let links = document.querySelectorAll('.link')


links.forEach((e)=>{
  e.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active')
  })
})

let drop = document.querySelectorAll('.drop');

drop.forEach((e)=>{
  e.addEventListener('click',()=>{
    e.classList.toggle('active');
  })
})

let homeMedia = document.getElementById('homeMedia');
if(homeMedia){
  homeMedia.addEventListener('click',()=>{
    homeMedia.classList.toggle('active');
  })
  
  if(window.innerWidth <= 421){
    homeMedia.addEventListener('mouseleave',()=>{
      homeMedia.classList.remove('active');
    })
  }
}

let goTop = document.querySelector(".goTop");
let footer = document.querySelector(".footer");

goTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
  if (window.scrollY >= footer.offsetTop - 600) {
    if (homeMedia && goTop) {
      goTop.style.display = "none";
      homeMedia.style.display = "none";
    }
  } else {
    if (homeMedia && goTop) {
      goTop.style.display = "block";
      homeMedia.style.display = "flex";
    }
  }
});


let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

nav.style.transition = "left 0.5s ease-in-out, display 0.5s ease-in-out";

menu.addEventListener("click", () => {
  if (nav.style.left === "0px") {
    nav.style.left = "-800px";
    setTimeout(() => {
      nav.style.display = "none";
    }, 500);
  } else {
    nav.style.display = "flex";
    setTimeout(() => {
      nav.style.left = "0px";
    }, 10);
  }
  menu.classList.toggle("active");
});



const header = document.querySelector("header");

window.onscroll = function() {
    if (window.scrollY > 100) {
        header.classList.add("fixed");
        document.body.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed");
        document.body.classList.remove("fixed-header");
    }
};

