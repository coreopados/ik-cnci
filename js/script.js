


if(document.querySelector('.main-banner')){
  const swiper = new Swiper('.main-banner', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-banner',
      clickable: true,
    },
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
});

}

if(document.querySelector('.swiper-post')){
  const swiper = new Swiper('.swiper-post', {
    loop: true,
    speed: 1500,
    pagination: {
      el: '.swiper-pagination-post',
      clickable: true,
    },
});

}


// custom select
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



// to top
totop = document.getElementById("to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.pageYOffset>20 || document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    totop.style = "opacity:1; visibility:visible; transition: 0.3s";
  } else {
    totop.style = "opacity:0; visibility:hidden; transition: 0.3s";
  }
}
totop.onclick = function () {
  console.log('click')
  window.scroll(0, 0);
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// anchor link
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });



// langs
const langs = document.querySelectorAll('.lang')

langs.forEach((link) =>{
  link.onclick = function(){

    langs.forEach((lang) =>{
      lang.classList.remove('current-lang');
    })
    this.classList.add('current-lang')
  }
 
})



// mob menu

if(document.querySelector('.mobile-menu-button')){
  const mobButton = document.querySelector('.mobile-menu-button');
  const menuBlock = document.querySelector('.menu-block');
  
  mobButton.onclick = (()=>{
    mobButton.classList.toggle('active')
    menuBlock.classList.toggle('active')
  })
}


AOS.init({
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
});




if(window.innerWidth>768){
  var rellax = new Rellax('.rellax')
}
// if(window.innerWidth<768){
//   rellax.destroy();
// }



// open form
if(document.querySelector('.content-form')){
  const formButton1 = document.querySelector('.open-form')
  const formContent1 = document.querySelector('.content-form')
  
  formButton1.onclick = function(){
      formContent1.classList.toggle('show') 
      
      // formContent1.scrollIntoView({block: "bottom", behavior: "smooth"});
  }
}

 
if(document.querySelector('.custom-donat-field')){

  var radios = document.querySelectorAll('input[type=radio][name="donat"]');
  var customField = document.querySelector('.custom-donat-field');
  
  function changeHandler(event) {
    customField.value = this.value 
  }
  
  Array.prototype.forEach.call(radios, function(radio) {
     radio.addEventListener('change', changeHandler);
  });
    
}


 
if(document.querySelector('.thank')){
  var closeThank = document.querySelector('.close-thank');
  var thankPopup = document.querySelector('.thank');

    
  closeThank.onclick = function(){
    thankPopup.classList.remove('show')
  }
}