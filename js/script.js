let open = document.getElementById("isIconMenuOpen");
let closed = document.getElementById("isIconMenuClosed");
let expandedMenu = document.getElementById("isMenuOpen");
let closedMenu = document.getElementById("isMenuClosed");

open.onclick = function () {
  open.style.display = "none";
  closed.style.display = "block";
  expandedMenu.style.opacity = "0"
  closedMenu.style.display = "none"
};
closed.onclick = function () {
  open.style.display = "block";
  closed.style.display = "none";
  expandedMenu.style.opacity = "1"
  closedMenu.style.display = "block"
};