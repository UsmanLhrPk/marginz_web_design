function openMenu () {
  var elem = document.getElementById("nav-menu");
  elem.classList.add("open-menu");
}

function closeMenu () {
  var elem = document.getElementById("nav-menu");
  console.log(elem.classList);
  elem.classList.remove("open-menu");
}

function openSearch () {
  closeMenu();
  var elem = document.getElementById("search");
  elem.classList.add("show", "visible");
  var curElem = document.getElementById("search-button-sm");
  curElem.classList.remove("display");
  var logo = document.getElementById("brand-logo");
  logo.classList.add("hidden"); 
  var menu = document.getElementById("menu-button");
  menu.classList.add("hidden");
}

function closeSearch () {
  var elem = document.getElementById("search");
  elem.classList.remove("show", "visible");
  var curElem = document.getElementById("search-button-sm");
  curElem.classList.add("display");
  var logo = document.getElementById("brand-logo");
  logo.classList.remove("hidden"); 
  var menu = document.getElementById("menu-button");
  menu.classList.remove("hidden");
}

function incQty () {
  var elem = document.getElementById("itemQty");
  if (elem.value != 10) {
    elem.value = elem.value*1 + 1;
  };
}

function decQty () {
  var elem = document.getElementById("itemQty");
  if (elem.value != 0) {
    elem.value -= 1;
  }
}

