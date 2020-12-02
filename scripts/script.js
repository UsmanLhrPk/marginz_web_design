function openMenu () {
  var elem = document.getElementById("nav-menu");
  elem.classList.add("open-menu");
}

function closeMenu () {
  var elem = document.getElementById("nav-menu");
  console.log(elem.classList);
  elem.classList.remove("open-menu");
}
