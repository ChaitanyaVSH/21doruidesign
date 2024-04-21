const navToggler = document.getElementById("fa-nav-icon-toggler");
const navBar = document.getElementById("nav");

navToggler.addEventListener("click", () => {
    navBar.classList.toggle("visible");
});
