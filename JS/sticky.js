/* Table of Contents
********************

1. Regulate sticky header behavior  

*/


/* Regulate sticky header behavior */
window.onscroll = function() {myFunction()};

const mediaQuery = window.matchMedia('(min-width:1921px) and (max-width:2400px)')
const mediaQuery2500 = window.matchMedia('(min-width:2401px) and (max-width:3000px)')
const mediaQuery3125 = window.matchMedia('(min-width:3001px) and (max-width:3750px)')
const mediaQuery3850 = window.matchMedia('(min-width:3751px)')
var headerArea = document.getElementById("menusticky");
var sticky = headerArea.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 91) {
    headerArea.classList.add("header_sticky");
  } else {
    headerArea.classList.remove("header_sticky");
  } 
}


if (mediaQuery.matches) {
  function myFunction() {
    if (window.pageYOffset >= 113) {
      headerArea.classList.add("header_sticky");
    } else {
      headerArea.classList.remove("header_sticky");
    } 
  }
}


if (mediaQuery2500.matches) {
  function myFunction() {
    if (window.pageYOffset >= 141) {
      headerArea.classList.add("header_sticky");
    } else {
      headerArea.classList.remove("header_sticky");
    } 
  }
}


if (mediaQuery3125.matches) {
  function myFunction() {
    if (window.pageYOffset >= 176) {
      headerArea.classList.add("header_sticky");
    } else {
      headerArea.classList.remove("header_sticky");
    } 
  }
}


if (mediaQuery3850.matches) {
  function myFunction() {
    if (window.pageYOffset >= 220) {
      headerArea.classList.add("header_sticky");
    } else {
      headerArea.classList.remove("header_sticky");
    } 
  }
}