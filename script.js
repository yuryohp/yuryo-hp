// scroll to top button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//hamburger menu
const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
  })
);

//ページのスクロールに合わせて画像が表示される

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var i;

  for (i = 0; i < reveals.length; i++) {
    if (reveals[i].getBoundingClientRect().top < window.innerHeight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

////////////////////////////////////////////

//ページのスクロールに合わせて画像が表示される

// window.addEventListener("scroll", revealintro);

// function revealintro() {
//   var reveals = document.querySelectorAll(".reveal-intro");
//   var i;

//   for (i = 0; i < reveals.length; i++) {
//     if (reveals[i].getBoundingClientRect().top < window.innerHeight) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

////////////////////////////////////////////

/* ページ内リンクの際にスムーズスクロールになる */

// ①ページ内リンクの際にスムーズスクロールになる
//→その際にページのheaderタグの高さを自動で算出しスクロール位置を調整
// const smoothScroll = document.querySelectorAll('a[href^="#"]');
// for (let i = 0; i < smoothScroll.length; i++) {
//   smoothScroll[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     let href = smoothScroll[i].getAttribute("href");
//     let targetElement = document.getElementById(href.replace("#", ""));

//     const rect = targetElement.getBoundingClientRect().top;
//     const offset = window.pageYOffset;
//     const gap = 50;
//     const target = rect + offset - gap;

//     window.scrollTo({
//       top: target,
//       behavior: "smooth",
//     });
//   });
// }

// let itemHeight = 0;
// smoothScroll.addEventListener("click", () => {
//   itemHeight = btn.getBoundingClientRect.top + window.pageYOffset;
//   scroll();
// });

// function scroll() {
//   itemHeight = itemHeight - 50;
//   scrollTo(0, itemHeight);

//   if (itemHeight < 0) {
//     return;
//   } else {
//     setTimeout(scroll, 30);
//   }
// }


////// NAVBAR DISAPPEARING AND APPEARING //////////

// if (window.innerWidth < 960) {
//   var prevScrollpos = window.scrollY;
//   window.onscroll = function() {
//     var currentScrollPos = window.scrollY;
//       if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//       } else {
//         document.getElementById("navbar").style.top = "-100px";
//       }
//       prevScrollpos = currentScrollPos;
//     }
// }