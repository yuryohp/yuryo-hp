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

// window.addEventListener("scroll", reveal);

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");
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
// Smooth scrolling for all anchor links
const smoothScroll = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScroll.length; i++) {
  smoothScroll[i].addEventListener("click", (e) => {
    e.preventDefault();
    let href = smoothScroll[i].getAttribute("href");
    let targetElement = document.getElementById(href.replace("#", ""));

    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 50;
    const target = rect + offset - gap;

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}

// Function for additional scrolling
function scroll() {
  itemHeight = itemHeight - 50;
  window.scrollTo(0, itemHeight);

  if (itemHeight < 0) {
    return;
  } else {
    setTimeout(scroll, 30);
  }
}

// Variable for item height
let itemHeight = 0;

// Add event listener for smooth scrolling
document.querySelector('a[href^="#"]').addEventListener("click", (e) => {
  let btn = e.currentTarget;
  itemHeight = btn.getBoundingClientRect().top + window.pageYOffset;
  scroll();
});


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


//// NEWS CARDS SLIDE ///
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".news__wrapper i");
  const wrapper = document.querySelector(".news__wrapper");

  // Duplicate carousel items for infinite scrolling
  // const carouselItems = carousel.innerHTML;
  // carousel.innerHTML += carouselItems + carouselItems;

  const cards = Array.from(carousel.querySelectorAll(".card"));
  const firstCardWidth = cards[0].offsetWidth;

  // const firstCard = carousel.querySelector(".card");
  // const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
      startX,
      startScrollLeft,
      timeoutId;


  const updateArrowStates = () => {
    const rightArrow = document.getElementById("right");
    const leftArrow = document.getElementById("left");

    
    // Disable the right arrow if scrolled to the end
    const scrollMax = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft >= scrollMax) {
      rightArrow.classList.add("disabled");
      // Stop auto-scrolling
      clearTimeout(timeoutId);
    } else {
      rightArrow.classList.remove("disabled");
    }

    // Disable the left arrow if scrolled to the start
    if (carousel.scrollLeft <= 0) {
      leftArrow.classList.add("disabled");
    } else {
      leftArrow.classList.remove("disabled");
    }
  };
  
  const dragStart = (e) => { 
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
      if (!isDragging) return;
  
      const newScrollLeft = startScrollLeft - (e.pageX - startX);
      carousel.scrollLeft = newScrollLeft;
      
      // Check if the carousel reaches the start or end and adjust accordingly
      // if (newScrollLeft <= 0) {
      //     carousel.scrollLeft += carousel.scrollWidth / 3;
      // } else if (newScrollLeft >= carousel.scrollWidth * 2 / 3) {
      //     carousel.scrollLeft -= carousel.scrollWidth / 3;
      // }

       // Update arrow states
       updateArrowStates();
  };

  const dragStop = () => {
      isDragging = false; 
      carousel.classList.remove("dragging");
  };

  const autoPlay = () => {
      if (window.innerWidth < 800) return; 
      timeoutId = setTimeout(() => {
          carousel.scrollLeft += firstCardWidth;
          // if (carousel.scrollLeft >= carousel.scrollWidth * 2 / 3) {
          //     carousel.scrollLeft = carousel.scrollWidth / 3;
          // }
          autoPlay();
      }, 4000);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  // wrapper.addEventListener("mouseleave", autoPlay);

  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Calculate the new scroll position
      let newScrollLeft = carousel.scrollLeft + (btn.id === "left" ? -firstCardWidth : firstCardWidth);

      // Check if the new position is out of the duplicated items bounds
      // if (newScrollLeft < carousel.scrollWidth / 3) {
      //     carousel.scrollLeft += carousel.scrollWidth / 3;
      //     newScrollLeft += carousel.scrollWidth / 3;
      // } else if (newScrollLeft >= carousel.scrollWidth * 2 / 3) {
      //     carousel.scrollLeft -= carousel.scrollWidth / 3;
      //     newScrollLeft -= carousel.scrollWidth / 3;
      // }

      // Ensure new scroll position is within bounds
      newScrollLeft = Math.max(0, Math.min(newScrollLeft, carousel.scrollWidth - carousel.clientWidth));
      
      // Scroll to the new position
      carousel.scrollLeft = newScrollLeft;

      // Update arrow states
      updateArrowStates();
  });
});

// Set the initial scroll position to the middle section
carousel.scrollLeft = 0;

 // Update arrow states initially
 updateArrowStates();

  // autoPlay(); // Start autoplay on load
});
