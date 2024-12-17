// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}


let debounceTimer;
function searchItems() {
  let input = document.getElementById('search-bar').value.toLowerCase();
  let cards = document.querySelectorAll('.product-card');
  let noResultsMessage = document.getElementById('no-results-message');
  let found = false;

  cards.forEach(function(card) {
    let title = card.querySelector('.card-title').textContent.toLowerCase();
    if (title.indexOf(input) > -1) {
      card.style.display = 'block'; // Menampilkan produk yang sesuai
      found = true;
    } else {
      card.style.display = 'none'; // Menyembunyikan produk yang tidak sesuai
    }
  });

  if (!found) {
    noResultsMessage.style.display = 'block'; // Menampilkan pesan "Tidak Ada Hasil"
  } else {
    noResultsMessage.style.display = 'none'; // Menyembunyikan pesan
  }
}

// Fungsi debounce dengan delay 300ms
const debouncedSearch = debounce(searchItems, 500);

// Event listener untuk input pencarian
document.getElementById('search-bar').addEventListener('input', debouncedSearch);

// Fungsi debounce
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}




