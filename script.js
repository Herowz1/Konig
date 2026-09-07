const menuicon = document.querySelector("#menu-icon");
const navlinks = document.querySelector(".nav-list");

menuicon.onclick = () => {
    navlinks.classList.toggle('active')
}